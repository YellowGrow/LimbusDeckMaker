"use strict";

/**
 * Hardened Image Preloader
 * - 모든 이미지 선로딩 후 오버레이 제거
 * - 이벤트/플래그/함수 호출 3중 안전장치
 * - 타임아웃, 강제 폴백, 미지원 conic-gradient 폴백
 */

(function(){
    const START_TIME = performance.now();
    const MAX_TOTAL_MS = 30000;           // 30초 지나면 남은 건 포기하고 끝냄
    const FORCE_HIDE_AFTER_DONE_MS = 1500; // 완료 표시 후 1.5초 지나도 안 사라지면 강제 제거
    const CONCURRENCY = 32;               // 동시에 불러올 이미지 수 (너무 높으면 서버 몰림)

    const overlay = document.getElementById('preload-overlay');
    if (!overlay) {
        window.APP_PRELOAD_DONE = true;
        document.dispatchEvent(new Event('app-preload-ready'));
        return;
    }
    // body 직계 보장
    if (overlay.parentElement !== document.body) document.body.appendChild(overlay);

    const barInner  = overlay.querySelector('.bar-inner');
    const countSpan = overlay.querySelector('.count');
    const phaseSpan = overlay.querySelector('.phase');
    const skipBtn   = overlay.querySelector('#preload-skip-btn');
    const titleEl   = overlay.querySelector('.preload-title');

    let aborted = false;
    let finished = false;

    function log(...a){ console.log('[PRELOAD]', ...a); }

    skipBtn?.addEventListener('click', ()=>{
        aborted = true;
        log('User skipped.');
        finish(true);
    });

    // ===== 수집 =====
    function norm(u){ return (typeof u==='string') ? u.trim() : null; }

    function collect() {
        const s = new Set();
        try {
            Object.values(TIER_ICONS||{}).forEach(v=>norm(v)&&s.add(norm(v)));
            Object.values(EGO_TIER_LABELS||{}).forEach(v=>norm(v)&&s.add(norm(v)));
            Object.values(SIN_ATTRIBUTES||{}).forEach(o=>o?.icon&&s.add(norm(o.icon)));
            Object.values(DEFENSE_ICONS||{}).forEach(map=>{
                Object.values(map).forEach(v=>norm(v)&&s.add(norm(v)));
            });
            Object.values(COIN_FACE_ICONS||{}).forEach(v=>norm(v)&&s.add(norm(v)));
            Object.values(COIN_INDEX_ICONS||{}).forEach(v=>norm(v)&&s.add(norm(v)));

            (window.SLOT_CONFIG||[]).forEach(char=>{
                if (!char) return;
                norm(char.defaultIcon)&&s.add(norm(char.defaultIcon));
                (char.personalities||[]).forEach(p=>{
                    if (!p) return;
                    norm(p.image)&&s.add(norm(p.image));
                    if (p.details){
                        norm(p.details.fullImage)&&s.add(norm(p.details.fullImage));
                        (p.details.skillIcons||[]).forEach(si=>norm(si)&&s.add(norm(si)));
                        const passAll=[...(p.details.passives||[]), ...(p.details.supportPassives||[])];
                        passAll.forEach(pa=>{
                            norm(pa.conditionImage)&&s.add(norm(pa.conditionImage));
                            // numbered
                            let idx=2;
                            while(true){
                                const key='conditionImage'+idx;
                                if (!(key in pa)) break;
                                norm(pa[key])&&s.add(norm(pa[key]));
                                idx++;
                            }
                            // array
                            if (Array.isArray(pa.conditions)){
                                pa.conditions.forEach(c=>{
                                    c?.image && norm(c.image)&&s.add(norm(c.image));
                                });
                            }
                        });
                    }
                });
                (char.egos||[]).forEach(pool=>{
                    (pool||[]).forEach(e=>{
                        if (!e) return;
                        norm(e.image)&&s.add(norm(e.image));
                        norm(e.slotImage)&&s.add(norm(e.slotImage));
                        e.egoDetails?.fullImage && norm(e.egoDetails.fullImage)&&s.add(norm(e.egoDetails.fullImage));
                    });
                });
            });
        } catch(e){
            log('Collect error', e);
        }
        return Array.from(s);
    }

    let all = collect();
    // 필터: data: / 빈 문자열 제거
    all = all.filter(u=>u && !u.startsWith('data:'));

    // 우선순위 분리 (프로필/자원/작은 것 먼저)
    function splitPriority(list){
        const p1=[], p2=[];
        list.forEach(u=>{
            if (u.match(/프로필|기타|자원_|등급_|코인_|수비_|회피_|반격_/i)) p1.push(u);
            else p2.push(u);
        });
        return [p1,p2];
    }
    const phases = splitPriority(all);
    if (!phases[0].length && phases[1].length){
        phases[0] = phases[1];
        phases[1] = [];
    }

    // ===== 진행률 =====
    function updateProgress(loaded,total,label,phaseIdx,totalPhases){
        if (aborted) return;
        const phaseRatio = total? (loaded/total):1;
        const overall = ((phaseIdx) + phaseRatio)/totalPhases;
        const pct = (overall*100);
        if (barInner) barInner.style.width = pct.toFixed(2)+'%';
        if (countSpan) countSpan.textContent = `${loaded} / ${total}`;
        if (phaseSpan) phaseSpan.textContent = `Phase ${phaseIdx+1}/${totalPhases} (${label})`;
        if (pct >= 100 && phaseSpan) phaseSpan.textContent = '완료';
    }

    // ===== 이미지 로더 (concurrency) =====
    function loadBatch(urls, onProgress){
        return new Promise(resolve=>{
            if (!urls.length) return resolve();
            let loaded=0, idx=0;
            const total=urls.length;

            function next(){
                if (aborted) return resolve();
                if (idx>=total) return;
                const url=urls[idx++];
                const img=new Image();
                const done=()=>{
                    loaded++;
                    onProgress(loaded,total,url);
                    if (loaded===total) resolve();
                    else next();
                };
                img.onload=done;
                img.onerror=done;
                img.src=url;
            }
            // kick off up to CONCURRENCY
            const starters = Math.min(CONCURRENCY, urls.length);
            for (let i=0;i<starters;i++) next();
        });
    }

    // ===== finish / fail-safe =====
    function reallyHideOverlay(){
        if (!overlay) return;
        overlay.classList.add('hidden');
        // 인라인으로 추가 (다른 CSS override 대비)
        overlay.style.display='none';
        overlay.style.opacity='0';
        overlay.style.visibility='hidden';
        overlay.setAttribute('aria-hidden','true');
    }

    function finish(skipped=false){
        if (finished) return;
        finished = true;
        window.APP_PRELOAD_DONE = true;
        overlay?.setAttribute('data-state','done');

        if (barInner) barInner.style.width='100%';
        if (phaseSpan && !skipped) phaseSpan.textContent='완료';
        if (phaseSpan && skipped) phaseSpan.textContent='건너뜀';

        // 바로 숨기지 않고 약간의 여유 후 숨김 (시각적)
        setTimeout(()=> {
            reallyHideOverlay();
            // 다중 안전망: 이벤트 + 콜백
            document.dispatchEvent(new Event('app-preload-finished'));
            document.dispatchEvent(new Event('app-preload-ready'));
            if (typeof window.__FORCE_APP_START__ === 'function') {
                try { window.__FORCE_APP_START__(); } catch(e){ console.error(e); }
            }
        }, 120);

        // 강제 폴백: 일정 시간 지나도 안 사라졌으면 다시 시도
        setTimeout(()=>{
            if (!overlay || overlay.classList.contains('hidden')) return;
            log('Force hide overlay fallback');
            reallyHideOverlay();
        }, FORCE_HIDE_AFTER_DONE_MS);
    }

    // 절대 시간 초과 폴백
    setTimeout(()=>{
        if (!finished){
            log('Timeout reached – force finish.');
            finish(true);
        }
    }, MAX_TOTAL_MS);

    // ===== 실행 =====
    (async function run(){
        if (!all.length){
            log('No images to preload.');
            finish();
            return;
        }
        if (titleEl) titleEl.textContent = '이미지 로딩 중...';

        const totalPhases = phases.filter(p=>p.length).length || 1;
        let phaseIndex = 0;
        for (const list of phases){
            if (!list.length) { phaseIndex++; continue; }
            const label = phaseIndex===0? '핵심 리소스' : '상세 일러스트';
            await loadBatch(list,(loaded,total)=>updateProgress(loaded,total,label,phaseIndex,totalPhases));
            phaseIndex++;
            if (aborted) break;
        }
        finish(aborted);
    })();

    // 디버깅용 전역 (원치 않으면 제거)
    window.__PRELOAD_DEBUG__ = {
        list: all,
        finish,
        skip: ()=>{ aborted=true; finish(true); }
    };
})();