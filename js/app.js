"use strict";

(function() {

let decks = [];
let currentDeckId = null;

/* ========= 인격 이름 실제 문자열 자르기 유틸 =========
   - 각 .personality-name 요소에 data-full 로 원문 저장
   - 요소 폭에 맞춰 한 글자씩 줄여 ‘…’ 붙임
   - (12칸 정도라 성능 영향 미미)
===================================================== */
function truncateTextToFit(el) {
    const original = el.getAttribute('data-full') || el.textContent;
    if (!el.getAttribute('data-full')) el.setAttribute('data-full', original);

    // 전체로 복구 후 시작
    el.textContent = original;

    // 레이아웃이 아직 없다면 패스
    if (!el.clientWidth) return;

    // 넘치지 않으면 그대로
    if (el.scrollWidth <= el.clientWidth) return;

    let text = original;
    while (text.length > 0 && el.scrollWidth > el.clientWidth) {
        text = text.slice(0, -1);
        el.textContent = text + '…';
    }
    if (text.length === 0) el.textContent = '…';
}

function applyPersonalityNameTruncation() {
    const nodes = document.querySelectorAll('.deck-grid .personality-name');
    // 우선 원문 복구
    nodes.forEach(el => {
        const full = el.getAttribute('data-full');
        if (full) el.textContent = full;
    });
    // 다시 자르기
    nodes.forEach(truncateTextToFit);
}

document.addEventListener('DOMContentLoaded', () => {
    const deckListEl = document.getElementById('deck-list');
    const addDeckBtn = document.getElementById('add-deck-btn');
    const deckNameInput = document.getElementById('deck-name-input');
    const deckGridEl = document.getElementById('deck-grid');
    const selectionModal = document.getElementById('selection-modal');
    const modalTitle = document.getElementById('modal-title');
    const selectionGrid = document.getElementById('selection-grid');
    const detailView = document.getElementById('detail-view');
    const skillSummaryEl = document.getElementById('skill-summary');
    const defenseSummaryEl = document.getElementById('defense-summary');
    const exportBtn = document.getElementById('export-decks-btn');
    const importBtn = document.getElementById('import-decks-btn');
    const ioModal = document.getElementById('io-modal');
    const ioModalContent = document.getElementById('io-modal-content');

    const exportCurrentBtn = document.getElementById('export-current-btn');
    const importCurrentBtn = document.getElementById('import-current-btn');
    const captureDeckBtn  = document.getElementById('capture-deck-btn');

    const filterButtons = document.querySelectorAll('.ban-btn');

    let detailAutoScrollState = { rafId:null, delayTimer:null, running:false };
    let draggedItemId = null;
    let lastSelectionContext = null;

    /* Base64 UTF-8 helpers */
    const toBase64Utf8 = (str) =>
        btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16))));
    const fromBase64Utf8 = (b64) =>
        decodeURIComponent(Array.prototype.map.call(atob(b64), c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0')).join(''));
    const serializeDecks = (obj) => toBase64Utf8(JSON.stringify(obj));
    const deserializeDecks = (b64) => JSON.parse(fromBase64Utf8(b64));

    const serializeSingleDeck = (deckObj) => toBase64Utf8(JSON.stringify(deckObj));
    const deserializeSingleDeck = (b64) => JSON.parse(fromBase64Utf8(b64));

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

    function stopDetailAutoScroll() {
        if (detailAutoScrollState.rafId) cancelAnimationFrame(detailAutoScrollState.rafId);
        if (detailAutoScrollState.delayTimer) clearTimeout(detailAutoScrollState.delayTimer);
        detailAutoScrollState = { rafId:null, delayTimer:null, running:false };
    }
    function startDetailAutoScroll(wrapperEl, extraHeight) {
        const SPEED_PX_PER_SEC = 120;
        const duration = (extraHeight / SPEED_PX_PER_SEC) * 1000;
        const startTime = performance.now();
        detailAutoScrollState.running = true;
        function step(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const offset = extraHeight * progress;
            wrapperEl.style.transform = `translateY(-${offset}px)`;
            if (progress < 1 && detailAutoScrollState.running) {
                detailAutoScrollState.rafId = requestAnimationFrame(step);
            } else {
                detailAutoScrollState.running = false;
                detailAutoScrollState.rafId = null;
            }
        }
        detailAutoScrollState.rafId = requestAnimationFrame(step);
    }

    const closeModal = (modalElement) => {
        modalElement.style.display = 'none';
        hideDetail();
    };
    const hideDetail = () => {
        stopDetailAutoScroll();
        detailView.style.display = 'none';
    };

    const renderAll = () => { renderDeckList(); renderCurrentDeck(); };
    const switchDeck = (deckId) => { currentDeckId = deckId; renderAll(); };

    function renderDeckList() {
        deckListEl.innerHTML = '';
        decks.forEach(deck => {
            const item = document.createElement('div');
            item.className = 'deck-item';
            item.dataset.id = deck.id;
            item.draggable = true;
            if (deck.id === currentDeckId) item.classList.add('active');

            item.addEventListener('click', () => switchDeck(deck.id));
            item.addEventListener('dragstart', () => {
                draggedItemId = item.dataset.id;
                item.classList.add('dragging');
            });
            item.addEventListener('dragover', (e) => {
                e.preventDefault();
                item.classList.add('drag-over');
            });
            item.addEventListener('dragleave', () => item.classList.remove('drag-over'));
            item.addEventListener('drop', (e) => {
                e.preventDefault();
                item.classList.remove('drag-over');
                document.querySelector('.dragging')?.classList.remove('dragging');
                const droppedOnItemId = item.dataset.id;
                if (draggedItemId === droppedOnItemId) return;
                const fromIndex = decks.findIndex(d => d.id == draggedItemId);
                const toIndex = decks.findIndex(d => d.id == droppedOnItemId);
                const [movedItem] = decks.splice(fromIndex,1);
                decks.splice(toIndex,0,movedItem);
                renderDeckList();
            });

            const nameSpan = document.createElement('span');
            nameSpan.className = 'deck-item-name';
            nameSpan.textContent = deck.name;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-deck-btn';
            deleteBtn.innerHTML = '&times;';
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm(`'${deck.name}' 덱을 정말 삭제하시겠습니까?`)) {
                    deleteDeck(deck.id);
                }
            });

            item.appendChild(nameSpan);
            item.appendChild(deleteBtn);
            deckListEl.appendChild(item);
        });
    }

    /* 필터 상태 */
    const isFilterActive = (key) => {
        const btn = document.querySelector(`.ban-btn[data-filter="${key}"]`);
        return btn && btn.dataset.active === 'true';
    };
    const passesSeasonFilters = (item) => {
        const hideCollabo = isFilterActive('collabo');
        const hideWalpurgis = isFilterActive('walpurgis');
        const hidePrevSeason = isFilterActive('prevseason');
        const s = item?.season;
               if (hideCollabo && s === 'collabo') return false;
        if (hideWalpurgis && s === 'walpurgis') return false;
        if (hidePrevSeason && typeof s === 'number' && s === (CURRENT_SEASON - 1)) return false;
        return true;
    };

    function showDetail(item, element) {
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
        let cardHtml = '';

        const renderGroupedPassives = (passives, title) => {
            if (!passives || !passives.length) return '';
            const groups = new Map();
            passives.forEach(p => {
                const cond = p.condition || 'N/A';
                const img  = p.conditionImage || '';
                const key  = img + '__' + cond;
                if (!groups.has(key)) groups.set(key, { cond, img, items: [] });
                groups.get(key).items.push({
                    name: p.name || 'N/A',
                    effect: p.effect || 'N/A'
                });
            });
            const groupsHtml = [...groups.values()].map(g => {
                const itemsHtml = g.items.map(it => `
                    <div class="passive-block compact">
                        <div class="passive-line"><strong>이름:</strong><span>${it.name}</span></div>
                        <div class="passive-line"><strong>효과:</strong><span class="effect" style="white-space:pre-line;">${it.effect}</span></div>
                    </div>
                `).join('<hr style="border-color:#444; margin:8px 0;">');
                return `
                    <div class="passive-group">
                        <div class="passive-line">
                            <strong>조건:</strong>
                            <span>${g.img ? `<img src="${g.img}" class="condition-icon">` : ''}${g.cond}</span>
                        </div>
                        <div class="passive-items">${itemsHtml}</div>
                    </div>
                `;
            }).join('<hr style="border-color:#555; margin:10px 0;">');
            return `<div class="detail-section"><h5>${title}</h5>${groupsHtml}</div>`;
        };

        const buildCostHtml = (costArr=[]) => {
            const counts = costArr.reduce((m,s)=>{m[s]=(m[s]||0)+1;return m;}, {});
            return Object.entries(counts).map(([sin,c]) =>
                `<div class="ego-cost-item"><img src="${SIN_ATTRIBUTES[sin].icon}" alt="${sin}"><span>x${c}</span></div>`
            ).join('');
        };

        if (personalityDetails) {
            const skillBlocks = (personalityDetails.skillIcons || []).map((icon, idx) => {
                const typeKey  = personalityDetails.skillTypes?.[idx];
                const typeIcon = typeKey ? SKILL_TYPE_ICONS[typeKey] : '';
                return `
                    <div class="skill-with-type">
                        <img class="skill-icon" src="${icon}" alt="skill${idx+1}">
                        ${typeIcon ? `<img class="skill-type-badge" src="${typeIcon}" alt="${typeKey}">` : ''}
                    </div>
                `;
            }).join('');
            cardHtml = `
                <div class="detail-illustration-top" style="background-image:url('${personalityDetails.fullImage}')"></div>
                <div class="detail-info-bottom personality">
                    <div class="detail-card-header"><h4>${item.name}</h4></div>
                    <div class="detail-section">
                        <h5>스킬</h5>
                        <div class="detail-skills-grid">${skillBlocks}</div>
                    </div>
                    ${renderGroupedPassives(personalityDetails.passives, '패시브')}
                    ${renderGroupedPassives(personalityDetails.supportPassives, '서포트 패시브')}
                    <div class="detail-section">
                        <h5>키워드</h5>
                        <div class="detail-keywords-list">
                            ${(personalityDetails.keywords || []).map(k=>`<span>${k}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
            detailView.classList.remove('ego-wide','one-version','two-version');
        } else if (egoDetails) {
            const hasAwakening = hasMeaningfulVersion(egoDetails.awakening);
            const hasCorrosion = hasMeaningfulVersion(egoDetails.corrosion);
            const passiveHtml = egoDetails.passive ? `
                <div class="ego-passive-box">
                    <h5>패시브</h5>
                    <div class="passive-line"><strong>이름:</strong><span>${egoDetails.passive.name||''}</span></div>
                    <div class="passive-line"><strong>효과:</strong><span class="effect" style="white-space:pre-line;">${egoDetails.passive.effect||''}</span></div>
                </div>
            ` : '';
            const keywordsHtml = egoDetails.keywords?.length ? `
                <div class="ego-keywords-box">
                    <h5>키워드</h5>
                    <div class="ego-keywords-pills">
                        ${egoDetails.keywords.map(k=>`<span>${k}</span>`).join('')}
                    </div>
                </div>
            ` : '';

            const renderCoinSequence = (ver) => {
                if (Array.isArray(ver?.coinFaces) && ver.coinFaces.length) {
                    return ver.coinFaces.map(f => {
                        const src = COIN_FACE_ICONS[f] || COIN_FACE_ICONS.head;
                        return `<img class="coin-face-icon" src="${src}" alt="${f}">`;
                    }).join('');
                }
                if (ver && Array.isArray(ver.coins)) {
                    return `<span style="font-weight:600;">${ver.coins.length} coin</span>`;
                }
                return '';
            };

            const renderCoinEffects = (ver) => {
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
                            const txt = (coin.effectLines
                                    ? coin.effectLines.join('\\n')
                                    : (coin.effect || '')
                                ).replace(/&/g,'&amp;')
                                 .replace(/</g,'&lt;')
                                 .replace(/>/g,'&gt;')
                                 .replace(/\\n/g,'<br>');
                            const leftPart = hideIndex ? '' : `
                                <div class="coin-effect-left">
                                    ${idxIcon
                                        ? `<img class="coin-index-icon" src="${idxIcon}" alt="코인${idx}">`
                                        : `<div style="color:#ccc;font-size:0.75em">${idx}</div>`}
                                </div>`;
                            return `
                                <div class="coin-effect-card${hideIndex ? ' no-index' : ''}">
                                    ${leftPart}
                                    <div class="coin-effect-text">${txt}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `;
            };

            const renderVersionMeta = (ver) => {
                if (!hasMeaningfulVersion(ver)) return '';
                const sins = (Array.isArray(ver.sins)?ver.sins:[ver.sins]).filter(Boolean);
                const sinIcons = sins.map(s => SIN_ATTRIBUTES[s] ? `<img src="${SIN_ATTRIBUTES[s].icon}" alt="${s}">` : '').join('');
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
                    </div>
                `;
            };
            const renderVersionBlock = (title, key) => {
                const ver = egoDetails[key];
                if (!hasMeaningfulVersion(ver)) return '';
                return `
                    <div class="ego-version-block">
                        <h5>${title}</h5>
                        ${renderVersionMeta(ver)}
                        ${renderCoinEffects(ver)}
                    </div>
                `;
            };

            const costHtml = buildCostHtml(egoDetails.cost || []);
            const awakeningBlock = hasAwakening ? renderVersionBlock('각성 스킬','awakening') : '';
            const corrosionBlock = hasCorrosion ? renderVersionBlock('침식 스킬','corrosion') : '';
            const versionsStateClass = (hasAwakening && hasCorrosion) ? 'two' : 'one';

            cardHtml = `
                <div class="detail-illustration-top ego-image square" style="background-image:url('${egoDetails.fullImage}')"></div>
                <div class="detail-info-bottom ego-wide-layout">
                    <div class="ego-layout">
                        <div class="ego-left">
                            <div class="ego-name"><h4>${item.name}</h4></div>
                            <div class="ego-cost-box">
                                <h5>사용 자원</h5>
                                <div class="ego-cost-list">${costHtml}</div>
                            </div>
                            ${passiveHtml}
                            ${keywordsHtml}
                        </div>
                        <div class="ego-right ${versionsStateClass}">
                            ${awakeningBlock}
                            ${corrosionBlock}
                        </div>
                    </div>
                </div>
            `;
            detailView.classList.add('ego-wide');
            detailView.classList.remove('one-version','two-version');
            detailView.classList.add(hasAwakening && hasCorrosion ? 'two-version' : 'one-version');
        } else {
            cardHtml = `<div class="detail-info-bottom"><p>상세 정보가 없습니다.</p></div>`;
            detailView.classList.remove('ego-wide','one-version','two-version');
        }

        stopDetailAutoScroll();
        detailView.innerHTML = cardHtml;
        detailView.style.display = 'block';
        detailView.classList.remove('auto-scroll');
        detailView.style.overflow = '';
        detailView.style.maxHeight = '';
        detailView.style.height = '';

        const kids = Array.from(detailView.childNodes);
        const wrapper = document.createElement('div');
        wrapper.className = 'detail-scroll-wrapper';
        kids.forEach(k => wrapper.appendChild(k));
        detailView.appendChild(wrapper);

        const margin = 10;
        const viewportH = window.innerHeight;
        const MAX_AVAILABLE = Math.max(120, viewportH - 2*margin);
        const contentHeight = wrapper.getBoundingClientRect().height;

        if (contentHeight > MAX_AVAILABLE) {
            detailView.classList.add('auto-scroll');
            detailView.style.height = MAX_AVAILABLE + 'px';
            detailView.style.maxHeight = MAX_AVAILABLE + 'px';
            detailView.style.overflow = 'hidden';
            const extra = contentHeight - MAX_AVAILABLE;
            detailAutoScrollState.delayTimer = setTimeout(() => {
                startDetailAutoScroll(wrapper, extra);
            }, 1500);
        } else {
            detailView.style.height = contentHeight + 'px';
        }

        const rect = element.getBoundingClientRect();
        setTimeout(() => {
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

            detailView.style.left = `${left}px`;
            detailView.style.top  = `${top}px`;
        }, 0);
    }

    function openSelectionModal(type, partyIndex, egoIndex = null) {
        selectionGrid.innerHTML = '';
        lastSelectionContext = { type, partyIndex, egoIndex };
        let onSelect, itemsToShow = [];

        const deselectButton = document.createElement('div');
        deselectButton.className = 'deselect-button';
        deselectButton.textContent = '선택 해제';
        deselectButton.addEventListener('click', () => {
            const deck = decks.find(d => d.id === currentDeckId);
            if (!deck) return;
            if (type === 'character') {
                deck.characters[partyIndex] = null;
            } else {
                deck.egos[partyIndex][egoIndex] = null;
            }
            closeModal(selectionModal);
            renderCurrentDeck();
        });
        selectionGrid.appendChild(deselectButton);

        const slotConfig = window.SLOT_CONFIG[partyIndex];
        if (!slotConfig) {
            modalTitle.textContent = '데이터 없음';
            selectionModal.style.display = 'flex';
            return;
        }

        if (type === 'character') {
            modalTitle.textContent = `${slotConfig.characterName} 인격 선택`;

            const usedPersonalityIds = new Set();
            if (isFilterActive('dup')) {
                decks.forEach(deck => {
                    if (deck.id !== currentDeckId) {
                        deck.characters.forEach(id => { if (id) usedPersonalityIds.add(id); });
                    }
                });
            }
            itemsToShow = (slotConfig.personalities || [])
                .filter(p => !usedPersonalityIds.has(p.id))
                .filter(p => passesSeasonFilters(p));

            onSelect = (id) => {
                const deck = decks.find(d => d.id === currentDeckId);
                if (!deck) return;
                deck.characters[partyIndex] = id;
            };
        } else {
            const egoTiers = ['ZAYIN', 'TETH', 'HE', 'WAW', 'ALEPH'];
            modalTitle.textContent = `${slotConfig.characterName} - ${egoTiers[egoIndex]} 등급 에고 선택`;
            const egoPool = slotConfig.egos[egoIndex] || [];
            itemsToShow = egoPool.filter(e => passesSeasonFilters(e));
            onSelect = (id) => {
                const deck = decks.find(d => d.id === currentDeckId);
                if (!deck) return;
                deck.egos[partyIndex][egoIndex] = id;
            };
        }

        itemsToShow.forEach(item => {
            const wrapper = document.createElement('div');
            wrapper.className = 'item-wrapper';

            const img = document.createElement('img');
            img.className = 'personality-select-image';
            img.src = item.image;
            img.alt = item.name;
            img.addEventListener('click', () => {
                onSelect(item.id);
                closeModal(selectionModal);
                renderCurrentDeck();
            });
            img.addEventListener('mouseenter', (e) => showDetail(item, e.currentTarget));
            img.addEventListener('mouseleave', hideDetail);

            wrapper.appendChild(img);

            if (type === 'character' && item.tier) {
                const tierIconUrl = TIER_ICONS[item.tier];
                if (tierIconUrl) {
                    const tierIcon = document.createElement('img');
                    tierIcon.className = 'tier-icon-modal';
                    tierIcon.src = tierIconUrl;
                    wrapper.appendChild(tierIcon);
                }
            }
            selectionGrid.appendChild(wrapper);
        });

        selectionModal.style.display = 'flex';
    }

    function renderSummaries() {
        const deck = decks.find(d => d.id === currentDeckId);
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
            const itemEl = document.createElement('div');
            itemEl.className = 'skill-item';
            itemEl.innerHTML = `<img src="${attr.icon}" alt="${attr.name}"><span>${skillCounts[key]}</span>`;
            skillSummaryEl.appendChild(itemEl);
        }

        defenseSummaryEl.innerHTML = '';
        defenseSkills.forEach(def => {
            const iconUrl = DEFENSE_ICONS[def.type]?.[def.sin];
            if (iconUrl) {
                const imgEl = document.createElement('img');
                imgEl.src = iconUrl;
                imgEl.alt = `${SIN_ATTRIBUTES[def.sin].name} ${def.type}`;
                defenseSummaryEl.appendChild(imgEl);
            }
        });
    }

    function renderCurrentDeck() {
        const deck = decks.find(d => d.id === currentDeckId);
        if (!deck) {
            deckNameInput.value = '';
            deckGridEl.innerHTML = '<p>덱을 선택하거나 새로 추가해주세요.</p>';
            deckNameInput.disabled = true;
            renderSummaries();
            return;
        }

        deckNameInput.disabled = false;
        deckNameInput.value = deck.name;
        deckGridEl.innerHTML = '';

        for (let i = 0; i < 12; i++) {
            const wrapper = document.createElement('div');
            wrapper.className = 'party-slot-wrapper';

            const numBtn = document.createElement('button');
            numBtn.className = 'numbering-btn';
            const orderIndex = deck.order.indexOf(i);
            if (orderIndex > -1) {
                numBtn.textContent = orderIndex + 1;
                numBtn.classList.add('numbered');
            }
            numBtn.addEventListener('click', () => toggleNumbering(i));

            const partySlot = document.createElement('div');
            partySlot.className = 'party-slot';

            const p = findItemById(deck.characters[i]);

            const nameSlot = document.createElement('div');
            nameSlot.className = 'personality-name';
            nameSlot.textContent = p ? p.name : '인격 선택';
            if (p) nameSlot.setAttribute('title', p.name); // 툴팁으로 원문 표시

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
                if (slotConfig && slotConfig.defaultIcon) {
                    charSlot.style.backgroundImage = `url(${slotConfig.defaultIcon})`;
                    charSlot.style.backgroundSize = 'auto 60%';
                    charSlot.style.backgroundRepeat = 'no-repeat';
                    charSlot.style.backgroundPosition = 'center';
                } else {
                    charSlot.textContent = '+';
                }
            }
            charSlot.addEventListener('click', () => openSelectionModal('character', i));

            const egoGrid = document.createElement('div');
            egoGrid.className = 'ego-grid';
            const egoTiers = ['ZAYIN', 'TETH', 'HE', 'WAW', 'ALEPH'];
            for (let j = 0; j < 5; j++) {
                const egoSlot = document.createElement('div');
                egoSlot.className = 'ego-slot';
                const e = findItemById(deck.egos[i]?.[j]);
                if (e) {
                    const slotImg = e.slotImage || e.image;
                    egoSlot.style.backgroundImage = `url(${slotImg})`;
                    egoSlot.classList.add('has-ego');
                    egoSlot.textContent = '';
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
                        egoSlot.textContent = '';
                    } else {
                        egoSlot.textContent = egoTiers[j];
                    }
                }
                egoSlot.addEventListener('click', () => openSelectionModal('ego', i, j));
                egoGrid.appendChild(egoSlot);
            }

            partySlot.appendChild(nameSlot);
            partySlot.appendChild(charSlot);
            partySlot.appendChild(egoGrid);

            wrapper.appendChild(numBtn);
            wrapper.appendChild(partySlot);
            deckGridEl.appendChild(wrapper);
        }

        renderSummaries();

        // 즉시 문자열 자르기 (캡쳐에도 반영되도록 requestAnimationFrame 제거)
        applyPersonalityNameTruncation();
    }

    function addDeck() {
        const newDeck = {
            id: Date.now() + Math.random(),
            name: `새로운 덱 ${decks.length + 1}`,
            characters: new Array(12).fill(null),
            egos: new Array(12).fill(null).map(() => new Array(5).fill(null)),
            order: []
        };
        decks.push(newDeck);
        switchDeck(newDeck.id);
    }
    function deleteDeck(deckId) {
        decks = decks.filter(deck => deck.id !== deckId);
        if (currentDeckId === deckId) {
            currentDeckId = decks.length > 0 ? decks[0].id : null;
        }
        renderAll();
    }
    function updateDeckName(newName) {
        const deck = decks.find(d => d.id === currentDeckId);
        if (deck) {
            deck.name = newName;
            renderDeckList();
        }
    }
    function toggleNumbering(partyIndex) {
        const deck = decks.find(d => d.id === currentDeckId);
        if (!deck) return;
        const orderIndex = deck.order.indexOf(partyIndex);
        if (orderIndex > -1) deck.order.splice(orderIndex,1);
        else deck.order.push(partyIndex);
        renderCurrentDeck();
    }

    function handleExport() {
        try {
            const dataStr = serializeDecks(decks);
            ioModalContent.innerHTML = `
                <h3>덱 목록 내보내기</h3>
                <p>아래 코드를 복사하여 안전한 곳에 저장하세요.</p>
                <textarea readonly>${dataStr}</textarea>
                <div class="modal-actions">
                    <button id="copy-btn">클립보드에 복사</button>
                    <button class="secondary" id="close-io-btn">닫기</button>
                </div>`;
            ioModal.style.display = 'flex';

            document.getElementById('copy-btn').addEventListener('click', async (e) => {
                const textarea = ioModalContent.querySelector('textarea');
                const onSuccess = () => {
                    e.target.textContent = '복사 완료!';
                    setTimeout(() => e.target.textContent = '클립보드에 복사', 2000);
                };
                const fallbackCopy = () => {
                    textarea.select();
                    textarea.setSelectionRange(0, textarea.value.length);
                    try {
                        const ok = document.execCommand('copy');
                        if (ok) onSuccess();
                        else alert('복사에 실패했습니다. 수동으로 복사해주세요.');
                    } catch {
                        alert('복사에 실패했습니다. 수동으로 복사해주세요.');
                    } finally {
                        textarea.blur();
                    }
                };
                try {
                    if (navigator.clipboard?.writeText) {
                        await navigator.clipboard.writeText(textarea.value);
                        onSuccess();
                    } else {
                        fallbackCopy();
                    }
                } catch {
                    fallbackCopy();
                }
            });

            document.getElementById('close-io-btn')
                .addEventListener('click', () => closeModal(ioModal));
        } catch (err) {
            console.error('Export Error:', err);
            alert('내보내기 중 오류가 발생했습니다.');
        }
    }

    function handleImport() {
        ioModalContent.innerHTML = `
            <h3>덱 목록 불러오기</h3>
            <p>저장해 둔 코드를 아래에 붙여넣으세요.</p>
            <textarea placeholder="이곳에 코드를 붙여넣으세요..."></textarea>
            <div class="modal-actions">
                <button id="import-confirm-btn">불러오기</button>
                <button class="secondary" id="close-io-btn">닫기</button>
            </div>`;
        ioModal.style.display = 'flex';

        document.getElementById('import-confirm-btn')
            .addEventListener('click', () => {
                const textarea = ioModalContent.querySelector('textarea');
                const dataStr = textarea.value.trim();
                if (!dataStr) {
                    alert('코드를 입력해주세요.');
                    return;
                }
                try {
                    const importedDecks = deserializeDecks(dataStr);
                    if (!Array.isArray(importedDecks)) throw new Error("Invalid data format");
                    if (confirm('현재 작업중인 모든 덱을 덮어쓰고 불러오시겠습니까?')) {
                        decks = importedDecks;
                        currentDeckId = decks.length > 0 ? decks[0].id : null;
                        renderAll();
                        closeModal(ioModal);
                    }
                } catch (e) {
                    alert('유효하지 않은 코드입니다.');
                    console.error("Import Error:", e);
                }
            });

        document.getElementById('close-io-btn')
            .addEventListener('click', () => closeModal(ioModal));
    }

    function exportCurrentDeck() {
        const deck = decks.find(d => d.id === currentDeckId);
        if (!deck) {
            alert('선택된 덱이 없습니다.');
            return;
        }
        const clone = JSON.parse(JSON.stringify(deck));
        const dataStr = serializeSingleDeck(clone);
        ioModalContent.innerHTML = `
            <h3>현재 덱 내보내기</h3>
            <p>이 코드는 현재 보고 있는 덱 1개만을 포함합니다.</p>
            <textarea readonly>${dataStr}</textarea>
            <div class="modal-actions">
                <button id="copy-current-btn">복사</button>
                <button class="secondary" id="close-io-btn">닫기</button>
            </div>`;
        ioModal.style.display = 'flex';

        document.getElementById('copy-current-btn').addEventListener('click', async (e) => {
            const textarea = ioModalContent.querySelector('textarea');
            const onSuccess = () => {
                e.target.textContent = '복사 완료!';
                setTimeout(() => e.target.textContent = '복사', 2000);
            };
            try {
                if (navigator.clipboard?.writeText) {
                    await navigator.clipboard.writeText(textarea.value);
                    onSuccess();
                } else {
                    textarea.select();
                    document.execCommand('copy');
                    onSuccess();
                }
            } catch {
                textarea.select();
                try {
                    document.execCommand('copy');
                    onSuccess();
                } catch {
                    alert('복사 실패. 수동으로 복사해주세요.');
                }
            } finally {
                textarea.blur();
            }
        });

        document.getElementById('close-io-btn')
            .addEventListener('click', () => closeModal(ioModal));
    }

    function importCurrentDeck() {
        const deck = decks.find(d => d.id === currentDeckId);
        if (!deck) {
            alert('선택된 덱이 없습니다.';
            return;
        }
        ioModalContent.innerHTML = `
            <h3>현재 덱 불러오기</h3>
            <p>아래에 단일 덱 코드를 붙여넣고 불러오면 현재 덱을 덮어씁니다.</p>
            <textarea placeholder="단일 덱 코드 붙여넣기"></textarea>
            <div class="modal-actions">
                <button id="import-one-confirm-btn">덮어쓰기</button>
                <button class="secondary" id="close-io-btn">취소</button>
            </div>`;
        ioModal.style.display = 'flex';

        document.getElementById('import-one-confirm-btn').addEventListener('click', () => {
            const textarea = ioModalContent.querySelector('textarea');
            const dataStr = textarea.value.trim();
            if (!dataStr) {
                alert('코드를 입력해주세요.');
                return;
            }
            try {
                const imported = deserializeSingleDeck(dataStr);
                if (typeof imported !== 'object' || !imported) throw new Error('invalid');
                if (!Array.isArray(imported.characters) || !Array.isArray(imported.egos)) throw new Error('structure');
                if (!confirm('현재 덱을 이 내용으로 덮어쓸까요?')) return;
                const keepId = deck.id;
                imported.id = keepId;
                imported.name = imported.name || deck.name;
                imported.order = Array.isArray(imported.order) ? imported.order : [];
                decks[decks.findIndex(d=>d.id===keepId)] = imported;
                renderAll();
                closeModal(ioModal);
            } catch (e) {
                alert('유효하지 않은 단일 덱 코드입니다.');
                console.error(e);
            }
        });

        document.getElementById('close-io-btn').addEventListener('click', ()=> closeModal(ioModal));
    }

    async function captureDeckImage() {
        const deck = decks.find(d => d.id === currentDeckId);
        if (!deck) {
            alert('선택된 덱이 없습니다.');
            return;
        }
        if (typeof html2canvas === 'undefined') {
            alert('캡쳐 라이브러리를 불러올 수 없습니다.');
            return;
        }
        // 최신 렌더 & 자르기 반영
        renderCurrentDeck();
        applyPersonalityNameTruncation();

        const CAPTURE_WIDTH = 1600;
        const temp = document.createElement('div');
        temp.id = 'deck-capture-wrapper';
        temp.style.cssText = `position:fixed; left:-99999px; top:0; width:${CAPTURE_WIDTH}px; background:#ffffff; padding:30px 30px 40px; box-sizing:border-box;`;
        const title = document.createElement('h1');
        title.className = 'capture-title';
        title.textContent = deck.name;
        temp.appendChild(title);

        const gridClone = deckGridEl.cloneNode(true); // 잘린 상태 그대로 복제
        gridClone.id = 'deck-grid-capture';
        gridClone.style.overflow = 'visible';
        gridClone.style.height = 'auto';
        temp.appendChild(gridClone);
        document.body.appendChild(temp);

        try {
            const canvas = await html2canvas(temp, {
                backgroundColor:'#ffffff',
                width: CAPTURE_WIDTH,
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
        } catch (err) {
            console.error(err);
            alert('캡쳐 중 오류가 발생했습니다.');
        } finally {
            temp.remove();
        }
    }

    function toggleFilterBtn(btn) {
        const active = btn.dataset.active === 'true';
        btn.dataset.active = active ? 'false' : 'true';
        const squareSpan = btn.querySelector('.square');
        if (squareSpan) squareSpan.textContent = active ? '□' : '■';
        if (selectionModal.style.display === 'flex' && lastSelectionContext) {
            openSelectionModal(
                lastSelectionContext.type,
                lastSelectionContext.partyIndex,
                lastSelectionContext.egoIndex
            );
        }
    }

    filterButtons.forEach(btn => {
        if (!btn.querySelector('.square')) {
            const sq = document.createElement('span');
            sq.className = 'square';
            sq.textContent = '□';
            btn.prepend(sq);
        }
        btn.addEventListener('click', () => toggleFilterBtn(btn));
    });

    // 이벤트 리스너
    addDeckBtn.addEventListener('click', addDeck);
    deckNameInput.addEventListener('input', (e) => updateDeckName(e.target.value));
    selectionModal.addEventListener('click', (e) => {
        if (e.target === selectionModal) closeModal(selectionModal);
    });
    exportBtn.addEventListener('click', handleExport);
    importBtn.addEventListener('click', handleImport);
    ioModal.addEventListener('click', (e) => {
        if (e.target === ioModal) closeModal(ioModal);
    });

    exportCurrentBtn.addEventListener('click', exportCurrentDeck);
    importCurrentBtn.addEventListener('click', importCurrentDeck);
    captureDeckBtn.addEventListener('click', captureDeckImage);

    // 창 크기 변경 시 재계산 (선택)
    window.addEventListener('resize', () => {
        applyPersonalityNameTruncation();
    });

    // 초기 덱 하나 생성
    addDeck();
});

})();