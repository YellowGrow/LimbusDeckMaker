"use strict";

/**
 * 이미지 선로딩 스크립트
 * - SLOT_CONFIG, constants.js 가 로드된 후 실행되므로 index.html 에서 app.js 이전에 배치
 * - 모든 이미지 URL 수집 → 중복 제거 → 순차 or 병렬 로드
 * - 진행 상황 UI 표시
 * - window.APP_PRELOAD_DONE = true 설정 후 app.js 가 시작 (app.js 에서 DOMContentLoaded 시점에 체크)
 */

(function(){
    const overlay = document.getElementById('preload-overlay');
    if (!overlay) {
        // Overlay 없으면 바로 완료 처리
        window.APP_PRELOAD_DONE = true;
        return;
    }
    const barInner   = overlay.querySelector('.bar-inner');
    const countSpan  = overlay.querySelector('.count');
    const phaseSpan  = overlay.querySelector('.phase');
    const skipBtn    = overlay.querySelector('#preload-skip-btn');

    let aborted = false;
    skipBtn.addEventListener('click', ()=>{
        aborted = true;
        finish(true);
    });

    /** 수집할 때 null/빈값 제거 & 정상화 */
    const normalize = url => {
        if (!url || typeof url !== 'string') return null;
        return url.trim();
    };

    /**
     * 1) 이미지 경로 수집
     *    - personalities: image, details.fullImage, details.skillIcons[], passives/supportPassives condition 이미지
     *    - egos: image, slotImage, egoDetails.fullImage
     *    - constants: 티어 / EGO 티어 / 죄악 아이콘 / 방어 아이콘 / 코인 페이스 / 코인 인덱스
     *    - (선택) CSS background sprite 등 추가 가능
     */
    function collectAllImages() {
        const urls = new Set();

        // TIER
        Object.values(TIER_ICONS || {}).forEach(v=>normalize(v)&&urls.add(v));
        Object.values(EGO_TIER_LABELS || {}).forEach(v=>normalize(v)&&urls.add(v));
        Object.values(SIN_ATTRIBUTES || {}).forEach(obj=>obj?.icon && urls.add(normalize(obj.icon)));

        // DEFENSE_ICONS 중첩 구조
        Object.values(DEFENSE_ICONS || {}).forEach(map=>{
            Object.values(map).forEach(v=>normalize(v)&&urls.add(v));
        });

        Object.values(COIN_FACE_ICONS || {}).forEach(v=>normalize(v)&&urls.add(v));
        Object.values(COIN_INDEX_ICONS || {}).forEach(v=>normalize(v)&&urls.add(v));

        (window.SLOT_CONFIG || []).forEach(char => {
            if (!char) return;
            // 기본 아이콘
            if (normalize(char.defaultIcon)) urls.add(normalize(char.defaultIcon));

            // 인격
            (char.personalities || []).forEach(p=>{
                if (!p) return;
                if (normalize(p.image)) urls.add(normalize(p.image));
                if (p.details) {
                    if (normalize(p.details.fullImage)) urls.add(normalize(p.details.fullImage));
                    (p.details.skillIcons || []).forEach(si=>normalize(si)&&urls.add(normalize(si)));
                    // 패시브 조건 이미지
                    const passivesAll = []
                        .concat(p.details.passives || [])
                        .concat(p.details.supportPassives || []);
                    passivesAll.forEach(pa=>{
                        // 기본 단일
                        if (normalize(pa.conditionImage)) urls.add(normalize(pa.conditionImage));
                        // numbered (conditionImage2/3/…)
                        let idx=2;
                        while(true){
                            const key='conditionImage'+idx;
                            if (!(key in pa)) break;
                            const v = pa[key];
                            if (normalize(v)) urls.add(normalize(v));
                            idx++;
                        }
                        // 배열형
                        if (Array.isArray(pa.conditions)) {
                            pa.conditions.forEach(c=>{
                                if (c?.image && normalize(c.image)) urls.add(normalize(c.image));
                            });
                        }
                    });
                }
            });

            // 에고
            (char.egos || []).forEach(pool=>{
                (pool || []).forEach(e=>{
                    if (!e) return;
                    if (normalize(e.image)) urls.add(normalize(e.image));
                    if (normalize(e.slotImage)) urls.add(normalize(e.slotImage));
                    if (e.egoDetails?.fullImage && normalize(e.egoDetails.fullImage)) {
                        urls.add(normalize(e.egoDetails.fullImage));
                    }
                });
            });
        });

        return Array.from(urls);
    }

    /**
     * 2) 우선순위 나누기 (optional)
     *    - phase 1: 작은 썸네일/슬롯 / 아이콘 (빠른 첫 화면)
     *    - phase 2: 큰 full 일러 / 덜 자주 필요한 이미지
     *    여기서는 단순 규칙 (폴더명/파일명) 으로 구분 예시
     */
    function splitByPriority(all) {
        const phase1 = [];
        const phase2 = [];
        all.forEach(u=>{
            // 경로 규칙은 프로젝트 폴더 구조에 맞게 조정
            if (u.match(/프로필|slot|tier|등급_|코인_|자원_|수비_|회피_|반격_/)) {
                phase1.push(u);
            } else {
                phase2.push(u);
            }
        });
        return [phase1, phase2];
    }

    /**
     * 3) 실제 로더
     */
    function preloadImages(list, onProgress) {
        return new Promise(resolve=>{
            if (list.length===0) return resolve();
            let loaded=0;
            list.forEach(url=>{
                if (aborted) return;
                const img = new Image();
                const done=()=>{
                    loaded++;
                    onProgress && onProgress(loaded, list.length, url);
                    if (loaded===list.length) resolve();
                };
                img.onload=done;
                img.onerror=done;
                img.src = url;
            });
        });
    }

    function updateProgress(loaded,total,label,phaseIndex,totalPhases){
        const pctPhase = total ? (loaded/total) : 1;
        // 전체 진행률 (phase별 동일 가중치) -> (phaseIndex 이전 완료 + 현재 phase 비율)/총 phase
        const overall = ((phaseIndex) + pctPhase) / totalPhases;
        barInner.style.width = (overall*100).toFixed(1) + '%';
        countSpan.textContent = `${loaded} / ${total}`;
        phaseSpan.textContent = `Phase ${phaseIndex+1}/${totalPhases} (${label||''})`;
    }

    function finish(skipped=false){
        barInner.style.width='100%';
        phaseSpan.textContent = skipped ? '건너뛰기' : '완료';
        setTimeout(()=>{
            overlay.classList.add('hidden');
            window.APP_PRELOAD_DONE = true;
            // 혹시 app.js 가 이미 DOMContentLoaded 중이라면 이벤트 발생
            document.dispatchEvent(new Event('app-preload-finished'));
        }, 200);
    }

    // 실행
    phaseSpan.textContent = '수집 중...';
    let all = [];
    try {
        all = collectAllImages();
    } catch (e) {
        console.warn('[Preload] 수집 오류', e);
    }

    // 너무 많으면 (예: 0) 바로 종료
    if (!all.length) {
        finish();
        return;
    }

    const [phase1, phase2] = splitByPriority(all);
    const phases = [phase1, phase2]; // 2단계. 전체 한꺼번이면 phases=[all] 로 교체.

    // Phase 순차 실행
    (async function run(){
        const totalPhases = phases.length;
        for (let i=0;i<phases.length;i++){
            if (aborted) break;
            const list = phases[i];
            // 현재 phase label
            const label = (i===0? '핵심 썸네일' : '상세 일러');
            await preloadImages(list,(loaded,total,url)=>{
                updateProgress(loaded,total,label,i,totalPhases);
            });
        }
        finish(aborted);
    })();
})();