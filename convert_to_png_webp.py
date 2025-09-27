#!/usr/bin/env python3
import argparse
import csv
import json
import re
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Dict, Tuple, Optional, List

from PIL import Image
from tqdm import tqdm

"""
PNG → WebP 변환 스크립트 (재귀 탐색)
- 파일명 패턴 기반 리사이즈 규칙
- width 또는 height 한쪽만 지정 가능 (예: "1200x", "x400", "800x600")
- 원본 PNG는 절대 삭제하지 않음 (요청에 따라 삭제 기능 제거)
- 품질(quality) 또는 무손실(lossless) 선택
- 이미 존재하는 webp는 기본적으로 skip (원하면 --force)
- 원본이 더 최신일 때만 재생성하고 싶으면 --only-changed
- 결과를 CSV 로그로 저장 가능 (--log-csv)

규칙 JSON 예시:
{
  "rules_mode": "first-match",
  "default_behavior": "convert",
  "resize_mode": "fit",
  "quality": 82,
  "lossless": false,
  "rules": [
    { "pattern": "logo.png", "type": "exact", "size": "512x512" },
    { "pattern": "wide_banner_*.png", "type": "glob", "size": "1920x" },
    { "pattern": "^avatar_[0-9]+\\.png$", "type": "regex", "size": "x256" }
  ]
}

size 형식:
- "800x600": 폭/높이 모두
- "800x" / "800xauto": 폭만 고정, 높이 비율 유지
- "x600" / "autox600": 높이만 고정, 폭 비율 유지

리사이즈 모드:
- fit: (폭/높이 모두 있을 때) 지정 박스 안으로 비율 유지 최대; 한 축만 지정 시 해당 축 기준 스케일
- inside: fit와 유사하지만 업스케일 방지; 단일 축 시에도 업스케일 방지
- cover: (폭/높이 모두) 박스 덮도록 확대 후 중앙 crop; 단일 축이면 단일 스케일
- stretch: (폭/높이 모두) 비율 무시; 단일 축이면 비율 유지(왜곡 방지)

default_behavior:
- convert: 규칙에 매칭되지 않아도 변환 (리사이즈 없음)
- skip: 규칙에 없는 파일은 건너뜀
"""

def parse_size(size_str: str) -> Tuple[Optional[int], Optional[int]]:
    s = size_str.lower().strip()
    if "x" not in s:
        raise ValueError(f"잘못된 사이즈 형식: {size_str} (예: 512x512, 800x, x600)")
    left, right = s.split("x", 1)

    def norm(v: str) -> Optional[int]:
        v = v.strip()
        if v in ("", "auto", "none"):
            return None
        if not v.isdigit():
            raise ValueError(f"숫자 아님: {v}")
        iv = int(v)
        if iv <= 0:
            raise ValueError("0 또는 음수 불가")
        return iv

    w = norm(left)
    h = norm(right)
    if w is None and h is None:
        raise ValueError("width, height 둘 다 비울 수 없음")
    return w, h


class Rule:
    def __init__(self, pattern: str, rtype: str,
                 size: Tuple[Optional[int], Optional[int]],
                 resize_mode: Optional[str] = None):
        self.pattern = pattern
        self.type = rtype
        self.size = size
        self.resize_mode = resize_mode
        if self.type == "regex":
            self._compiled = re.compile(pattern)
        else:
            self._compiled = None

    def matches(self, filename: str) -> bool:
        if self.type == "exact":
            return filename == self.pattern
        elif self.type == "glob":
            regex = "^" + re.escape(self.pattern).replace("\\*", ".*").replace("\\?", ".") + "$"
            return re.match(regex, filename) is not None
        elif self.type == "regex":
            return self._compiled.search(filename) is not None
        return False


def load_rules(json_path: Optional[str]) -> Dict:
    if not json_path:
        return {
            "rules_mode": "first-match",
            "default_behavior": "convert",
            "resize_mode": "fit",
            "quality": 80,
            "lossless": False,
            "rules": []
        }
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    data.setdefault("rules_mode", "first-match")
    data.setdefault("default_behavior", "convert")
    data.setdefault("resize_mode", "fit")
    data.setdefault("quality", 80)
    data.setdefault("lossless", False)
    data.setdefault("rules", [])
    return data


def build_rule_objects(cfg: Dict) -> List[Rule]:
    res = []
    for r in cfg["rules"]:
        size = parse_size(r["size"])
        res.append(
            Rule(
                pattern=r["pattern"],
                rtype=r.get("type", "exact"),
                size=size,
                resize_mode=r.get("resize_mode")
            )
        )
    return res


def determine_resize(filename: str, rules, cfg) -> Optional[Dict]:
    for rule in rules:
        if rule.matches(filename):
            return {
                "size": rule.size,
                "resize_mode": rule.resize_mode or cfg["resize_mode"]
            }
    if cfg["default_behavior"] == "convert":
        return None
    elif cfg["default_behavior"] == "skip":
        return {"skip": True}
    return None


def resize_image(img: Image.Image,
                 target_size: Tuple[Optional[int], Optional[int]],
                 mode: str) -> Image.Image:
    orig_w, orig_h = img.size
    tw, th = target_size

    if tw is not None and th is None:
        ratio = tw / orig_w
        new_w = tw
        new_h = max(1, int(round(orig_h * ratio)))
        if mode == "inside" and tw > orig_w:
            return img
        return img.resize((new_w, new_h), Image.LANCZOS)

    if tw is None and th is not None:
        ratio = th / orig_h
        new_h = th
        new_w = max(1, int(round(orig_w * ratio)))
        if mode == "inside" and th > orig_h:
            return img
        return img.resize((new_w, new_h), Image.LANCZOS)

    if tw is None or th is None:
        raise ValueError("내부 오류: 단일 축 처리 누락")

    if mode == "stretch":
        return img.resize((tw, th), Image.LANCZOS)

    ratio_w = tw / orig_w
    ratio_h = th / orig_h

    if mode == "fit":
        ratio = min(ratio_w, ratio_h)
        return img.resize((int(orig_w * ratio), int(orig_h * ratio)), Image.LANCZOS)
    if mode == "inside":
        ratio = min(ratio_w, ratio_h)
        if ratio >= 1.0:
            return img
        return img.resize((int(orig_w * ratio), int(orig_h * ratio)), Image.LANCZOS)
    if mode == "cover":
        ratio = max(ratio_w, ratio_h)
        tmp = img.resize((int(orig_w * ratio), int(orig_h * ratio)), Image.LANCZOS)
        new_w, new_h = tmp.size
        left = (new_w - tw) // 2
        top = (new_h - th) // 2
        return tmp.crop((left, top, left + tw, top + th))

    raise ValueError(f"지원하지 않는 resize_mode: {mode}")


def process_one(png_path: Path, out_ext: str, cfg, rules, args):
    rel = png_path.relative_to(args.root)
    filename = png_path.name

    try:
        decision = determine_resize(filename, rules, cfg)
        if decision and decision.get("skip"):
            return ("skipped", str(rel), "규칙 미매칭 skip")

        target_webp = png_path.with_suffix("." + out_ext)

        # 기존 파일 처리 정책
        if target_webp.exists():
            if args.force:
                pass
            elif args.only_changed:
                if target_webp.stat().st_mtime >= png_path.stat().st_mtime:
                    return ("skip-exist", str(rel), "최신 webp 존재")
            else:
                return ("skip-exist", str(rel), "webp 존재")

        if args.dry_run:
            action = "리사이즈+변환" if decision else "변환만"
            return ("dry-run", str(rel), action)

        with Image.open(png_path) as im:
            im.load()
            if decision and "size" in decision and decision["size"] is not None:
                im = resize_image(im, decision["size"], decision["resize_mode"])
            save_params = {}
            if cfg.get("lossless"):
                save_params["lossless"] = True
            else:
                save_params["quality"] = cfg.get("quality", 80)
            im.save(target_webp, "WEBP", **save_params)

        return ("converted", str(rel), f"-> {target_webp.name}")
    except Exception as e:
        return ("error", str(rel), repr(e))


def collect_pngs(root: Path):
    # 확장자 대소문자 무시
    return [p for p in root.rglob("*") if p.is_file() and p.suffix.lower() == ".png"]


def write_csv(log_path: Path, rows):
    log_path.parent.mkdir(parents=True, exist_ok=True)
    with open(log_path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["status", "path", "message"])
        for r in rows:
            w.writerow(r)


def main():
    parser = argparse.ArgumentParser(description="PNG → WebP 변환 (원본 삭제 없음)")
    parser.add_argument("--root", required=True, help="루트 디렉터리")
    parser.add_argument("--config", help="규칙 JSON 경로")
    parser.add_argument("--ext", default="webp", help="출력 확장자 (기본: webp)")
    parser.add_argument("--threads", type=int, default=4)
    parser.add_argument("--dry-run", action="store_true", help="실제 저장 없이 예정 작업만")
    parser.add_argument("--force", action="store_true", help="이미 존재해도 강제 재생성")
    parser.add_argument("--only-changed", action="store_true", help="원본이 더 최신인 경우만 재생성")
    parser.add_argument("--log-csv", help="결과 CSV 로그 경로")
    args = parser.parse_args()

    root = Path(args.root).resolve()
    if not root.is_dir():
        print(f"루트 디렉터리 없음: {root}", file=sys.stderr)
        sys.exit(1)

    cfg = load_rules(args.config)
    rules = build_rule_objects(cfg)

    png_files = collect_pngs(root)
    if not png_files:
        print("PNG 파일이 없습니다.")
        return

    results = []
    with ThreadPoolExecutor(max_workers=args.threads) as ex:
        futures = []
        for p in png_files:
            futures.append(ex.submit(process_one, p, args.ext, cfg, rules, args))
        for f in tqdm(as_completed(futures), total=len(futures), desc="Processing"):
            results.append(f.result())

    summary = {}
    for status, rel, msg in results:
        summary.setdefault(status, 0)
        summary[status] += 1

    print("\n=== 결과 요약 ===")
    for k, v in summary.items():
        print(f"{k}: {v}")

    if any(r[0] == "error" for r in results):
        print("\n에러 상세:")
        for r in results:
            if r[0] == "error":
                print(f"- {r[1]}: {r[2]}")

    if args.log_csv:
        write_csv(Path(args.log_csv), results)
        print(f"\nCSV 로그 저장: {args.log_csv}")


if __name__ == "__main__":
    main()