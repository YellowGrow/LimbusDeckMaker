"use strict";

/* 이상의 모든 인격 + 에고 정의 */
registerCharacter({
    characterName: '이상',
    defaultIcon: './기타/수감자_이상.png',
    personalities: [
        {
            id: 'yisang_001',
            name: 'LCB 수감자',
            season: 'normal',
            image: './수감자/인격/이상/LCB_수감자/프로필.png',
            tier: '1',
            skills: ['gloom', 'gloom', 'gloom', 'envy', 'envy', 'sloth'],
            defense: { type: 'guard', sin: 'gloom' },
            details: {
                fullImage: './수감자/인격/이상/LCB_수감자/일러스트.png',
                skillIcons: [
                    './수감자/인격/이상/LCB_수감자/1스킬.png', 
                    './수감자/인격/이상/LCB_수감자/2스킬.png', 
                    './수감자/인격/이상/LCB_수감자/3스킬.png', 
                    './수감자/인격/이상/LCB_수감자/수비스킬.png'
                ],
                skillTypes: ['slash', 'pierce', 'slash'],
                passives: [
                    {
                        conditionImage: './기타/자원_우울.png',
                        condition: 'X4 공명',
                        name: '정보전달',
                        effect: '조작 패널에서 자신의 뒤에 있는 아군 2명에게 피해량 증가 1 부여',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_우울.png',
                        condition: 'X4 보유',
                        name: '정보중화',
                        effect: '정신력이 가장 낮은 아군 1명 이번 턴에 정신력이 감소한 경우 턴 종료 시 정신력 10 회복'
                    }
                ],
                keywords: ['침잠']
            }
        },
        {
            id: 'yisang_002',
            name: '남부 세븐 협회 6과',
            season: 'normal',
            tier: '2',
            image: './수감자/인격/이상/남부_세븐_협회_6과/프로필.png',
            skills: ['gloom', 'gloom', 'gloom', 'gluttony', 'gluttony', 'sloth'],
            defense: { type: 'guard', sin: 'gluttony' },
            details: {
                fullImage: './수감자/인격/이상/남부_세븐_협회_6과/일러스트.png',
                skillIcons: [
                    './수감자/인격/이상/남부_세븐_협회_6과/1스킬.png', 
                    './수감자/인격/이상/남부_세븐_협회_6과/2스킬.png', 
                    './수감자/인격/이상/남부_세븐_협회_6과/3스킬.png', 
                    './수감자/인격/이상/남부_세븐_협회_6과/수비스킬.png'
                ],
                skillTypes: ['pierce', 'pierce', 'blunt'],
                passives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X4 공명',
                        name: '관찰',
                        effect: '합 진행 시 대상의 합 위력 -2',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X3 공명',
                        name: '분석',
                        effect: '최대 체력이 가장 높은 아군 1명 합 진행 시 합 위력 +1'
                    }
                ],
                keywords: ['파열', '관통']
            }
        },
        {
            id: 'yisang_003',
            name: '검계 살수',
            season: 'normal',
            tier: '3',
            image: './수감자/인격/이상/검계_살수/프로필.png',
            skills: ['pride', 'pride', 'pride', 'wrath', 'wrath', 'envy'],
            defense: { type: 'counter', sin: 'pride' },
            details: {
                fullImage: './수감자/인격/이상/검계_살수/일러스트.png',
                skillIcons: [
                    './수감자/인격/이상/검계_살수/1스킬.png', 
                    './수감자/인격/이상/검계_살수/2스킬.png', 
                    './수감자/인격/이상/검계_살수/3스킬.png', 
                    './수감자/인격/이상/검계_살수/수비스킬.png'
                ],
                skillTypes: ['slash', 'slash', 'slash', 'slash'],
                passives: [
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X4 보유',
                        name: '냉정',
                        effect: '합 승리 시 호흡 횟수 1 증가\n호흡 횟수 5당 코인 위력 +1 (최대 3)',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X3 보유',
                        name: '사사',
                        effect: '정신력이 가장 높은 아군 1명 스킬의 효과로 얻는 호흡 횟수 +1'
                    }
                ],
                keywords: ['호흡']
            }
        },
        {
            id: 'yisang_004',
            name: '개화 E.G.O::동백',
            season: 2,
            tier: '3',
            image: './수감자/인격/이상/개화_E.G.O_동백/프로필.png',
            skills: ['gluttony', 'gluttony', 'gluttony', 'sloth', 'sloth', 'pride'],
            defense: { type: 'evade', sin: 'sloth' },
            details: {
                fullImage: './수감자/인격/이상/개화_E.G.O_동백/일러스트.png',
                skillIcons: [
                    './수감자/인격/이상/개화_E.G.O_동백/1스킬.png', 
                    './수감자/인격/이상/개화_E.G.O_동백/2스킬.png', 
                    './수감자/인격/이상/개화_E.G.O_동백/3스킬.png', 
                    './수감자/인격/이상/개화_E.G.O_동백/수비스킬.png'
                ],
                skillTypes: ['pierce', 'blunt', 'pierce'],
                passives: [
                    {
                        conditionImage: './기타/자원_나태.png',
                        condition: 'X4 보유',
                        name: '만개',
                        effect: '2명 이상을 공격할 때 피해량 +30%',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_나태.png',
                        condition: 'X3 공명',
                        name: '알싸한 봄바람',
                        effect: '정신력이 가장 낮은 아군 1명이 2명 이상을 공격할 때 피해량 +10%'
                    }
                ],
                keywords: ['진동', '침잠']
            }
        },
        {
            id: 'yisang_005',
            name: '어금니 사무소 해결사',
            season: 2,
            tier: '2',
            image: './수감자/인격/이상/어금니_사무소_해결사/프로필.png',
            skills: ['lust', 'lust', 'lust', 'sloth', 'sloth', 'wrath'],
            defense: { type: 'guard', sin: 'sloth' },
            details: {
                fullImage: './수감자/인격/이상/어금니_사무소_해결사/일러스트.png',
                skillIcons: [
                    './수감자/인격/이상/어금니_사무소_해결사/1스킬.png', 
                    './수감자/인격/이상/어금니_사무소_해결사/2스킬.png', 
                    './수감자/인격/이상/어금니_사무소_해결사/3스킬.png', 
                    './수감자/인격/이상/어금니_사무소_해결사/수비스킬.png'
                ],
                skillTypes: ['pierce', 'blunt', 'blunt'],
                passives: [
                    {
                        conditionImage: './기타/자원_나태.png',
                        condition: 'X3 보유',
                        name: '이럴 때 일수록...',
                        effect: '적에게 진동 폭발 시 입히는 흐트러짐 손상 4 당 방어 레벨 감소 1 부여 (턴마다 적 1명당 최대 5)',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_나태.png',
                        condition: 'X3 보유',
                        name: '벌려진 일 수습',
                        effect: '최대 체력이 가장 낮은 아군 1명이 적에게 진동 폭발 시 입히는 흐트러짐 손상 4 당 다음 턴에 방어 레벨 감소 1 부여 (턴마다 적 1명당 최대 3)'
                    }
                ],
                keywords: ['진동']
            }
        },
        {
            id: 'yisang_006',
            name: 'W사 3등급 정리 요원',
            season: 'normal',
            tier: '3',
            image: './수감자/인격/이상/W사_3등급_정리_요원/프로필.png',
            skills: ['sloth', 'sloth', 'sloth', 'gluttony', 'gluttony', 'gloom'],
            defense: { type: 'evade', sin: 'gloom' },
            details: {
                fullImage: './수감자/인격/이상/W사_3등급_정리_요원/일러스트.png',
                skillIcons: [
                    './수감자/인격/이상/W사_3등급_정리_요원/1스킬.png', 
                    './수감자/인격/이상/W사_3등급_정리_요원/2스킬.png', 
                    './수감자/인격/이상/W사_3등급_정리_요원/3스킬.png', 
                    './수감자/인격/이상/W사_3등급_정리_요원/수비스킬.png'
                ],
                skillTypes: ['slash', 'pierce', 'pierce'],
                passives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X3 보유',
                        name: '비워낸 생각',
                        effect: '- 턴 종료 시 자신의 충전 횟수 5 당 다음 턴에 신속 1을 얻음. (최대 3)\n- 자신이 스킬로 충전 횟수를 소모할 때, 현재 체력 비율이 가장 낮은 아군 1명에게 충전 역장 3 부여',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X4 보유',
                        name: '정리 시범 교육',
                        effect: '충전 횟수가 가장 높은 아군 1명이 파열이 있는 대상에게 가하는 피해량이 대상의 파열 위력에 비례하여 증가 (파열 1당 1.5%. 최대 15%)'
                    }
                ],
                keywords: ['파열', '충전']
            }
        },
        {
            id: 'yisang_007',
            name: '피쿼드호 일등 항해사',
            season: 3,
            tier: '2',
            image: './수감자/인격/이상/피쿼드호_일등_항해사/프로필.png',
            skills: ['pride', 'pride', 'pride', 'envy', 'envy', 'gluttony'],
            defense: { type: 'evade', sin: 'pride' },
            details: {
                fullImage: './수감자/인격/이상/피쿼드호_일등_항해사/일러스트.png',
                skillIcons: [
                    './수감자/인격/이상/피쿼드호_일등_항해사/1스킬.png', 
                    './수감자/인격/이상/피쿼드호_일등_항해사/2스킬.png', 
                    './수감자/인격/이상/피쿼드호_일등_항해사/3스킬.png', 
                    './수감자/인격/이상/피쿼드호_일등_항해사/수비스킬.png'
                ],
                skillTypes: ['pierce', 'pierce', 'pierce'],
                passives: [
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X4 보유',
                        name: '일등 항해사의 작살',
                        effect: '크리티컬 적중 시 스킬로 부여하는 출혈 위력 +2 (턴 당 최대 6회)',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X4 보유',
                        name: '일등 항해사의 노련함',
                        effect: '호흡을 가장 많이 보유한 아군 1명이 크리티컬 적중 시 스킬로 부여하는 출혈 위력 +2 (턴 당 최대 6회)'
                    }
                ],
                keywords: ['출혈', '호흡']
            }
        },
        {
            id: 'yisang_008',
            name: '남부 디에치 협회 4과',
            season: 'normal',
            tier: '2',
            image: './수감자/인격/이상/남부_디에치_협회_4과/프로필.png',
            skills: ['gluttony', 'gluttony', 'gluttony', 'lust', 'lust', 'sloth'],
            defense: { type: 'guard', sin: 'sloth' },
            details: {
                fullImage: './수감자/인격/이상/남부_디에치_협회_4과/일러스트.png',
                skillIcons: [
                    './수감자/인격/이상/남부_디에치_협회_4과/1스킬.png', 
                    './수감자/인격/이상/남부_디에치_협회_4과/2스킬.png', 
                    './수감자/인격/이상/남부_디에치_협회_4과/3스킬.png', 
                    './수감자/인격/이상/남부_디에치_협회_4과/수비스킬.png'
                ],
                skillTypes: ['pierce', 'blunt', 'blunt'],
                passives: [
                    {
                        conditionImage: './기타/자원_나태.png',
                        condition: 'X3 보유',
                        name: '가라앉는 지식',
                        effect: '피격 시 공격자에게 침잠 1 부여. 보호막이 있는 동안 피격 시 침잠 1 추가 부여 (최대 4회)',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_나태.png',
                        condition: 'X4 보유',
                        name: '반복 지식',
                        effect: '속도가 가장 빠른 아군 1명이 스킬을 버릴 때, 해당 캐릭터 최대 체력의 (5 × 버린 스킬의 등급)% 만큼 보호막을 얻음 (턴 당 최대 2회)'
                    }
                ],
                keywords: ['침잠']
            }
        },
        {
            id: 'yisang_009',
            name: '약지 점묘파 스튜던트',
            season: 'normal',
            tier: '3',
            image: './수감자/인격/이상/약지_점묘파_스튜던트/프로필.png',
            skills: ['gloom', 'gloom', 'gloom', 'lust', 'lust', 'sloth'],
            defense: { type: 'guard', sin: 'lust' },
            details: {
                fullImage: './수감자/인격/이상/약지_점묘파_스튜던트/일러스트.png',
                skillIcons: [
                    './수감자/인격/이상/약지_점묘파_스튜던트/1스킬.png', 
                    './수감자/인격/이상/약지_점묘파_스튜던트/2스킬.png', 
                    './수감자/인격/이상/약지_점묘파_스튜던트/3스킬.png', 
                    './수감자/인격/이상/약지_점묘파_스튜던트/수비스킬.png'
                ],
                skillTypes: ['pierce', 'pierce', 'pierce'],
                passives: [
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X4 보유',
                        name: '혈점묘파',
                        effect: '이 인격은 출혈을 부여하는 인격으로만 취급됨.\n랜덤으로 화상, 출혈, 진동, 파열, 침잠을 부여하는 스킬이 이 효과로 인해서 해당 키워드를 부여하는 스킬로 취급되지 않음.'
                    },
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X4 보유',
                        name: '과제평가',
                        effect: '- 적중시 대상에게 출혈이 4 이상 있으면 정신력 2 회복\n- 대상이 보유한 부정적인 효과 1개당 정신력 1 추가 회복. (최대 3)\n- 이 효과로 정신력 회복 시 자신의 정신력이 최대면 다음 턴에 공격 레벨 증가 2 얻음\n(턴 당 패시브 최대 발동 횟수 : 4회)'
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X4 보유',
                        name: '미학견습',
                        effect: '- 정신력이 가장 낮은 아군이 공격 적중시 대상이 보유한 부정적인 효과 1개당 정신력 2 회복 (최대 6)\n- 대상에게 출혈이 있으면 3 추가 회복\n(턴 당 패시브 최대 발동 횟수 : 2회)'
                    }
                ],
                keywords: ['출혈']
            }
        },
        {
            id: 'yisang_010',
            name: '로보토미 E.G.O::엄숙한 애도',
            season: 'walpurgis',
            tier: '3',
            image: './수감자/인격/이상/로보토미_E.G.O_엄숙한_애도/프로필.png',
            skills: ['pride', 'pride', 'pride', 'gloom', 'gloom', 'sloth'],
            defense: { type: 'guard', sin: 'gloom' },
            details: {
                fullImage: './수감자/인격/이상/로보토미_E.G.O_엄숙한_애도/일러스트.png',
                skillIcons: [
                    './수감자/인격/이상/로보토미_E.G.O_엄숙한_애도/1스킬.png', 
                    './수감자/인격/이상/로보토미_E.G.O_엄숙한_애도/2스킬.png', 
                    './수감자/인격/이상/로보토미_E.G.O_엄숙한_애도/3스킬.png', 
                    './수감자/인격/이상/로보토미_E.G.O_엄숙한_애도/수비스킬.png'
                ],
                skillTypes: ['pierce', 'pierce', 'pierce'],
                passives: [
                    {
                        conditionImage: './기타/자원_우울.png',
                        condition: 'X3 공명',
                        name: '죽어가는나비를본다.',
                        effect: '전투 시작 시 산나비·죽은나비를 각각 10씩 보유함\n\n산나비·죽은나비를 소모할 때, 해당 효과의 산나비(위력)와 죽은나비(횟수)를 무작위로 소모\n\n나비를 부여할 때, 해당 코인에서 소모한 산나비·죽은나비에 따라 부여\n- 산나비를 소모했으면, 소모한 값만큼 산나비를 부여\n- 죽은나비를 소모했으면, 소모한 값만큼 죽은나비를 부여\n스킬 사용 중 산나비·죽은나비가 부족하면, 다음 코인을 모두 취소하고 재장전\n\n재장전을 하거나 산나비·죽은나비를 얻을 때, 현재 정신력에 따라 얻는 나비가 정해짐\n- 정신력이 0 이상이면, 30% 확률로 산나비를, 70% 확률로 죽은나비를 얻음\n- 정신력이 0 미만이면, 70% 확률로 산나비를, 30% 확률로 죽은나비를 얻음\n- 확률은 각 탄환마다 개별적으로 적용됨'
                    },
                    {
                        conditionImage: './기타/자원_우울.png',
                        condition: 'X3 공명',
                        name: '쏘아라.쏘으리로다.',
                        effect: '공격 종료 시 자신의 스킬에 의해 대상이 사망했으면, 재장전\n산나비·죽은나비를 얻으면, 다음 턴에 신속 2 얻음 (턴 당 1회)'
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_우울.png',
                        condition: 'X6 보유',
                        name: '구원의 손',
                        effect: '아군의 스킬 적중 시 대상의 침잠을 2 소모하여 나비 1 부여 (턴 당 3회)'
                    }
                ],
                keywords: ['침잠']
            }
        },
        {
            id: 'yisang_011',
            name: 'LCE E.G.O::초롱',
            season: 5,
            tier: '2',
            image: './수감자/인격/이상/LCE_E.G.O_초롱/프로필.png',
            skills: ['sloth', 'sloth', 'sloth', 'envy', 'envy', 'gluttony'],
            defense: { type: 'counter', sin: 'gluttony' },
            details: {
                fullImage: './수감자/인격/이상/LCE_E.G.O_초롱/일러스트.png',
                skillIcons: [
                    './수감자/인격/이상/LCE_E.G.O_초롱/1스킬.png', 
                    './수감자/인격/이상/LCE_E.G.O_초롱/2스킬.png', 
                    './수감자/인격/이상/LCE_E.G.O_초롱/3스킬.png', 
                    './수감자/인격/이상/LCE_E.G.O_초롱/수비스킬.png'
                ],
                skillTypes: ['blunt', 'pierce', 'blunt', 'blunt'],
                passives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X3 보유',
                        name: '외형 또한 이전 L사의 E.G.O에 비해, 환상체와 가깝게 추출할 수 있소',
                        effect: '사망 시 자신을 가장 마지막으로 공격한 대상에게 파열 5, 파열 횟수 3을 부여하고, 가장 부족한 속성 E.G.O 자원 4종을 2개씩 얻음\n- 공격자가 없거나 아군에게 사망한 경우, 현재 파열 횟수가 가장 적은 적에게 파열 5, 파열 횟수 3 부여\n- 자신이 미끼 요정 상태인 경우, 이 효과로 부여하는 파열 위력이 2배로 적용됨'
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X5 보유',
                        name: 'E.G.O가 붕괴될 때 거름과 같이 분해되오',
                        effect: '현재 체력이 가장 낮은 아군 1명이 사망 시 가장 부족한 속성의 E.G.O 자원 2종을 2개씩 얻음'
                    }
                ],
                keywords: ['침잠']
            }
        },
        {
            id: 'yisang_012',
            name: '남부 리우 협회 3과',
            season: 'normal',
            tier: '3',
            image: './수감자/인격/이상/남부_리우_협회_3과/프로필.png',
            skills: ['sloth', 'sloth', 'sloth', 'wrath', 'wrath', 'envy'],
            defense: { type: 'counter', sin: 'wrath' },
            details: {
                fullImage: './수감자/인격/이상/남부_리우_협회_3과/일러스트.png',
                skillIcons: [
                    './수감자/인격/이상/남부_리우_협회_3과/1스킬.png', 
                    './수감자/인격/이상/남부_리우_협회_3과/2스킬.png', 
                    './수감자/인격/이상/남부_리우_협회_3과/3스킬.png', 
                    './수감자/인격/이상/남부_리우_협회_3과/수비스킬.png'
                ],
                skillTypes: ['slash', 'slash', 'slash', 'slash'],
                passives: [
                    {
                        conditionImage: './기타/자원_분노.png',
                        condition: 'X4 보유',
                        name: '내면의 열혈',
                        effect: '턴 종료 시 현재 정신력이 가장 낮은 아군 1명의 정신력을 5 + (최대 공명 수)만큼 회복시킴. (최대 10) (자신 또는 패닉, E.G.O 침식 상태인 아군 제외)\n회복 대상이 화상 위력이나 횟수를 부여하는 기본 스킬을 가지고 있으면, 정신력 5 추가 회복\n분노 공명 4 이상이면, 회복 대상 1명 추가',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_분노.png',
                        condition: 'X3 공명',
                        name: '리우 방진',
                        effect: '- 정신력이 가장 낮은 아군 2명이 이번 턴에 정신력이 감소한 경우 턴 종료 시 정신력 5 회복\n회복 대상이 화상 위력이나 횟수를 부여하는 기본 스킬을 가지고 있으면, 대신 5 ~ 10 회복'
                    }
                ],
                keywords: ['화상']
            }
        },
        {
            id: 'yisang_013',
            name: 'N사 E.G.O::흉탄',
            season: 6,
            tier: '3',
            image: './수감자/인격/이상/N사_E.G.O_흉탄/프로필.png',
            skills: ['wrath', 'wrath', 'wrath', 'lust', 'lust', 'pride'],
            defense: { type: 'counter', sin: 'pride' },
            details: {
                fullImage: './수감자/인격/이상/N사_E.G.O_흉탄/일러스트.png',
                skillIcons: [
                    './수감자/인격/이상/N사_E.G.O_흉탄/1스킬.png', 
                    './수감자/인격/이상/N사_E.G.O_흉탄/2스킬.png', 
                    './수감자/인격/이상/N사_E.G.O_흉탄/3스킬.png', 
                    './수감자/인격/이상/N사_E.G.O_흉탄/수비스킬.png'
                ],
                skillTypes: ['blunt', 'pierce', 'pierce', 'pierce'],
                passives: [
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X6 보유',
                        name: '휘발된 추억',
                        effect: '턴 종료 시 자신의 찢어진 추억을 전부 제거하고 다음 턴에 제거한 수치만큼 찢어진 추억을 얻음',
                    },
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X6 보유',
                        name: '흉탄',
                        effect: '전투 중 자신이 아군을 사망시켰다면 다음 턴 동안 흉탄을 얻음\n(자신의 E.G.O 침식 및 아군 공격 포함)\n자신의 E.G.O 흉탄을 사용하여, 찢어진 추억이 소모되면, 턴 종료 시 소모한 만큼 다음 턴에 찢어진 추억을 얻음',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X4 공명',
                        name: '대상 지정',
                        effect: '속도가 가장 느린 아군이 아군을 공격했다면, 공격 종료 시, 다음 턴에 피해량 증가 1 얻음(턴 당 최대 2).\n- 이때, 아군이 사망했으면, 위 효과를 대신하여 이번 전투 동안 피해량 증가 1 얻음(스테이지 및 인격당 최대 2).\n- 위 효과들로 얻는 피해량 증가는 최대 2까지만 얻어짐.'
                    }
                ],
                keywords: ['출혈', '호흡']
            }
        },
        {
            id: 'yisang_014',
            name: '흑수 - 오 필두',
            season: 6,
            tier: '3',
            image: './수감자/인격/이상/흑수_오_필두/프로필.png',
            skills: ['sloth', 'sloth', 'sloth', 'envy', 'envy', 'gluttony'],
            defense: { type: 'guard', sin: 'gluttony' },
            details: {
                fullImage: './수감자/인격/이상/흑수_오_필두/일러스트.png',
                skillIcons: [
                    './수감자/인격/이상/흑수_오_필두/1스킬.png', 
                    './수감자/인격/이상/흑수_오_필두/2스킬.png', 
                    './수감자/인격/이상/흑수_오_필두/3스킬.png', 
                    './수감자/인격/이상/흑수_오_필두/수비스킬.png'
                ],
                skillTypes: ['slash', 'slash', 'slash'],
                passives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X5 보유',
                        name: '구마지심 [拘馬之心]',
                        effect: '홍원 군주 홍루와 존명 발동 시, 홍원 군주 홍루가 흑수환염[黑獸丸染]으로 아래 효과 얻음\n- 기본 스킬의 마지막 코인 적중 시, 진동 폭발 1회 (턴 당 1회)\n\n전투 인원에 가주 후보 이스마엘이 있다면, 아래 효과 적용\n- 가주 후보 이스마엘이 스킬 효과로 파열 또는 파열 횟수 부여 시 호흡 위력 3 얻음 (턴 당 2회, E.G.O 스킬에는 적용되지 않음)\n- 턴 시작 시 가주 후보 이스마엘에게 공격 위력 증가 1 부여. 이스마엘의 호흡 위력이 10 이상이면, 공격 위력 증가를 1 추가 부여\n- \'흑풍마각월참\' 사용 후 가주 후보 이스마엘이 적춘 스킬로 원호 공격함 (턴 당 1회)'
                    },
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X5 보유',
                        name: '필두선봉',
                        effect: '호령 부여 시 이번 턴과 다음 턴에 공격 레벨 증가 3 얻음\n(해당 패시브로 이미 공격 레벨 증가를 얻었으면, 다음 턴에만 얻음)'
                    },
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X5 보유',
                        name: '흑풍마각 [黑風馬脚]',
                        effect: '아래의 조건 만족 시 적진 주파 1 얻음\n- 공격 시작 시 대상보다 속도가 2 이상 높을 때\n- 자신의 스킬로 진동 폭발 효과 2회 발동시 (E.G.O 스킬 포함)\n- 각력【오】를 보유 중인 상태로 합 승리 시\n※ 적진 주파는 턴 당 최대 3까지 얻을 수 있으며, \'흑풍마각월참\' 스킬로는 얻을 수 없음\n\n자신에게 보호막이 있을 때, 방어 레벨이 (보호막 수치 / 10)만큼 증가 (최대 5, 소수점 버림)'
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X4 보유',
                        name: '검은 갑각이 살을 째고 돋아 날 지키리',
                        effect: '최대 체력이 가장 높은 아군 1명에게 아래 효과 적용\n- 전투 시작 시 방어 레벨이 (해당 캐릭터의 이전 턴과 이번 턴 속도 차이 × 2)만큼 증가 (최대 5. 이전 턴에 전투 인원이 아니었다면, 해당 캐릭터의 기본 속도 최솟값으로 계산)\n- 전투 시작 시 현재 체력이 최대 체력의 50% 미만이고, 이전 턴과 이번 턴 속도 차이가 3 이상이면, 체력 50 회복 (전투 당 1회)'
                    }
                ],
                keywords: ['진동', '파열']
            }
        },
    ],
    egos: [
        [ 
            {
                id:'yisang_ego_001',
                name:'오감도',
                season: 'normal',
                image:'./수감자/에고/이상/오감도/일러스트.png',
                slotImage:'./수감자/에고/이상/오감도/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/이상/오감도/일러스트.png',
                    cost:['wrath','sloth','sloth','sloth'],
                    passive:{ name:'침묵', effect:'피격 시 다음 턴에 속박 3을 얻고, 대상을 약점, 취약인 속성으로 공격 시 피해량 +20% (턴당 1회 발동)'},
                    keywords:[],
                    awakening:{
                        sanityCost:10,
                        attackType:'pierce',
                        sins:['sloth'],
                        weight:1,
                        coinFaces:['head'],
                        coins:[
                            {
                                index:1,
                                effect:'[적중시] 공격 위력 감소 2 부여\n[적중시] 모든 아군에게 다음 턴에 신속 3 부여\n[적중시] 다음 턴에 속박 2 부여'
                            }
                        ]
                    }
                }
            },
            {
                id:'yisang_ego_006',
                name:'지난 날',
                season: '4',
                image:'./수감자/에고/이상/지난_날/일러스트.png',
                slotImage:'./수감자/에고/이상/지난_날/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/이상/지난_날/일러스트.png',
                    cost:['sloth','sloth','sloth','gloom','gloom','gloom'],
                    passive:{ name:'조각난 어제', effect:'대상의 침잠 위력이 6 이상이면, 합 위력 +1\n대상의 침잠 횟수가 4 이상이면, 합 위력 +1'},
                    keywords:['침잠'],
                    awakening:{
                        sanityCost:15,
                        attackType:'pierce',
                        sins:['gloom'],
                        weight:3,
                        coinFaces:['head'],
                        coins:[
                            { noIndex:true, effect:'[공격 종료시] 침잠 6 + (우울 공명 수 × 1.5)을 무작위로 공격 대상에게 나눠서 부여' },
                            { index:1, effect:'[적중시] 대상에게 침잠이 6 이상이면 다음 턴에 속박 2 부여' }
                        ]
                    },
                    corrosion:{
                        sanityCost:15,
                        attackType:'blunt',
                        sins:['gloom'],
                        weight:3,
                        coinFaces:['tail'],
                        coins:[
                            { noIndex:true, effect:'[피아식별불가]\n무작위 대상 공격\n[공격 시작 전] 우울 공명 수가 3 이상이면 공격 가중치 +1\n[공격 시작 전] 우울 공명 수가 5 이상이면 공격 가중치 +1' },
                            { index:1, effect:'[적중시] 침잠 2 부여. 다음 턴에 속박 2 부여\n[적중시] 대상의 침잠이 6 이상이면 다음 턴에 속박 2 부여' }
                        ]
                    }
                }
            }
        ], 
        [
            {
                id:'yisang_ego_002',
                name:'4번째 성냥불',
                season: '1',
                image:'./수감자/에고/이상/4번째_성냥불/일러스트.png',
                slotImage:'./수감자/에고/이상/4번째_성냥불/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/이상/4번째_성냥불/일러스트.png',
                    cost:['wrath','wrath','wrath','wrath','wrath','sloth','gluttony'],
                    passive:{ name:'불티', effect:'합 승리 시 대상에게 (분노 완전 공명 수/2)만큼 화상 부여\n(스킬당 1회)'},
                    keywords:['화상'],
                    awakening:{
                        sanityCost:20,
                        attackType:'slash',
                        sins:['wrath'],
                        weight:5,
                        coinFaces:['head'],
                        coins:[
                            { index:1, effect:'[적중시] 화상 4 부여\n[앞면 적중시] 화상 6 부여' }
                        ]
                    },
                    corrosion:{
                        sanityCost:20,
                        attackType:'slash',
                        sins:['wrath'],
                        weight:5,
                        coinFaces:['tail'],
                        coins:[
                            { noIndex:true, effect:'[피아식별불가]\n무작위 대상 공격' },
                            { index:1, effect:'[적중시] 화상 4 부여\n[앞면 적중시] 화상 6 부여' }
                        ]
                    }
                }
            },
            {
                id:'yisang_ego_003',
                name:'소망석',
                season: 'normal',
                image:'./수감자/에고/이상/소망석/일러스트.png',
                slotImage:'./수감자/에고/이상/소망석/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/이상/소망석/일러스트.png',
                    cost:['sloth','sloth','sloth','sloth','gloom'],
                    passive:{ name:'돌하르방', effect:'매 턴마다 타격 보호, 나태 보호 3을 얻음'},
                    keywords:['나태'],
                    awakening:{
                        sanityCost:20,
                        attackType:'pierce',
                        sins:['sloth'],
                        weight:3,
                        coinFaces:['head'],
                        coins:[
                            { noIndex:true, effect:'가장 뒤에 있는 대상 공격 (일반 전투 한정)' },
                            { index:1, effect:'[적중시] 나태 취약 2 부여\n[앞면 적중시] 마비 3 부여' }
                        ]
                    },
                    corrosion:{
                        sanityCost:20,
                        attackType:'blunt',
                        sins:['sloth'],
                        weight:3,
                        coinFaces:['tail'],
                        coins:[
                            { noIndex:true, effect:'[피아식별불가]\n무작위 대상 공격' },
                            { index:1, effect:'[적중시] 나태 취약 1 부여\n[적중시] 마비 2 부여\n[앞면 적중시] 다음 턴에 속박 3 부여' }
                        ]
                    }
                }
            }
        ],
        [
            {
                id:'yisang_ego_004',
                name:'차원찢개',
                season: 'normal',
                image:'./수감자/에고/이상/차원찢개/일러스트.png',
                slotImage:'./수감자/에고/이상/차원찢개/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/이상/차원찢개/일러스트.png',
                    cost:['sloth','sloth','sloth','gluttony','gluttony','gluttony'],
                    passive:{ name:'헤메이는 자', effect:'턴 시작 시 이전 턴에 피해를 받지 않았으면, 자신의 충전 횟수 4 증가\n자신보다 속도가 느린 적에게 공격 적중 시 대상의 파열 횟수 1 증가 (턴 당 최대 3회)'},
                    keywords:['파열', '충전'],
                    awakening:{
                        sanityCost:25,
                        attackType:'pierce',
                        sins:['pride'],
                        weight:1,
                        coinFaces:['head'],
                        coins:[
                            { noIndex:true, effect:'가장 뒤에 있는 적 공격 (일반 전투 한정)\n[공격 시작 전] 충전 횟수를 소모하고 소모한 만큼 피해량이 증가함 (최대 75%)' },
                            { index:1, effect:'[적중시] 충전 횟수를 소모한 경우, 차원 균열 5 부여.\n[적중시] 피해량의 (대상의 파열x10)%만큼 오만 추가 피해를 주고, 파열 횟수 5 소모 (최대 100%)' }
                        ]
                    },
                    corrosion:{
                        sanityCost:30,
                        attackType:'pierce',
                        sins:['pride'],
                        weight:1,
                        coinFaces:['tail'],
                        coins:[
                            { noIndex:true, effect:'[피아식별불가]\n무작위 대상 공격\n[공격 시작 전] 충전 횟수를 소모하고 소모한 만큼 피해량이 증가함 (최대 75%)' },
                            { index:1, effect:'[적중시] 충전 횟수를 소모한 경우, 차원 균열 5 부여.\n[적중시] 파열 6 부여\n[적중시] 피해량의 (대상의 파열x10)%만큼 오만 추가 피해를 주고, 파열 횟수 5 소모 (최대 100%)' }
                        ]
                    }
                }
            },
            {
                id:'yisang_ego_007',
                name:'흉탄',
                season: '5',
                image:'./수감자/에고/이상/흉탄/일러스트.png',
                slotImage:'./수감자/에고/이상/흉탄/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/이상/흉탄/일러스트.png',
                    cost:['wrath','wrath','pride','pride','pride','pride','pride','pride'],
                    passive:{ name:'다음', effect:'공격 종료 시 대상이 사망했으면 호흡 횟수 2 증가'},
                    keywords:['출혈, 호흡'],
                    awakening:{
                        sanityCost:25,
                        attackType:'pierce',
                        sins:['pride'],
                        weight:7,
                        coinFaces:['head','head'],
                        coins:[
                            { noIndex:true, effect:'체력이 가장 낮은 대상 우선 공격 (아군 우선 지정)\n[공격 시작 전] (최대 공명 수 + 1)만큼 찢어진 추억을 얻음 (최대 7)\n- 해당 공명이 오만 공명이면, 효과를 대신하여 (최대 공명 수 × 2)만큼 찢어진 추억을 얻음 (최대 7)\n[공격 시작 전] 찢어진 추억당 호흡 1 얻음 (최대 7)\n[공격 종료시] 찢어진 추억 전부 소모' },
                            { index:1, effect:'이 코인에는 메인 타겟만 피해를 입음.\n메인 타겟이 아군이면, 찢어진 추억당 피해량 +15% (최대 105%)\n[아군 처치 시] 자신과 무작위 아군 2명에게 호흡 3 부여\n[아군 처치 시] 처치한 아군의 스킬 1, 2 속성의 E.G.O 자원 +1\n[아군 처치 실패시] 호흡 3 얻음' },
                            { index:2, effect:'이 코인에는 서브 타겟만 피해를 입음.\n- 첫 번째 코인에서 아군을 처치하지 못했으면, 서브 타겟 중 무작위 1명이 피해를 입음\n찢어진 추억당 크리티컬 피해량 +9% (최대 63%)\n[크리티컬 적중 시] 출혈 3 부여' }
                        ]
                    },
                    corrosion:{
                        sanityCost:30,
                        attackType:'pierce',
                        sins:['pride'],
                        weight:7,
                        coinFaces:['tail','tail'],
                        coins:[
                            { noIndex:true, effect:'[피아식별불가]\n체력이 가장 낮은 대상 우선 공격 (아군 우선 지정)\n[공격 시작 전] (최대 공명 수 + 1)만큼 찢어진 추억을 얻음 (최대 7)\n- 해당 공명이 오만 공명이면, 효과를 대신하여 (최대 공명 수 × 2)만큼 찢어진 추억을 얻음 (최대 7)\n[공격 시작 전] 찢어진 추억당 피해량 +4% (최대 28%)\n[공격 시작 전] 찢어진 추억당 호흡 1 얻음 (최대 7)\n[공격 종료시] 찢어진 추억 전부 소모' },
                            { index:1, effect:'이 코인에는 메인 타겟만 피해를 입음.\n메인 타겟이 아군이면, 찢어진 추억당 피해량 +15% (최대 105%)\n메인 타겟이 아군이면, 자신의 호흡당 피해량 +2% (최대 50%)\n크리티컬 피해량 +30%\n[아군 처치 시] 자신과 무작위 아군 3명에게 호흡 4 부여\n[아군 처치 시] 찢어진 추억당 다음 코인의 피해량 +7% (최대 49%)\n[아군 처치 시] 처치한 아군의 스킬 1, 2, 3 속성의 E.G.O 자원 +1\n[아군 처치 실패시] 호흡 3 얻음' },
                            { index:2, effect:'이 코인에는 서브 타겟만 피해를 입음.\n- 첫 번째 코인에서 아군을 처치하지 못했으면, 서브 타겟 중 무작위 1명이 피해를 입음\n찢어진 추억당 크리티컬 피해량 +4% (최대 28%)\n[크리티컬 적중 시] 출혈 5 부여' }
                        ]
                    }
                }
            }
        ],
        [
            {
                id:'yisang_ego_005',
                name:'여우비',
                season: '2',
                image:'./수감자/에고/이상/여우비/일러스트.png',
                slotImage:'./수감자/에고/이상/여우비/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/이상/여우비/일러스트.png',
                    cost:['sloth','sloth','sloth','sloth','gluttony','gluttony','gloom','gloom','pride','pride'],
                    passive:{ name:'비 갠 뒤 햇살', effect:'턴 시작 시 모든 아군의 정신력 3 회복'},
                    keywords:['나태, 관통'],
                    awakening:{
                        sanityCost:35,
                        attackType:'pierce',
                        sins:['sloth'],
                        weight:7,
                        coinFaces:['head'],
                        coins:[
                            { noIndex:true, effect:'[공격 시작 전] 이번 턴, 다음 턴 동안 모든 아군에게 나태 위력 증가 1, 나태 피해량 증가 2, 보호 3 부여' },
                            { index:1, effect:'[앞면 적중시] 자신의 정신력 15 회복' }
                        ]
                    },
                    corrosion:{
                        sanityCost:35,
                        attackType:'pierce',
                        sins:['sloth'],
                        weight:7,
                        coinFaces:['tail'],
                        coins:[
                            { noIndex:true, effect:'[피아식별불가]\n무작위 대상 공격\n[공격 시작 전] 이번 턴과 다음 2턴 동안 나태 위력 증가 2, 나태 피해량 증가 2를 얻음' },
                            { index:1, effect:'[적중시] 이번 턴, 다음 턴 동안 나태 취약, 관통 취약 2 부여' }
                        ]
                    }
                }
            }
        ],
        []
    ]
});