"use strict";

/* =========================================================
   0. 즉시실행 래퍼
========================================================= */
(function() {

/* =========================================================
   1. 키워드 하이라이트 (원본 유지)
========================================================= */
const KEYWORD_BULK_SPEC = `
"출혈", "침잠", "파열", "진동", "화상", "마비", "취약", "속박", "위력 감소", "공격 위력 감소",
"수비 위력 감소", "합 위력 감소", "더하기 코인 약화", "빼기 코인 약화", "피해량 감소",
"공격 레벨 감소", "방어 레벨 감소", "분노 피해량 감소", "색욕 피해량 감소",
"나태 피해량 감소", "탐식 피해량 감소", "우울 피해량 감소", "오만 피해량 감소",
"질투 피해량 감소", "참격 피해량 감소", "관통 피해량 감소", "타격 피해량 감소",
"분노 취약", "색욕 취약", "나태 취약", "탐식 취약", "우울 취약", "오만 취약",
"질투 취약", "참격 취약", "관통 취약", "타격 취약", "정신력 회복 효율 감소",
"정신력 감소 효율 증가", "체력 회복 감소", "행동 불가", "[피아식별불가]", "나비",
"구더기", "저주", "약점 분석", "못", "결투 선포 - 돈키호테", "결투 선포 - 싱클레어",
"결투 선포 - 오티스", "앙갚음 대상", "흑염", "저택의 메아리", "시간 유예",
"시선", "경멸", "시선의 경멸", "차원 균열", "올가미", "주살【신속】", "주살【독】", "주살【파】",
"히스테리", "역변-리버스드", "악당 표식", "분홍 리본", "주시", "방출 전류",
"침잠쇄도", "부적", "홍매화", "버.표", "[합 패배]", "다가오는 파탄",
"초청받지 않은 자", "집중 공격 - 뫼르소", "재봉 대상", "목마른 장미", "장미 쐐기",
"미끼 요정", "점혈 - 돈키호테", "복수 대상", "달궈진 새장", "얽혀버린 저주 부적", "지네 독",
"뇌진탕", "진동 - 붕괴", "진동 - 균열", "진동 - 반향", "진동 - 영속", "진동 - 사슬",
"진동 - 작열", "진동 - 과다출혈", "분노 위력 감소", "색욕 위력 감소",  "나태 위력 감소",
"탐식 위력 감소", "우울 위력 감소", "오만 위력 감소", "참격 위력 감소", "관통 위력 감소",
"타격 위력 감소", "붕괴 표식": "red",

"호흡", "충전", "보호", "신속", "위력 증가", "공격 위력 증가", "수비 위력 증가", "합 위력 증가",
"더하기 코인 강화", "빼기 코인 강화", "피해량 증가", "약점 공격 시 피해량 증가", "공격 레벨 증가",
"방어 레벨 증가", "분노 피해량 증가", "색욕 피해량 증가", "나태 피해량 증가",
"탐식 피해량 증가", "우울 피해량 증가", "오만 피해량 증가", "질투 피해량 증가",
"참격 피해량 증가", "관통 피해량 증가", "타격 피해량 증가", "분노 보호",
"색욕 보호", "나태 보호", "탐식 보호", "우울 보호", "오만 보호", "질투 보호",
"참격 보호", "관통 보호", "타격 보호", "정신력 회복 효율 증가", "정신력 감소 효율 감소",
"체력 회복 증가", "E.G.O 자원 획득량+", "광신", "파열 보호", "부하",
"충전 역장", "시간 대여", "경멸의 시선", "피어나는 가시", "구름 장벽", "흑운도",
"각력【묘】", "오혈", "사완", "마법소녀 등장!", "사랑/증오", "매지컬 아르카나",
"마법소녀의 영창", "지키는 검", "깊은 눈물", "눈물 벼리기", "꿰뚫는 검", "가호", "절망",
"갈증", "부당 수익", "과열된 가스 작살", "본국검 - 세법 전수", "본국검 - 자법 전수",
"본국검술", "왕의 앞으로", "묶인 왕의 앞으로", "지식 단련", "듀라한",
"와일드헌트", "적안", "참회", "방어 태세", "핏빛 가위날", "피어나는 가시",
"축제의 열기", "경혈", "일렁임【혈귀】", "집중【저격】", "첫번째 마탄",
"두번째 마탄", "세번째 마탄", "네번째 마탄", "다섯번째 마탄", "여섯번째 마탄",
"일곱번째 마탄", "깊은 들숨", "네뷸라이저 β", "네뷸라이저 α",
"앙갚음 장부 [싱클레어]", "매화침[埋花針]", "불허[不許]", "매화첨[埋花櫼]",
"원[援]", "작열 추진탄", "강기 [剛氣]", "강기 - 신 [剛氣-心]", "오버히트",
"흉탄", "강력 징수 집행", "축적된 과거", "사중구활[死中求活]", "모든 흑수의 주인",
"몰아침", "흑수환염[黑獸丸染]", "각력【오】", "적진 주파", "호령", "혈염[血炎]",
"진동 - 태엽감기", "진동 폭발", "관", "분노 위력 증가", "색욕 위력 증가",  "나태 위력 증가",
"탐식 위력 증가", "우울 위력 증가", "오만 위력 증가", "참격 위력 증가", "관통 위력 증가",
"타격 위력 증가": "yellow",

"파괴 불가 코인", "탄환", "도발치", "버림", "탐구한 지식", "마탄", "찢어진 추억",
"전략적 휴식 복지 모드", "딜리버리 캐리어 - 로쟈", "딜리버리 캐리어 - 싱클레어",
"혈찬", "누적 소모 혈찬", "공용 누적 소모 혈찬", "타겟 포착", "후방 지원 배치",
"재장전", "검은 구름", "천구성도", "원호 방어", "광역 난사", "전장 퇴각",
"뜻에 따라, 베겠습니다.", "합 가능 가드", "시술", "K사 앰플", "1대1 대결",
"원호 공격", "불안정한 격정", "울음 방울", "산나비·죽은나비", "피로 물든 손",
"닳아버린 마음", "책임감", "탄환 - 로직 아틀리에", "근접 지원", "12구산 연료",
"과열 연료", "시[始]", "대[待]", "호표탄", "맹호표탄", "호위", "존명",
"진폭 변환", "진폭 얽힘", "가쁜 날숨": "brown",

"[크리티컬 적중 시]", "[적중시]", "[사용전]", "[파괴되지 않고 적중시]", "[공격 종료시]",
"[전투 시작시]", "[공격 시작 전]", "[대상 처치 시]", "[합 승리 후 적중시]", "[턴 종료 시]",
"[적 처치 시]", "[적 처치 실패시]", "[아군 처치 시]", "[아군 처치 실패시]", "[뒷면 적중시]": "lightgreen",

"[사용시]": "skyblue",

"[합 가능 반격]": "#F1670E",

"[합 승리시]": "orange",

"[앞면 적중시]": "greenyellow",

"[앞면 공격 종료 시]": "pink",

"[뒷면 공격 종료 시]": "purple"
`;

const KEYWORD_HIGHLIGHT_EXTRA_MAP = {};
const HIGHLIGHT_EXCLUDE = [
  "소수점 버림", "보호막", "산나비를", "죽은나비를 부", "죽은나비를 얻음", "나비(", "관찰", "광신도"
];

function parseBulkSpec(spec) {
    const map = {};
    if (!spec) return map;
    const cleaned = spec.replace(/\/\/.*$/gm, "");
    const groupRegex = /((?:"[^"]+"\s*,\s*)*"[^"]+")\s*:\s*"([^"]+)"\s*,?/g;
    let m;
    while ((m = groupRegex.exec(cleaned)) !== null) {
        const wordsPart = m[1];
        const color = m[2].trim();
        wordsPart.split(/\s*,\s*/).forEach(w => {
            const word = w.replace(/^"|"$/g, '').trim();
            if (word) map[word] = color;
        });
    }
    return map;
}
let PARSED_BULK_MAP = {};
try { PARSED_BULK_MAP = parseBulkSpec(KEYWORD_BULK_SPEC); }
catch(e){ console.warn('[Highlight] Bulk spec parsing failed:', e); }

const KEYWORD_HIGHLIGHT_MAP = { ...PARSED_BULK_MAP, ...KEYWORD_HIGHLIGHT_EXTRA_MAP };

function slugKeyword(word) {
    return word.trim().toLowerCase()
        .replace(/[^a-z0-9가-힣]+/gi, '-')
        .replace(/^-+|-+$/g,'') || 'kw';
}
(function injectKeywordStyles() {
    const styleEl = document.createElement("style");
    const lines = [ ".kw{font-weight:700; text-shadow:0 0 2px rgba(0,0,0,.35);}" ];
    for (const [word,color] of Object.entries(KEYWORD_HIGHLIGHT_MAP)) {
        lines.push(`.kw.kw-${slugKeyword(word)}{color:${color} !important;}`);
    }
    styleEl.textContent = lines.join("\n");
    document.head.appendChild(styleEl);
})();

function escapeHtml(str="") {
    return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function highlightKeywords(rawText) {
    if (!rawText) return "";
    const excludes = HIGHLIGHT_EXCLUDE.filter(Boolean).sort((a,b)=>b.length-a.length);
    const tokens = [];
    let working = rawText;
    excludes.forEach((phrase, idx) => {
        const esc = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const token = `__EXC_${idx}_${Math.random().toString(36).slice(2)}__`;
        tokens.push({token, phrase});
        working = working.replace(new RegExp(esc,'g'), token);
    });
    let safe = working.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    safe = safe.replace(/\n/g,"<br>");
    const words = Object.keys(KEYWORD_HIGHLIGHT_MAP).filter(w=>w.trim()).sort((a,b)=>b.length-a.length);
    if (words.length) {
        const escaped = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));
        const pattern = new RegExp("(" + escaped.join("|") + ")", "g");
        safe = safe.replace(pattern, m => `<span class="kw kw-${slugKeyword(m)}">${m}</span>`);
    }
    tokens.forEach(({token,phrase})=>{
        const pEsc = escapeHtml(phrase).replace(/\n/g,"<br>");
        safe = safe.replace(new RegExp(token,'g'), pEsc);
    });
    return safe;
}

/* =========================================================
   2. 상태 / 전역 변수
========================================================= */
let decks = [];
let currentDeckId = null;
let detailAutoScrollState = { rafId:null, delayTimer:null, running:false };

/* =========================================================
   3. 헬퍼 함수 (데이터 관련)
========================================================= */
function toBase64Utf8(str){
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,(_,p1)=>String.fromCharCode(parseInt(p1,16))));
}
function fromBase64Utf8(b64){
    return decodeURIComponent(Array.prototype.map.call(atob(b64),c=>'%'+c.charCodeAt(0).toString(16).padStart(2,'0')).join(''));
}
const serializeDecks = obj => toBase64Utf8(JSON.stringify(obj));
const deserializeDecks = b64 => JSON.parse(fromBase64Utf8(b64));
const serializeSingleDeck = deckObj => toBase64Utf8(JSON.stringify(deckObj));
const deserializeSingleDeck = b64 => JSON.parse(fromBase64Utf8(b64));

function findItemById(id) {
    if (!id) return null;
    for (const slot of window.SLOT_CONFIG) {
        if (!slot) continue;
        const p = slot.personalities?.find(p => p.id === id);
        if (p) return p;
        if (Array.isArray(slot.egos)) {
            for (const egoPool of slot.egos) {
                if (!egoPool) continue;
                const e = egoPool.find(e => e.id === id);
                if (e) return e;
            }
        }
    }
    return null;
}

/* =========================================================
   4. UI / DOM 헬퍼
========================================================= */
function truncateTextToFit(el) {
    const original = el.getAttribute('data-full') || el.textContent;
    if (!el.getAttribute('data-full')) el.setAttribute('data-full', original);
    el.textContent = original;
    if (!el.clientWidth) return;
    if (el.scrollWidth <= el.clientWidth) return;
    let text = original;
    while (text.length > 0 && el.scrollWidth > el.clientWidth) {
        text = text.slice(0,-1);
        el.textContent = text + '…';
    }
    if (text.length === 0) el.textContent = '…';
}
function applyPersonalityNameTruncation() {
    document.querySelectorAll('.deck-grid .personality-name').forEach(el=>{
        const full = el.getAttribute('data-full');
        if (full) el.textContent = full;
    });
    document.querySelectorAll('.deck-grid .personality-name').forEach(truncateTextToFit);
}

function stopDetailAutoScroll() {
    if (detailAutoScrollState.rafId) cancelAnimationFrame(detailAutoScrollState.rafId);
    if (detailAutoScrollState.delayTimer) clearTimeout(detailAutoScrollState.delayTimer);
    detailAutoScrollState = { rafId:null, delayTimer:null, running:false };
}
function startDetailAutoScroll(wrapperEl, extraHeight) {
    const SPEED = 120; // px/s
    const duration = (extraHeight / SPEED) * 1000;
    const start = performance.now();
    detailAutoScrollState.running = true;
    function step(now) {
        const prog = Math.min((now - start)/duration, 1);
        wrapperEl.style.transform = `translateY(-${extraHeight * prog}px)`;
        if (prog < 1 && detailAutoScrollState.running) {
            detailAutoScrollState.rafId = requestAnimationFrame(step);
        } else {
            detailAutoScrollState.running = false;
            detailAutoScrollState.rafId = null;
        }
    }
    detailAutoScrollState.rafId = requestAnimationFrame(step);
}

/* =========================================================
   5. 다중 조건 지원 헬퍼
========================================================= */
/**
 * passive 객체에서 조건쌍 추출.
 * 지원:
 *  - conditionImage / condition
 *  - conditionImage2 / condition2 ... (번호 증가)
 *  - conditions: [{image:'', text:''}, ...]
 */
function extractConditionPairs(passive) {
    const pairs = [];
    if (passive.conditionImage || passive.condition) {
        pairs.push({ image: passive.conditionImage || '', text: passive.condition || ''});
    }
    let idx = 2;
    while (true) {
        const iKey = 'conditionImage' + idx;
        const tKey = 'condition' + idx;
        if (!(iKey in passive) && !(tKey in passive)) break;
        if (passive[iKey] || passive[tKey]) {
            pairs.push({ image: passive[iKey] || '', text: passive[tKey] || '' });
        }
        idx++;
    }
    if (Array.isArray(passive.conditions)) {
        passive.conditions.forEach(c=>{
            if (c && (c.image || c.text || c.condition)) {
                pairs.push({
                    image: c.image || '',
                    text: c.text != null ? c.text : (c.condition || '')
                });
            }
        });
    }
    return pairs;
}

/* =========================================================
   6. 필터 / 상태 체크
========================================================= */
function isFilterActive(key) {
    const btn = document.querySelector(`.ban-btn[data-filter="${key}"]`);
    return btn && btn.dataset.active === 'true';
}
function passesSeasonFilters(item) {
    const hideCollabo = isFilterActive('collabo');
    const hideWalpurgis = isFilterActive('walpurgis');
    const hidePrevSeason = isFilterActive('prevseason');
    const s = item?.season;
    if (hideCollabo && s === 'collabo') return false;
    if (hideWalpurgis && s === 'walpurgis') return false;
    if (hidePrevSeason && typeof s === 'number' && s === (CURRENT_SEASON - 1)) return false;
    return true;
}

/* =========================================================
   7. 상세 뷰 (패시브/에고 렌더)
========================================================= */
function showDetail(item, anchorEl) {
    const detailView = document.getElementById('detail-view');
    if (!detailView) return;

    function hasMeaningfulVersion(ver) {
        if (!ver) return false;
        if (Array.isArray(ver.coins) && ver.coins.length) return true;
        if (Array.isArray(ver.coinFaces) && ver.coinFaces.length) return true;
        if (ver.sanityCost != null) return true;
        if (ver.attackType) return true;
        if (ver.weight != null) return true;
        return false;
    }

    const personalityDetails = item.details;
    const egoDetails = item.egoDetails;
    let html = '';

    // 다중 조건용 렌더
    const renderGroupedPassives = (passives, title) => {
        if (!passives || !passives.length) return '';
        const groups = new Map();
        passives.forEach(p=>{
            const condPairs = extractConditionPairs(p);
            const key = condPairs.length
                ? condPairs.map(cp => (cp.image||'') + '|' + (cp.text||'')).join('__')
                : 'NO_COND';
            if (!groups.has(key)) groups.set(key,{ condPairs, items:[] });
            groups.get(key).items.push({ name:p.name||'N/A', effect:p.effect||'N/A' });
        });

        const groupHtml = [...groups.values()].map(g=>{
            const condHtml = g.condPairs.length
                ? g.condPairs.map(cp => {
                    const img = cp.image ? `<img src="${cp.image}" class="condition-icon">` : '';
                    return `<span class="cond-chip">${img}${escapeHtml(cp.text||'')}</span>`;
                }).join('')
                : `<span class="cond-chip">N/A</span>`;
            const itemsHtml = g.items.map(it=>{
                return `
                  <div class="passive-block compact">
                    <div class="passive-line"><strong>이름:</strong><span>${escapeHtml(it.name)}</span></div>
                    <div class="passive-line"><strong>효과:</strong><span class="effect">${highlightKeywords(it.effect)}</span></div>
                  </div>
                `;
            }).join('<hr style="border-color:#444; margin:8px 0;">');
            return `
              <div class="passive-group">
                <div class="passive-line multi-condition-line">
                  <strong>조건:</strong>
                  <span class="multi-conds">${condHtml}</span>
                </div>
                <div class="passive-items">${itemsHtml}</div>
              </div>
            `;
        }).join('<hr style="border-color:#555; margin:10px 0;">');

        return `<div class="detail-section"><h5>${title}</h5>${groupHtml}</div>`;
    };

    const buildCostHtml = (cost=[]) => {
        const counts = cost.reduce((m,s)=>{m[s]=(m[s]||0)+1;return m;}, {});
        return Object.entries(counts).map(([sin,c]) =>
            `<div class="ego-cost-item"><img src="${SIN_ATTRIBUTES[sin].icon}" alt="${sin}"><span>x${c}</span></div>`
        ).join('');
    };

    if (personalityDetails) {
        const skillBlocks = (personalityDetails.skillIcons||[]).map((icon,i)=>{
            const typeKey = personalityDetails.skillTypes?.[i];
            const typeIcon = typeKey ? SKILL_TYPE_ICONS[typeKey] : '';
            return `
              <div class="skill-with-type">
                 <img class="skill-icon" src="${icon}" alt="skill${i+1}">
                 ${typeIcon ? `<img class="skill-type-badge" src="${typeIcon}" alt="${typeKey}">` : ''}
              </div>`;
        }).join('');
        html = `
          <div class="detail-illustration-top" style="background-image:url('${personalityDetails.fullImage}')"></div>
          <div class="detail-info-bottom personality">
            <div class="detail-card-header"><h4>${escapeHtml(item.name)}</h4></div>
            <div class="detail-section">
              <h5>스킬</h5>
              <div class="detail-skills-grid">${skillBlocks}</div>
            </div>
            ${renderGroupedPassives(personalityDetails.passives,'패시브')}
            ${renderGroupedPassives(personalityDetails.supportPassives,'서포트 패시브')}
            <div class="detail-section">
              <h5>키워드</h5>
              <div class="detail-keywords-list">
                ${(personalityDetails.keywords||[]).map(k=>`<span>${escapeHtml(k)}</span>`).join('')}
              </div>
            </div>
          </div>`;
        detailView.classList.remove('ego-wide','one-version','two-version');
    } else if (egoDetails) {
        const hasAwakening = hasMeaningfulVersion(egoDetails.awakening);
        const hasCorrosion = hasMeaningfulVersion(egoDetails.corrosion);

        const passiveHtml = egoDetails.passive ? `
          <div class="ego-passive-box">
            <h5>패시브</h5>
            <div class="passive-line"><strong>이름:</strong><span>${escapeHtml(egoDetails.passive.name||'')}</span></div>
            <div class="passive-line"><strong>효과:</strong><span class="effect">${highlightKeywords(egoDetails.passive.effect||'')}</span></div>
          </div>` : '';

        const keywordsHtml = egoDetails.keywords?.length ? `
          <div class="ego-keywords-box">
            <h5>키워드</h5>
            <div class="ego-keywords-pills">
              ${egoDetails.keywords.map(k=>`<span>${escapeHtml(k)}</span>`).join('')}
            </div>
          </div>` : '';

        const renderCoinSequence = ver => {
            if (Array.isArray(ver?.coinFaces) && ver.coinFaces.length) {
                return ver.coinFaces.map(f=>{
                    const src = COIN_FACE_ICONS[f] || COIN_FACE_ICONS.head;
                    return `<img class="coin-face-icon" src="${src}" alt="${f}">`;
                }).join('');
            }
            if (ver && Array.isArray(ver.coins)) {
                return `<span style="font-weight:600;">${ver.coins.length} coin</span>`;
            }
            return '';
        };
        const renderCoinEffects = ver => {
            if (!ver?.coins) return '';
            return `
              <div class="ego-coin-effects">
                ${ver.coins.map((coin,i)=>{
                    const hideIndex = coin.noIndex === true || coin.index === null;
                    let idx = null;
                    if (!hideIndex) {
                        idx = (coin.index !== undefined && coin.index !== null) ? coin.index : (i+1);
                    }
                    const idxIcon = (!hideIndex)
                        ? (coin.indexIcon || COIN_INDEX_ICONS[idx] || '')
                        : '';
                    const raw = (coin.effectLines
                        ? coin.effectLines.join('\n')
                        : (coin.effect || ''));
                    const txt = highlightKeywords(raw);
                    const left = hideIndex ? '' : `
                       <div class="coin-effect-left">
                         ${idxIcon
                           ? `<img class="coin-index-icon" src="${idxIcon}" alt="코인${idx}">`
                           : `<div style="color:#ccc;font-size:0.75em">${idx}</div>`}
                       </div>`;
                    return `
                       <div class="coin-effect-card${hideIndex?' no-index':''}">
                         ${left}
                         <div class="coin-effect-text">${txt}</div>
                       </div>`;
                }).join('')}
              </div>`;
        };
        const renderVersionMeta = ver => {
            if (!hasMeaningfulVersion(ver)) return '';
            const sins = (Array.isArray(ver.sins)?ver.sins:[ver.sins]).filter(Boolean);
            const sinIcons = sins.map(s=> SIN_ATTRIBUTES[s]
                ? `<img src="${SIN_ATTRIBUTES[s].icon}" alt="${s}">` : '').join('');
            const atkIcon = ver.attackType && SKILL_TYPE_ICONS[ver.attackType]
                ? `<img src="${SKILL_TYPE_ICONS[ver.attackType]}" alt="${ver.attackType}">`
                : (ver.attackType || '');
            return `
              <div class="ego-version-meta">
                <div class="meta-item"><span class="label">정신 소모량</span><span class="value">${ver.sanityCost ?? ''}</span></div>
                <div class="meta-item"><span class="label">공격 유형</span><span class="value">${atkIcon}</span></div>
                <div class="meta-item"><span class="label">죄악 속성</span><span class="value sin-icons">${sinIcons}</span></div>
                <div class="meta-item"><span class="label">가중치</span><span class="value">${ver.weight ?? ''}</span></div>
                <div class="meta-item meta-item-coins">
                  <span class="label">코인</span>
                  <span class="value coin-seq">${renderCoinSequence(ver)}</span>
                </div>
              </div>`;
        };
        const renderVersionBlock = (title,key) => {
            const ver = egoDetails[key];
            if (!hasMeaningfulVersion(ver)) return '';
            return `
              <div class="ego-version-block">
                <h5>${title}</h5>
                ${renderVersionMeta(ver)}
                ${renderCoinEffects(ver)}
              </div>`;
        };

        const costHtml = buildCostHtml(egoDetails.cost || []);
        const awakeningBlock = hasAwakening ? renderVersionBlock('각성 스킬','awakening') : '';
        const corrosionBlock = hasCorrosion ? renderVersionBlock('침식 스킬','corrosion') : '';
        const versionsState = (hasAwakening && hasCorrosion) ? 'two-version' : 'one-version';
        const rightModeClass = (hasAwakening && hasCorrosion) ? 'two' : 'one';

        html = `
          <div class="detail-illustration-top ego-image square" style="background-image:url('${egoDetails.fullImage}')"></div>
          <div class="detail-info-bottom ego-wide-layout">
            <div class="ego-layout">
              <div class="ego-left">
                <div class="ego-name"><h4>${escapeHtml(item.name)}</h4></div>
                <div class="ego-cost-box">
                   <h5>사용 자원</h5>
                   <div class="ego-cost-list">${costHtml}</div>
                </div>
                ${passiveHtml}
                ${keywordsHtml}
              </div>
              <div class="ego-right ${rightModeClass}">
                ${awakeningBlock}
                ${corrosionBlock}
              </div>
            </div>
          </div>`;
        detailView.classList.add('ego-wide', versionsState);
    } else {
        html = `<div class="detail-info-bottom"><p>상세 정보가 없습니다.</p></div>`;
        detailView.classList.remove('ego-wide','one-version','two-version');
    }

    stopDetailAutoScroll();
    detailView.innerHTML = html;
    detailView.style.display = 'block';
    detailView.classList.remove('auto-scroll');
    detailView.style.overflow = '';

    // Auto-scroll wrapper
    const kids = Array.from(detailView.childNodes);
    const wrapper = document.createElement('div');
    wrapper.className = 'detail-scroll-wrapper';
    kids.forEach(k=>wrapper.appendChild(k));
    detailView.appendChild(wrapper);

    const margin = 10;
    const viewportH = window.innerHeight;
    const MAX_H = Math.max(120, viewportH - 2*margin);
    const contentH = wrapper.getBoundingClientRect().height;
    if (contentH > MAX_H) {
        detailView.classList.add('auto-scroll');
        detailView.style.height = MAX_H + 'px';
        detailAutoScrollState.delayTimer = setTimeout(()=>{
            startDetailAutoScroll(wrapper, contentH - MAX_H);
        }, 1500);
    } else {
        detailView.style.height = contentH + 'px';
    }

    // Position
    const rect = anchorEl.getBoundingClientRect();
    setTimeout(()=>{
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const sx = window.scrollX || document.documentElement.scrollLeft || 0;
        const sy = window.scrollY || document.documentElement.scrollTop || 0;
        let dRect = detailView.getBoundingClientRect();
        let left = sx + rect.right + margin;
        if (left + dRect.width > sx + vw - margin) {
            left = sx + rect.left - dRect.width - margin;
            if (left < sx + margin) left = sx + margin;
        }
        const anchorCenter = sy + rect.top + rect.height / 2;
        let top = Math.round(anchorCenter - dRect.height / 2);
        const minTop = sy + margin;
        const maxTop = sy + vh - margin - dRect.height;
        if (top < minTop) top = minTop;
        if (top > maxTop) top = maxTop;
        detailView.style.left = left + 'px';
        detailView.style.top  = top + 'px';
    },0);
}
function hideDetail() {
    stopDetailAutoScroll();
    const detailView = document.getElementById('detail-view');
    if (detailView) detailView.style.display = 'none';
}

/* =========================================================
   8. 요약 토글 (조건: 작은 화면 OR grid overflow OR 이미 접힘)
========================================================= */
let summaryWrapper, summaryToggle, deckGridEl;
function updateSummaryToggleVisibility() {
    if (!summaryWrapper || !summaryToggle || !deckGridEl) return;
    const smallScreen = (window.innerWidth <= 1250) || (window.innerHeight <= 820);
    const gridOverflow = deckGridEl.scrollHeight > deckGridEl.clientHeight + 2;
    const isCollapsed = summaryWrapper.classList.contains('collapsed');
    const shouldShow = smallScreen || gridOverflow || isCollapsed;

    if (shouldShow) {
        summaryToggle.classList.add('show');
    } else {
        summaryToggle.classList.remove('show');
        if (isCollapsed) { // 펼침 강제
            summaryWrapper.classList.remove('collapsed');
            summaryToggle.setAttribute('aria-expanded','true');
            summaryToggle.querySelector('.txt').textContent = '자원 요약 접기';
            const icon = summaryToggle.querySelector('i');
            if (icon) icon.className = 'fa-solid fa-chevron-up';
        }
    }
}

/* =========================================================
   9. 합쳐진 요약(자원 카운트 + 수비) 렌더
========================================================= */
function renderSummaries() {
    const skillSummaryEl = document.getElementById('skill-summary');
    const defenseSummaryEl = document.getElementById('defense-summary');
    if (!skillSummaryEl || !defenseSummaryEl) return;

    const deck = decks.find(d=>d.id===currentDeckId);
    const skillCounts = {};
    for (const key in SIN_ATTRIBUTES) skillCounts[key] = 0;
    const defenseSkills = [];

    if (deck && deck.order.length > 0) {
        deck.order.forEach(idx => {
            const p = findItemById(deck.characters[idx]);
            if (p && p.skills) {
                p.skills.forEach(attr => {
                    if (skillCounts.hasOwnProperty(attr)) skillCounts[attr]++;
                });
                if (p.defense) defenseSkills.push(p.defense);
            }
        });
    }
    skillSummaryEl.innerHTML = '';
    for (const key in SIN_ATTRIBUTES) {
        const attr = SIN_ATTRIBUTES[key];
        const el = document.createElement('div');
        el.className = 'skill-item';
        el.innerHTML = `<img src="${attr.icon}" alt="${attr.name}"><span>${skillCounts[key]}</span>`;
        skillSummaryEl.appendChild(el);
    }
    defenseSummaryEl.innerHTML = '';
    defenseSkills.forEach(def=>{
        const iconUrl = DEFENSE_ICONS[def.type]?.[def.sin];
        if (iconUrl) {
            const img = document.createElement('img');
            img.src = iconUrl;
            img.alt = `${SIN_ATTRIBUTES[def.sin].name} ${def.type}`;
            defenseSummaryEl.appendChild(img);
        }
    });
}

/* =========================================================
   10. 덱 렌더
========================================================= */
function renderCurrentDeck() {
    const deckNameInput = document.getElementById('deck-name-input');
    if (!deckGridEl || !deckNameInput) return;
    const deck = decks.find(d => d.id === currentDeckId);
    if (!deck) {
        deckNameInput.value = '';
        deckGridEl.innerHTML = '<p>덱을 선택하거나 새로 추가해주세요.</p>';
        deckNameInput.disabled = true;
        renderSummaries();
        updateSummaryToggleVisibility();
        return;
    }
    deckNameInput.disabled = false;
    deckNameInput.value = deck.name;
    deckGridEl.innerHTML = '';

    for (let i=0;i<12;i++) {
        const wrap = document.createElement('div');
        wrap.className = 'party-slot-wrapper';

        const numBtn = document.createElement('button');
        numBtn.className = 'numbering-btn';
        const orderIndex = deck.order.indexOf(i);
        if (orderIndex > -1) {
            numBtn.textContent = orderIndex + 1;
            numBtn.classList.add('numbered');
        }
        numBtn.addEventListener('click', ()=>toggleNumbering(i));

        const partySlot = document.createElement('div');
        partySlot.className = 'party-slot';

        const p = findItemById(deck.characters[i]);

        const nameSlot = document.createElement('div');
        nameSlot.className = 'personality-name';
        nameSlot.textContent = p ? p.name : '인격 선택';

        const charSlot = document.createElement('div');
        charSlot.className = 'character-slot';
        if (p) {
            charSlot.style.backgroundImage = `url(${p.image})`;
            const tierIconUrl = TIER_ICONS[p.tier];
            if (tierIconUrl) {
                const tierIcon = document.createElement('img');
                tierIcon.className = 'tier-icon';
                tierIcon.src = tierIconUrl;
                charSlot.appendChild(tierIcon);
            }
        } else {
            const slotConfig = window.SLOT_CONFIG[i];
            if (slotConfig?.defaultIcon) {
                charSlot.style.backgroundImage = `url(${slotConfig.defaultIcon})`;
                charSlot.style.backgroundSize = 'auto 60%';
                charSlot.style.backgroundRepeat = 'no-repeat';
                charSlot.style.backgroundPosition = 'center';
            } else {
                charSlot.textContent = '+';
            }
        }
        charSlot.addEventListener('click', ()=>openSelectionModal('character', i));

        const egoGrid = document.createElement('div');
        egoGrid.className = 'ego-grid';
        const egoTiers = ['ZAYIN','TETH','HE','WAW','ALEPH'];
        for (let j=0;j<5;j++) {
            const egoSlot = document.createElement('div');
            egoSlot.className = 'ego-slot';
            const e = findItemById(deck.egos[i]?.[j]);
            if (e) {
                const slotImg = e.slotImage || e.image;
                egoSlot.style.backgroundImage = `url(${slotImg})`;
                egoSlot.classList.add('has-ego');
                const nameOverlay = document.createElement('div');
                nameOverlay.className = 'ego-slot-name';
                nameOverlay.textContent = e.name;
                if (e.name.length > 8) nameOverlay.classList.add('twoline');
                egoSlot.appendChild(nameOverlay);
            } else {
                const tierLabelImage = EGO_TIER_LABELS[egoTiers[j]];
                if (tierLabelImage) {
                    egoSlot.style.backgroundImage = `url(${tierLabelImage})`;
                    egoSlot.style.backgroundSize = 'auto 70%';
                    egoSlot.style.backgroundRepeat = 'no-repeat';
                    egoSlot.style.backgroundPosition = 'center';
                    egoSlot.classList.remove('has-ego');
                } else {
                    egoSlot.textContent = egoTiers[j];
                }
            }
            egoSlot.addEventListener('click', ()=>openSelectionModal('ego', i, j));
            egoGrid.appendChild(egoSlot);
        }

        partySlot.appendChild(nameSlot);
        partySlot.appendChild(charSlot);
        partySlot.appendChild(egoGrid);
        wrap.appendChild(numBtn);
        wrap.appendChild(partySlot);
        deckGridEl.appendChild(wrap);
    }

    renderSummaries();
    applyPersonalityNameTruncation();
    updateSummaryToggleVisibility();
}

/* =========================================================
   11. 덱 조작
========================================================= */
function addDeck() {
    const newDeck = {
        id: Date.now() + Math.random(),
        name: `새로운 덱 ${decks.length + 1}`,
        characters: new Array(12).fill(null),
        egos: new Array(12).fill(null).map(()=>new Array(5).fill(null)),
        order: []
    };
    decks.push(newDeck);
    currentDeckId = newDeck.id;
    renderDeckList();
    renderCurrentDeck();
}
function deleteDeck(id) {
    decks = decks.filter(d=>d.id!==id);
    if (currentDeckId === id) {
        currentDeckId = decks.length ? decks[0].id : null;
    }
    renderDeckList();
    renderCurrentDeck();
}
function updateDeckName(newName) {
    const deck = decks.find(d=>d.id===currentDeckId);
    if (deck) { deck.name = newName; renderDeckList(); }
}
function toggleNumbering(partyIndex) {
    const deck = decks.find(d=>d.id===currentDeckId);
    if (!deck) return;
    const idx = deck.order.indexOf(partyIndex);
    if (idx > -1) deck.order.splice(idx,1);
    else deck.order.push(partyIndex);
    renderCurrentDeck();
}

/* =========================================================
   12. 덱 리스트 렌더 / 드래그
========================================================= */
function renderDeckList() {
    const deckListEl = document.getElementById('deck-list');
    if (!deckListEl) return;
    deckListEl.innerHTML = '';
    decks.forEach(deck=>{
        const item = document.createElement('div');
        item.className = 'deck-item';
        item.dataset.id = deck.id;
        item.draggable = true;
        if (deck.id === currentDeckId) item.classList.add('active');

        item.addEventListener('click', ()=> {
            currentDeckId = deck.id;
            renderDeckList();
            renderCurrentDeck();
        });
        item.addEventListener('dragstart', ()=>{
            item.classList.add('dragging');
            item.dataset.dragging = 'true';
        });
        item.addEventListener('dragover', e=>{
            e.preventDefault();
            item.classList.add('drag-over');
        });
        item.addEventListener('dragleave', ()=>item.classList.remove('drag-over'));
        item.addEventListener('drop', e=>{
            e.preventDefault();
            item.classList.remove('drag-over');
            document.querySelector('.deck-item.dragging')?.classList.remove('dragging');
            const draggedId = document.querySelector('.deck-item[dataset-dragging]');
            const draggedItemId = [...document.querySelectorAll('.deck-item')]
                .find(el=>el.classList.contains('dragging'))?.dataset.id;
            const fromIndex = decks.findIndex(d=>d.id==item.dataset.dragging);
            // fallback simpler:
            const movingId = [...document.querySelectorAll('.deck-item')]
              .find(el=>el.classList.contains('dragging'))?.dataset.id;
            if (!movingId) return;
            const from = decks.findIndex(d=>d.id==movingId);
            const to = decks.findIndex(d=>d.id==deck.id);
            const [mv] = decks.splice(from,1);
            decks.splice(to,0,mv);
            renderDeckList();
        });

        const nameSpan = document.createElement('span');
        nameSpan.className = 'deck-item-name';
        nameSpan.textContent = deck.name;

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-deck-btn';
        delBtn.innerHTML = '&times;';
        delBtn.addEventListener('click', e=>{
            e.stopPropagation();
            if (confirm(`'${deck.name}' 덱을 삭제하시겠습니까?`)) {
                deleteDeck(deck.id);
            }
        });

        item.appendChild(nameSpan);
        item.appendChild(delBtn);
        deckListEl.appendChild(item);
    });
}

/* =========================================================
   13. 선택 모달
========================================================= */
let lastSelectionContext = null;
function openSelectionModal(type, partyIndex, egoIndex=null) {
    const selectionModal = document.getElementById('selection-modal');
    const selectionGrid = document.getElementById('selection-grid');
    const modalTitle = document.getElementById('modal-title');
    if (!selectionModal || !selectionGrid || !modalTitle) return;

    selectionGrid.innerHTML = '';
    lastSelectionContext = { type, partyIndex, egoIndex };

    const deselectBtn = document.createElement('div');
    deselectBtn.className = 'deselect-button';
    deselectBtn.textContent = '선택 해제';
    deselectBtn.addEventListener('click', ()=>{
        const deck = decks.find(d=>d.id===currentDeckId);
        if (!deck) return;
        if (type==='character') deck.characters[partyIndex] = null;
        else deck.egos[partyIndex][egoIndex] = null;
        selectionModal.style.display = 'none';
        hideDetail();
        renderCurrentDeck();
    });
    selectionGrid.appendChild(deselectBtn);

    const slotConfig = window.SLOT_CONFIG[partyIndex];
    if (!slotConfig) {
        modalTitle.textContent = '데이터 없음';
        selectionModal.style.display = 'flex';
        return;
    }

    let itemsToShow = [];
    let onSelect = ()=>{};
    if (type==='character') {
        modalTitle.textContent = `${slotConfig.characterName} 인격 선택`;
        const used = new Set();
        if (isFilterActive('dup')) {
            decks.forEach(d=>{
                if (d.id !== currentDeckId) {
                    d.characters.forEach(pid => pid && used.add(pid));
                }
            });
        }
        itemsToShow = (slotConfig.personalities||[])
            .filter(p=>!used.has(p.id))
            .filter(p=>passesSeasonFilters(p));
        onSelect = id => {
            const deck = decks.find(d=>d.id===currentDeckId);
            if (!deck) return;
            deck.characters[partyIndex] = id;
        };
    } else {
        const egoTiers = ['ZAYIN','TETH','HE','WAW','ALEPH'];
        modalTitle.textContent = `${slotConfig.characterName} - ${egoTiers[egoIndex]} 등급 에고 선택`;
        const pool = slotConfig.egos[egoIndex] || [];
        itemsToShow = pool.filter(e=>passesSeasonFilters(e));
        onSelect = id => {
            const deck = decks.find(d=>d.id===currentDeckId);
            if (!deck) return;
            deck.egos[partyIndex][egoIndex] = id;
        };
    }

    itemsToShow.forEach(item=>{
        const wrap = document.createElement('div');
        wrap.className = 'item-wrapper';
        const img = document.createElement('img');
        img.className = 'personality-select-image';
        img.src = item.image;
        img.alt = item.name;
        img.addEventListener('click', ()=>{
            onSelect(item.id);
            selectionModal.style.display = 'none';
            hideDetail();
            renderCurrentDeck();
        });
        img.addEventListener('mouseenter', e=>showDetail(item,e.currentTarget));
        img.addEventListener('mouseleave', hideDetail);
        wrap.appendChild(img);

        if (type==='character' && item.tier) {
            const tierIconUrl = TIER_ICONS[item.tier];
            if (tierIconUrl) {
                const tierIcon = document.createElement('img');
                tierIcon.className = 'tier-icon-modal';
                tierIcon.src = tierIconUrl;
                wrap.appendChild(tierIcon);
            }
        }
        selectionGrid.appendChild(wrap);
    });

    selectionModal.style.display = 'flex';
}

/* =========================================================
   14. Export / Import / Capture
========================================================= */
function handleExport() {
    const dataStr = serializeDecks(decks);
    const ioModal = document.getElementById('io-modal');
    const ioContent = document.getElementById('io-modal-content');
    ioContent.innerHTML = `
      <h3>덱 목록 내보내기</h3>
      <p>아래 코드를 복사하세요.</p>
      <textarea readonly>${dataStr}</textarea>
      <div class="modal-actions">
        <button id="copy-btn">클립보드에 복사</button>
        <button class="secondary" id="close-io-btn">닫기</button>
      </div>`;
    ioModal.style.display = 'flex';

    document.getElementById('copy-btn').addEventListener('click', async (e)=>{
        const ta = ioContent.querySelector('textarea');
        const done = ()=>{ e.target.textContent='복사 완료!'; setTimeout(()=>e.target.textContent='클립보드에 복사',2000); };
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(ta.value);
                done();
            } else {
                ta.select(); document.execCommand('copy'); done();
            }
        } catch {
            ta.select();
            try { document.execCommand('copy'); done(); }
            catch { alert('복사 실패'); }
        } finally { ta.blur(); }
    });
    document.getElementById('close-io-btn').addEventListener('click',()=>ioModal.style.display='none');
}
function handleImport() {
    const ioModal = document.getElementById('io-modal');
    const ioContent = document.getElementById('io-modal-content');
    ioContent.innerHTML = `
      <h3>덱 목록 불러오기</h3>
      <p>저장된 코드를 붙여넣으세요.</p>
      <textarea placeholder="코드 붙여넣기"></textarea>
      <div class="modal-actions">
        <button id="import-confirm-btn">불러오기</button>
        <button class="secondary" id="close-io-btn">닫기</button>
      </div>`;
    ioModal.style.display = 'flex';
    document.getElementById('import-confirm-btn').addEventListener('click', ()=>{
        const ta = ioContent.querySelector('textarea');
        const dataStr = ta.value.trim();
        if (!dataStr) return alert('코드를 입력하세요.');
        try {
            const imported = deserializeDecks(dataStr);
            if (!Array.isArray(imported)) throw new Error();
            if (!confirm('현재 모든 덱을 덮어쓸까요?')) return;
            decks = imported;
            currentDeckId = decks.length ? decks[0].id : null;
            renderDeckList();
            renderCurrentDeck();
            ioModal.style.display='none';
        } catch {
            alert('유효하지 않은 코드입니다.');
        }
    });
    document.getElementById('close-io-btn').addEventListener('click',()=>ioModal.style.display='none');
}
function exportCurrentDeck() {
    const deck = decks.find(d=>d.id===currentDeckId);
    if (!deck) return alert('선택된 덱 없음');
    const dataStr = serializeSingleDeck(deck);
    const ioModal = document.getElementById('io-modal');
    const ioContent = document.getElementById('io-modal-content');
    ioContent.innerHTML = `
      <h3>현재 덱 내보내기</h3>
      <p>이 코드는 현재 덱 하나만 포함합니다.</p>
      <textarea readonly>${dataStr}</textarea>
      <div class="modal-actions">
        <button id="copy-current-btn">복사</button>
        <button class="secondary" id="close-io-btn">닫기</button>
      </div>`;
    ioModal.style.display='flex';
    document.getElementById('copy-current-btn').addEventListener('click', async (e)=>{
        const ta = ioContent.querySelector('textarea');
        const done = ()=>{ e.target.textContent='복사 완료!'; setTimeout(()=>e.target.textContent='복사',2000); };
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(ta.value); done();
            } else { ta.select(); document.execCommand('copy'); done(); }
        } catch {
            ta.select();
            try { document.execCommand('copy'); done(); }
            catch { alert('복사 실패'); }
        } finally { ta.blur(); }
    });
    document.getElementById('close-io-btn').addEventListener('click',()=>ioModal.style.display='none');
}
function importCurrentDeck() {
    const deck = decks.find(d=>d.id===currentDeckId);
    if (!deck) return alert('선택된 덱 없음');
    const ioModal = document.getElementById('io-modal');
    const ioContent = document.getElementById('io-modal-content');
    ioContent.innerHTML = `
      <h3>현재 덱 불러오기</h3>
      <p>단일 덱 코드를 붙여넣으면 현재 덱을 덮어씁니다.</p>
      <textarea placeholder="단일 덱 코드"></textarea>
      <div class="modal-actions">
        <button id="import-one-confirm-btn">덮어쓰기</button>
        <button class="secondary" id="close-io-btn">취소</button>
      </div>`;
    ioModal.style.display='flex';
    document.getElementById('import-one-confirm-btn').addEventListener('click', ()=>{
        const ta = ioContent.querySelector('textarea');
        const code = ta.value.trim();
        if (!code) return alert('코드를 입력하세요.');
        try {
            const imported = deserializeSingleDeck(code);
            if (typeof imported!=='object' || !imported) throw new Error();
            if (!Array.isArray(imported.characters) || !Array.isArray(imported.egos)) throw new Error();
            if (!confirm('현재 덱을 덮어쓸까요?')) return;
            imported.id = deck.id;
            imported.name = imported.name || deck.name;
            imported.order = Array.isArray(imported.order)? imported.order : [];
            decks[decks.findIndex(d=>d.id===deck.id)] = imported;
            renderDeckList();
            renderCurrentDeck();
            ioModal.style.display='none';
        } catch {
            alert('유효하지 않은 단일 덱 코드입니다.');
        }
    });
    document.getElementById('close-io-btn').addEventListener('click',()=>ioModal.style.display='none');
}
async function captureDeckImage() {
    const deck = decks.find(d=>d.id===currentDeckId);
    if (!deck) return alert('선택된 덱 없음');
    if (typeof html2canvas==='undefined') return alert('캡쳐 라이브러리를 불러올 수 없습니다.');

    renderCurrentDeck();
    applyPersonalityNameTruncation();

    const CAPTURE_WIDTH = 1600;
    const temp = document.createElement('div');
    temp.id='deck-capture-wrapper';
    temp.style.cssText = `position:fixed; left:-99999px; top:0; width:${CAPTURE_WIDTH}px; background:#fff; padding:30px;`;
    const title = document.createElement('h1');
    title.className='capture-title';
    title.textContent = deck.name;
    temp.appendChild(title);
    const gridClone = deckGridEl.cloneNode(true);
    gridClone.id='deck-grid-capture';
    gridClone.style.overflow='visible';
    gridClone.style.height='auto';
    temp.appendChild(gridClone);
    document.body.appendChild(temp);
    try {
        const canvas = await html2canvas(temp,{
            backgroundColor:'#ffffff',
            width:CAPTURE_WIDTH,
            scrollX:0,
            scrollY:0,
            scale:1,
            useCORS:true,
            allowTaint:true
        });
        const link = document.createElement('a');
        const safeName = (deck.name || 'deck').replace(/[\\/:*?"<>|]/g,'_');
        link.download = `${safeName}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (e) {
        console.error(e);
        alert('캡쳐 중 오류');
    } finally {
        temp.remove();
    }
}

/* =========================================================
   15. 초기화 (DOMContentLoaded)
========================================================= */
document.addEventListener('DOMContentLoaded', () => {

    const ov = document.getElementById('preload-overlay');
    if (ov && ov.parentElement !== document.body) {
        document.body.appendChild(ov); // body 직계로 이동
    }
      

    function startApp() {
        // 기존 초기화 코드 (필터 버튼 바인딩, addDeck(), updateSummaryToggleVisibility() 등)
        // ...
        addDeck();
        updateSummaryToggleVisibility?.();
    }


    if (window.APP_PRELOAD_DONE) {
        startApp();
    } else {
        // preload.js 완료 이벤트 대기
        document.addEventListener('app-preload-finished', startApp, { once:true });
    }
    // 주요 DOM
    deckGridEl = document.getElementById('deck-grid');
    summaryWrapper = document.getElementById('summary-wrapper');
    summaryToggle  = document.getElementById('summary-toggle');

    const deckNameInput = document.getElementById('deck-name-input');
    const selectionModal = document.getElementById('selection-modal');
    const ioModal = document.getElementById('io-modal');
    const exportBtn = document.getElementById('export-decks-btn');
    const importBtn = document.getElementById('import-decks-btn');
    const exportCurrentBtn = document.getElementById('export-current-btn');
    const importCurrentBtn = document.getElementById('import-current-btn');
    const captureDeckBtn  = document.getElementById('capture-deck-btn');
    const addDeckBtn = document.getElementById('add-deck-btn');

    // 필터 버튼 셋업
    document.querySelectorAll('.ban-btn').forEach(btn=>{
        if (!btn.querySelector('.square')) {
            const sq = document.createElement('span');
            sq.className='square';
            sq.textContent='□';
            btn.prepend(sq);
        }
        btn.addEventListener('click', ()=>{
            const active = btn.dataset.active==='true';
            btn.dataset.active = active ? 'false':'true';
            const sq = btn.querySelector('.square');
            if (sq) sq.textContent = active ? '□':'■';
            // 선택 모달 열려있으면 갱신
            if (selectionModal.style.display==='flex' && lastSelectionContext) {
                openSelectionModal(lastSelectionContext.type,
                                   lastSelectionContext.partyIndex,
                                   lastSelectionContext.egoIndex);
            }
            renderCurrentDeck(); // 필터가 목록/덱 표시와 연관 있을 경우
        });
    });

    // 요약 토글 버튼
    if (summaryToggle && summaryWrapper) {
        summaryToggle.addEventListener('click', ()=>{
            const isCollapsed = summaryWrapper.classList.toggle('collapsed');
            if (isCollapsed) {
                summaryToggle.setAttribute('aria-expanded','false');
                summaryToggle.querySelector('.txt').textContent = '자원 요약 펼치기';
                const icon = summaryToggle.querySelector('i');
                if (icon) icon.className='fa-solid fa-chevron-down';
            } else {
                summaryToggle.setAttribute('aria-expanded','true');
                summaryToggle.querySelector('.txt').textContent = '자원 요약 접기';
                const icon = summaryToggle.querySelector('i');
                if (icon) icon.className='fa-solid fa-chevron-up';
            }
            updateSummaryToggleVisibility();
        });
    }

    window.addEventListener('resize', updateSummaryToggleVisibility);

    // ResizeObserver로 grid 변화 감시
    if (window.ResizeObserver && deckGridEl) {
        const ro = new ResizeObserver(()=>updateSummaryToggleVisibility());
        ro.observe(deckGridEl);
    }

    // 이름 입력
    deckNameInput?.addEventListener('input', e=>updateDeckName(e.target.value));

    // 모달 외부 클릭 닫기
    selectionModal?.addEventListener('click', e=>{
        if (e.target === selectionModal) {
            selectionModal.style.display='none';
            hideDetail();
        }
    });
    ioModal?.addEventListener('click', e=>{
        if (e.target === ioModal) ioModal.style.display='none';
    });

    // 버튼들
    addDeckBtn?.addEventListener('click', addDeck);
    exportBtn?.addEventListener('click', handleExport);
    importBtn?.addEventListener('click', handleImport);
    exportCurrentBtn?.addEventListener('click', exportCurrentDeck);
    importCurrentBtn?.addEventListener('click', importCurrentDeck);
    captureDeckBtn?.addEventListener('click', captureDeckImage);
});

})(); // IIFE 끝