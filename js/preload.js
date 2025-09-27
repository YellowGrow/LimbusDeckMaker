"use strict";

(function(){
    const START_TIME = performance.now();
    const MAX_TOTAL_MS = 30000;
    const FORCE_HIDE_AFTER_DONE_MS = 1500;
    const CONCURRENCY = 32;

    const overlay = document.getElementById('preload-overlay');
    if (!overlay) {
        window.APP_PRELOAD_DONE = true;
        document.dispatchEvent(new Event('app-preload-ready'));
        return;
    }
    if (overlay.parentElement !== document.body) document.body.appendChild(overlay);

    const barInner  = overlay.querySelector('.bar-inner');
    const countSpan = overlay.querySelector('.count');
    const phaseSpan = overlay.querySelector('.phase');
    const titleEl   = overlay.querySelector('.preload-title');

    let finished = false;
    function log(...a){ console.log('[PRELOAD]', ...a); }

    function norm(u){ return (typeof u==='string')?u.trim():null; }

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
                        const passAll=[...(p.details.passives||[]),...(p.details.supportPassives||[])];
                        passAll.forEach(pa=>{
                            norm(pa.conditionImage)&&s.add(norm(pa.conditionImage));
                            let idx=2;
                            while(true){
                                const key='conditionImage'+idx;
                                if (!(key in pa)) break;
                                norm(pa[key])&&s.add(norm(pa[key]));
                                idx++;
                            }
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
        } catch(e){ log('Collect error', e); }
        return Array.from(s);
    }

    let all = collect().filter(u=>u && !u.startsWith('data:'));

    function splitPriority(list){
        const p1=[],p2=[];
        list.forEach(u=>{
            if (u.match(/프로필|기타|자원_|등급_|코인_|수비_|회피_|반격_/i)) p1.push(u);
            else p2.push(u);
        });
        return [p1,p2];
    }
    const phases = splitPriority(all);
    if (!phases[0].length && phases[1].length){
        phases[0]=phases[1]; phases[1]=[];
    }

    function updateProgress(loaded,total,label,phaseIdx,totalPhases){
        const phaseRatio = total? (loaded/total):1;
        const overall = ((phaseIdx)+phaseRatio)/totalPhases;
        const pct = overall*100;
        if (barInner) barInner.style.width = pct.toFixed(2)+'%';
        if (countSpan) countSpan.textContent = `${loaded} / ${total}`;
        if (phaseSpan) phaseSpan.textContent = `Phase ${phaseIdx+1}/${totalPhases} (${label})`;
        if (pct >= 100 && phaseSpan) phaseSpan.textContent = '완료';
    }

    function loadBatch(urls, onProgress){
        return new Promise(resolve=>{
            if (!urls.length) return resolve();
            let loaded=0, idx=0;
            const total=urls.length;
            function next(){
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
            const starters=Math.min(CONCURRENCY, urls.length);
            for (let i=0;i<starters;i++) next();
        });
    }

    function reallyHideOverlay(){
        if (!overlay) return;
        overlay.classList.add('hidden');
        overlay.style.display='none';
        overlay.style.opacity='0';
        overlay.style.visibility='hidden';
        overlay.setAttribute('aria-hidden','true');
    }

    function finish(){
        if (finished) return;
        finished = true;
        window.APP_PRELOAD_DONE = true;
        if (barInner) barInner.style.width='100%';
        if (phaseSpan && phaseSpan.textContent !== '완료') phaseSpan.textContent='완료';

        setTimeout(()=>{
            reallyHideOverlay();
            document.dispatchEvent(new Event('app-preload-finished'));
            document.dispatchEvent(new Event('app-preload-ready'));
            if (typeof window.__FORCE_APP_START__ === 'function') {
                try { window.__FORCE_APP_START__(); } catch(e){ console.error(e); }
            }
        }, 120);

        setTimeout(()=>{
            if (!overlay || overlay.classList.contains('hidden')) return;
            log('Force hide fallback');
            reallyHideOverlay();
        }, FORCE_HIDE_AFTER_DONE_MS);
    }

    // 절대 시간 제한
    setTimeout(()=>{
        if (!finished){
            log('Timeout -> force finish');
            finish();
        }
    }, MAX_TOTAL_MS);

    (async function run(){
        if (!all.length){
            log('No images to preload.');
            finish();
            return;
        }
        if (titleEl) titleEl.textContent='이미지 로딩 중...';
        const totalPhases = phases.filter(p=>p.length).length || 1;
        let phaseIndex=0;
        for (const list of phases){
            if (!list.length){ phaseIndex++; continue; }
            const label = phaseIndex===0? '핵심 리소스' : '상세 일러스트';
            await loadBatch(list,(loaded,total)=>updateProgress(loaded,total,label,phaseIndex,totalPhases));
            phaseIndex++;
        }
        finish();
    })();

    // 디버그
    window.__PRELOAD_DEBUG__ = {
        list: all,
        finish
    };
})();