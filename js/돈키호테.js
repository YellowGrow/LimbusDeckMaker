"use strict";

/* 돈키호테의 모든 인격 + 에고 정의 */
registerCharacter({
    characterName: '돈키호테',
    defaultIcon: './기타/수감자_돈키호테.png',
    personalities: [
        {
            id: 'donquixote_001',
            name: 'LCB 수감자',
            season: 'normal',
            image: './수감자/인격/돈키호테/LCB_수감자/프로필.png',
            tier: '1',
            skills: ['lust', 'lust', 'lust', 'envy', 'envy', 'gluttony'],
            defense: { type: 'evade', sin: 'lust' },
            details: {
                fullImage: './수감자/인격/돈키호테/LCB_수감자/일러스트.png',
                skillIcons: [
                    './수감자/인격/돈키호테/LCB_수감자/1스킬.png', 
                    './수감자/인격/돈키호테/LCB_수감자/2스킬.png', 
                    './수감자/인격/돈키호테/LCB_수감자/3스킬.png', 
                    './수감자/인격/돈키호테/LCB_수감자/수비스킬.png'
                ],
                skillTypes: ['pierce', 'pierce', 'pierce'],
                passives: [
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X3 공명',
                        name: '정의의 응징',
                        effect: '합 승리 시 해당 스킬의 피해량 +10%',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X5 보유',
                        name: '응원',
                        effect: '정신력이 가장 높은 아군 1명 관통 스킬의 피해량 +10%'
                    }
                ],
                keywords: ['출혈']
            }
        },
        {
            id: 'donquixote_002',
            name: '남부 시 협회 5과 부장',
            season: 'normal',
            tier: '2',
            image: './수감자/인격/돈키호테/남부_시_협회_5과_부장/프로필.png',
            skills: ['wrath', 'wrath', 'wrath', 'envy', 'envy', 'lust'],
            defense: { type: 'evade', sin: 'wrath' },
            details: {
                fullImage: './수감자/인격/돈키호테/남부_시_협회_5과_부장/일러스트.png',
                skillIcons: [
                    './수감자/인격/돈키호테/남부_시_협회_5과_부장/1스킬.png', 
                    './수감자/인격/돈키호테/남부_시_협회_5과_부장/2스킬.png', 
                    './수감자/인격/돈키호테/남부_시_협회_5과_부장/3스킬.png', 
                    './수감자/인격/돈키호테/남부_시_협회_5과_부장/수비스킬.png'
                ],
                skillTypes: ['slash', 'slash', 'slash'],
                passives: [
                    {
                        conditionImage: './기타/자원_분노.png',
                        condition: 'X3 공',
                        name: '마음가짐',
                        effect: '다음 턴에 신속을 (분노 공명 수/3)만큼 얻음',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_분노.png',
                        condition: 'X5 보유',
                        name: '양단',
                        effect: '속도가 가장 높은 아군 1명 참격 스킬의 피해량 +10%'
                    }
                ],
                keywords: ['호흡']
            }
        },
        {
            id: 'donquixote_003',
            name: 'W사 3등급 정리 요원',
            season: 'normal',
            tier: '3',
            image: './수감자/인격/돈키호테/W사_3등급_정리_요원/프로필.png',
            skills: ['sloth', 'sloth', 'sloth', 'gloom', 'gloom', 'pride'],
            defense: { type: 'evade', sin: 'gloom' },
            details: {
                fullImage: './수감자/인격/돈키호테/W사_3등급_정리_요원/일러스트.png',
                skillIcons: [
                    './수감자/인격/돈키호테/W사_3등급_정리_요원/1스킬.png', 
                    './수감자/인격/돈키호테/W사_3등급_정리_요원/2스킬.png', 
                    './수감자/인격/돈키호테/W사_3등급_정리_요원/3스킬.png', 
                    './수감자/인격/돈키호테/W사_3등급_정리_요원/수비스킬.png'
                ],
                skillTypes: ['slash', 'pierce', 'slash'],
                passives: [
                    {
                        conditionImage: './기타/자원_우울.png',
                        condition: 'X3 공명',
                        name: '급속충전',
                        effect: '전투 시작 시 이번 턴에 충전 횟수 (우울 공명 수/3)만큼 증가',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_우울.png',
                        condition: 'X3 공명',
                        name: '꺾인 마음',
                        effect: '속도가 가장 높은 아군 1명 첫 번째 스킬의 최종 위력 +1'
                    }
                ],
                keywords: ['파열', '충전']
            }
        },
        {
            id: 'donquixote_004',
            name: 'N사 중간 망치',
            season: 1,
            tier: '2',
            image: './수감자/인격/돈키호테/N사_중간_망치/프로필.png',
            skills: ['lust', 'lust', 'lust', 'gluttony', 'gluttony', 'wrath'],
            defense: { type: 'guard', sin: 'lust' },
            details: {
                fullImage: './수감자/인격/돈키호테/N사_중간_망치/일러스트.png',
                skillIcons: [
                    './수감자/인격/돈키호테/N사_중간_망치/1스킬.png', 
                    './수감자/인격/돈키호테/N사_중간_망치/2스킬.png', 
                    './수감자/인격/돈키호테/N사_중간_망치/3스킬.png', 
                    './수감자/인격/돈키호테/N사_중간_망치/수비스킬.png'
                ],
                skillTypes: ['pierce', 'blunt', 'blunt'],
                passives: [
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X3 보유',
                        name: '두드릴지다!',
                        effect: '못이 있는 대상에게 부여하는 진동 횟수 +1. 자신에게 광신이 있으면 부여하는 못 +1',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X4 보유',
                        name: '맹목의 망치',
                        effect: '광신이 있는 아군 중 가장 정신력이 낮은 아군의 피해량 +10%'
                    }
                ],
                keywords: ['출혈', '진동']
            }
        },
        {
            id: 'donquixote_005',
            name: '남부 섕크 협회 5과 부장',
            season: 'normal',
            tier: '3',
            image: './수감자/인격/돈키호테/남부_섕크_협회_5과_부장/프로필.png',
            skills: ['lust', 'lust', 'lust', 'gloom', 'gloom', 'pride'],
            defense: { type: 'evade', sin: 'pride' },
            details: {
                fullImage: './수감자/인격/돈키호테/남부_섕크_협회_5과_부장/일러스트.png',
                skillIcons: [
                    './수감자/인격/돈키호테/남부_섕크_협회_5과_부장/1스킬.png', 
                    './수감자/인격/돈키호테/남부_섕크_협회_5과_부장/2스킬.png', 
                    './수감자/인격/돈키호테/남부_섕크_협회_5과_부장/3스킬.png', 
                    './수감자/인격/돈키호테/남부_섕크_협회_5과_부장/수비스킬.png'
                ],
                skillTypes: ['pierce', 'pierce', 'pierce'],
                passives: [
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X3 공명',
                        name: '고귀한 결투',
                        effect: '모든 아군의 속도가 모든 적보다 높으면, 자신의 피해량이 속도가 가장 느린 적과의 속도 차이에 비례하여 증가 (속도 차이 1당 6%, 최대 30%)',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X3 공명',
                        name: '결투 의뢰',
                        effect: '모든 아군의 속도가 모든 적보다 높으면, 속도가 가장 빠른 아군의 피해량이 속도가 가장 느린 적과의 속도 차이에 비례하여 증가 (속도 차이 1당 3%, 최대 15%)'
                    }
                ],
                keywords: []
            }
        },
        {
            id: 'donquixote_006',
            name: '중지 작은 아우',
            season: 3,
            tier: '3',
            image: './수감자/인격/돈키호테/중지_작은_아우/프로필.png',
            skills: ['wrath', 'wrath', 'wrath', 'envy', 'envy', 'pride'],
            defense: { type: 'counter', sin: 'envy' },
            details: {
                fullImage: './수감자/인격/돈키호테/중지_작은_아우/일러스트.png',
                skillIcons: [
                    './수감자/인격/돈키호테/중지_작은_아우/1스킬.png', 
                    './수감자/인격/돈키호테/중지_작은_아우/2스킬.png', 
                    './수감자/인격/돈키호테/중지_작은_아우/3스킬.png', 
                    './수감자/인격/돈키호테/중지_작은_아우/수비스킬.png'
                ],
                skillTypes: ['blunt', 'blunt', 'blunt', 'blunt'],
                passives: [
                    {
                        conditionImage: './기타/자원_질투.png',
                        condition: 'X4 보유',
                        name: '원한 문신',
                        effect: '- 자신을 포함한 아군이 3번 피격당할 때마다 다음 턴에 질투 피해량 증가 1을 얻음 (최대 5)\n- 턴 종료 시 해당 턴에 아군에게 스킬로 가장 많이 피해를 준 적 1명에게 앙갚음 대상 부여\n- 공격 시 메인 공격 대상이 앙갚음 대상인 경우 코인 위력 1 증가',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_질투.png',
                        condition: 'X3 보유',
                        name: '편 가르기',
                        effect: '최대 체력이 가장 낮은 아군 1명이 자신을 제외한 아군의 피격 횟수 6회마다 다음 턴에 타격 피해량 증가 1을 얻음 (최대 2)'
                    }
                ],
                keywords: ['출혈']
            }
        },
        {
            id: 'donquixote_007',
            name: '로보토미 E.G.O::초롱',
            season: 'walpurgis',
            tier: '2',
            image: './수감자/인격/돈키호테/로보토미_E.G.O_초롱/프로필.png',
            skills: ['gluttony', 'gluttony', 'gluttony', 'lust', 'lust', 'gloom'],
            defense: { type: 'guard', sin: 'gluttony' },
            details: {
                fullImage: './수감자/인격/돈키호테/로보토미_E.G.O_초롱/일러스트.png',
                skillIcons: [
                    './수감자/인격/돈키호테/로보토미_E.G.O_초롱/1스킬.png', 
                    './수감자/인격/돈키호테/로보토미_E.G.O_초롱/2스킬.png', 
                    './수감자/인격/돈키호테/로보토미_E.G.O_초롱/3스킬.png', 
                    './수감자/인격/돈키호테/로보토미_E.G.O_초롱/수비스킬.png'
                ],
                skillTypes: ['slash', 'slash', 'pierce'],
                passives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X4 보유',
                        name: '잘근잘근 냠냠',
                        effect: '자신의 스킬 슬롯에 도발치가 있을 때 합 위력 +1\n명령 페이즈에서 자신을 공격 스킬의 타겟으로 삼은 적에게 공격을 적중할 때마다 체력 6 회복 (환상체인 경우 부위로 판정)',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X5 보유',
                        name: '초롱초롱',
                        effect: '도발치가 가장 높은 슬롯을 보유한 아군 1명이 자신을 타겟으로 삼은 적에게 공격을 적중할 때마다 체력 4 회복 (도발치가 없으면 적용되지 않음)'
                    }
                ],
                keywords: ['파열']
            }
        },
        {
            id: 'donquixote_008',
            name: '검계 살수',
            season: 3,
            tier: '2',
            image: './수감자/인격/돈키호테/검계_살수/프로필.png',
            skills: ['pride', 'pride', 'pride', 'envy', 'envy', 'sloth'],
            defense: { type: 'evade', sin: 'pride' },
            details: {
                fullImage: './수감자/인격/돈키호테/검계_살수/일러스트.png',
                skillIcons: [
                    './수감자/인격/돈키호테/검계_살수/1스킬.png', 
                    './수감자/인격/돈키호테/검계_살수/2스킬.png', 
                    './수감자/인격/돈키호테/검계_살수/3스킬.png', 
                    './수감자/인격/돈키호테/검계_살수/수비스킬.png'
                ],
                skillTypes: ['pierce', 'slash', 'slash'],
                passives: [
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X2 공명',
                        name: '함께 쉬는 숨',
                        effect: '자신의 스킬, 코인 효과로 호흡 위력을 얻을 때, 호흡이 없거나 호흡 위력이 가장 낮은 아군 1명에게 호흡 1 부여 (최대 5회)',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X3 보유',
                        name: '밤산책',
                        effect: '호흡을 가장 적게 보유한 아군 1명이 자신의 스킬, 코인 효과로 호흡 위력을 얻을 때 얻는 호흡 위력 +2'
                    }
                ],
                keywords: ['호흡', '참격']
            }
        },
        {
            id: 'donquixote_009',
            name: 'T사 3등급 징수직 직원',
            season: 'normal',
            tier: '3',
            image: './수감자/인격/돈키호테/T사_3등급_징수직_직원/프로필.png',
            skills: ['gluttony', 'gluttony', 'gluttony', 'pride', 'pride', 'sloth'],
            defense: { type: 'guard', sin: 'sloth' },
            details: {
                fullImage: './수감자/인격/돈키호테/T사_3등급_징수직_직원/일러스트.png',
                skillIcons: [
                    './수감자/인격/돈키호테/T사_3등급_징수직_직원/1스킬.png', 
                    './수감자/인격/돈키호테/T사_3등급_징수직_직원/2스킬.png', 
                    './수감자/인격/돈키호테/T사_3등급_징수직_직원/3스킬.png', 
                    './수감자/인격/돈키호테/T사_3등급_징수직_직원/수비스킬.png'
                ],
                skillTypes: ['blunt', 'slash', 'blunt'],
                passives: [
                    {
                        conditionImage: './기타/자원_나태.png',
                        condition: 'X5 보유',
                        name: '황금 시간 - 받아내기',
                        effect: '- 턴 종료 시 체력이 10 ~ 20% 사이로 남았을 때, 전체 체력의 80%만큼 즉시 회복, 흐트러짐 상태 해제 (전투 당 1회)\n- 시간 대여가 해제될 경우, 다음 턴에 보유 중인 스킬 슬롯 중 하나의 도발치 8 증가'
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_나태.png',
                        condition: 'X3 보유',
                        name: 'T사식 물리왜곡장',
                        effect: '속도가 가장 느린 아군 1명이 진동이 부여된 적에게 피해를 받을 때, 받는 피해량 -10%'
                    }
                ],
                keywords: ['진동']
            }
        },
        {
            id: 'donquixote_010',
            name: '라만차랜드 실장',
            season: 5,
            tier: '3',
            image: './수감자/인격/돈키호테/라만차랜드_실장/프로필.png',
            skills: ['sloth', 'sloth', 'sloth', 'wrath', 'wrath', 'lust'],
            defense: { type: 'counter', sin: 'lust' },
            details: {
                fullImage: './수감자/인격/돈키호테/라만차랜드_실장/일러스트.png',
                skillIcons: [
                    './수감자/인격/돈키호테/라만차랜드_실장/1스킬.png', 
                    './수감자/인격/돈키호테/라만차랜드_실장/2스킬.png', 
                    './수감자/인격/돈키호테/라만차랜드_실장/3스킬.png', 
                    './수감자/인격/돈키호테/라만차랜드_실장/수비스킬.png'
                ],
                skillTypes: ['pierce', 'pierce', 'pierce', 'pierce'],
                passives: [
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X4 보유',
                        name: '혈찬',
                        effect: '이 캐릭터가 전투에 등장해있거나 등장할 리스트에 포함되어 있으면, 1턴부터 모든 캐릭터가 받은 출혈 피해만큼 혈찬이 증가함\n이 캐릭터가 전투에 등장할 때 전장에 흩뿌려진 잠재된 피가 더욱 크게 드러난다.\n혈찬을 소모할 때, <라만차랜드> 소속 중에서 자신과 같은 권속이 있으면, 자신이 먼저 혈찬을 소모함.\n아류 산초 경혈 6식 - 채찍을 사용하는 동안 출혈 피해로 체력이 1 미만이 되지 않음'
                    },
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X4 보유',
                        name: '혈갑',
                        effect: '자신의 공격 종료 시 적이 사망했다면, 대상의 최대 체력 10%만큼 혈찬 생성 (최대 100, 집중 전투인 경우 부위로 판정)\n턴 종료 시 잃은 체력 15% 당 다음 턴에 피해량 증가 1 얻음 (최대 3)\n전투 중 아군이 출혈 피해로 사망하려 할 때, 해당 턴 동안 출혈 피해로는 사망하지 않음 (전투 당 인격 1명당 1회 발동)'
                    },
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X4 보유',
                        name: '아류 산초 경혈식',
                        effect: '턴 시작 시, 경혈 15 이상이고 다음의 인격이 전투에 참가 중이거나 전투 중 사망했으면, 자신의 가장 왼쪽 슬롯의 스킬이 강화됨.\n- 라만차랜드 신부 그레고르: 스킬 1 강화\n- 라만차랜드 이발사 오티스: 스킬 2 강화\n- 자신: 스킬 3 강화\n- 라만차랜드 공주 로쟈: 수비 스킬 강화\n자신을 제외한 아군이 출혈 피해를 받거나 혈찬을 소모할 때, 자신이 경혈 2 얻음 (최대 3회)'
                    },
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X4 보유',
                        name: '혈족을 책임지게 된 자',
                        effect: '전투 동안 자신을 제외한 <라만차랜드> 소속이 사망한 경우\n- 자신의 기본 공격 스킬로 경혈을 얻을 때, 경혈 1을 추가로 얻음\n- 자신을 제외한 아군 중 <라만차랜드> 소속이 3명 이상 사망한 경우, 대신 경혈 3을 추가로 얻고 턴 시작 시, 책임감 1 얻음'
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X3 공명',
                        name: '\'가족들이여 억눌러온 허기를 채워라\'',
                        effect: '전투 시작 시 체력이 가장 적은 아군 잃은 체력 20% 당 피해량 증가 1 얻음 (최대 3)\n- 대상 아군이 <혈귀>면, 효과를 대신하여 잃은 체력 15% 당 피해량 증가 1 얻음 (최대 3)'
                    }
                ],
                keywords: ['출혈']
            }
        },
        {
            id: 'donquixote_011',
            name: '동부 섕크 협회 3과',
            season: 'normal',
            tier: '3',
            image: './수감자/인격/돈키호테/동부_섕크_협회_3과/프로필.png',
            skills: ['gluttony', 'gluttony', 'gluttony', 'wrath', 'wrath', 'pride'],
            defense: { type: 'evade', sin: 'wrath' },
            details: {
                fullImage: './수감자/인격/돈키호테/동부_섕크_협회_3과/일러스트.png',
                skillIcons: [
                    './수감자/인격/돈키호테/동부_섕크_협회_3과/1스킬.png', 
                    './수감자/인격/돈키호테/동부_섕크_협회_3과/2스킬.png', 
                    './수감자/인격/돈키호테/동부_섕크_협회_3과/3스킬.png', 
                    './수감자/인격/돈키호테/동부_섕크_협회_3과/수비스킬.png'
                ],
                skillTypes: ['pierce', 'pierce', 'pierce'],
                passives: [
                    {
                        conditionImage: './기타/자원_분노.png',
                        condition: 'X2 보유',
                        conditionImage2: './기타/자원_오만.png',
                        condition2: 'X2 보유',
                        name: '초염옥구',
                        effect: '턴 종료 시 자신의 호흡 위력 3 당, 다음 턴에 신속 1 얻음 (최대 2)\n기본 공격 스킬로 마지막에 적중한 대상(또는 부위)에게 다음 턴에 점혈 - 돈키호테 부여 (턴당 1회)\n크리티컬 피해량 +(대상의 화상 위력)% (최대 15%)\n- 대상의 점혈 - 돈키호테 1당 최댓값 5% 증가'
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X3 공명',
                        name: '경신법',
                        effect: '속도가 가장 빠른 아군 1명이 화상 또는 특수 화상을 보유한 적에게 합 승리 시, 다음 턴에 신속 1을 얻음 (턴 당 1회)\n- 대상의 화상 위력이 20 이상이면, 신속 1을 추가로 얻음'
                    }
                ],
                keywords: ['화상', '호흡']
            }
        },
        {
            id: 'donquixote_012',
            name: '로보토미 E.G.O::사랑과 증오의 이름으로',
            season: 'walpurgis',
            tier: '3',
            image: './수감자/인격/돈키호테/로보토미_E.G.O_사랑과_증오의_이름으로/프로필.png',
            skills: ['wrath', 'wrath', 'wrath', 'envy', 'envy', 'envy'],
            defense: { type: 'guard', sin: 'envy' },
            details: {
                fullImage: './수감자/인격/돈키호테/로보토미_E.G.O_사랑과_증오의_이름으로/일러스트.png',
                skillIcons: [
                    './수감자/인격/돈키호테/로보토미_E.G.O_사랑과_증오의_이름으로/1스킬.png', 
                    './수감자/인격/돈키호테/로보토미_E.G.O_사랑과_증오의_이름으로/2스킬.png', 
                    './수감자/인격/돈키호테/로보토미_E.G.O_사랑과_증오의_이름으로/3스킬.png', 
                    './수감자/인격/돈키호테/로보토미_E.G.O_사랑과_증오의_이름으로/수비스킬.png'
                ],
                skillTypes: ['blunt', 'blunt', 'blunt'],
                passives: [
                    {
                        conditionImage: './기타/자원_질투.png',
                        condition: 'X4 공명',
                        name: '사랑과 증오의 이름으로 - !E.G.O 장비 동기화율 초과주의!',
                        effect: '전투 중 누적으로 자신의 사랑/증오 횟수 10을 소모할 때마다, 사랑/증오 1 얻음\n스테이지 시작 시 히스테리가 없으면, 히스테리 효과를 얻음\n스테이지 시작 시 사랑/증오가 없으면, 사랑/증오 효과를 얻음\n턴 시작 시\n- 정신력이 0 이상이면, 마법소녀 등장! 얻음, 역변-리버스드 제거\n- 정신력이 0 미만이면, 역변-리버스드 얻음, 마법소녀 등장! 제거\n자신의 기본 공격 스킬의 정신력 소모 효과에 의해서 정신력이 -40 미만으로 내려가지 않음',
                    },
                    {
                        conditionImage: './기타/자원_질투.png',
                        condition: 'X4 공명',
                        name: '사랑의 마법소녀 / 증오의 여왕',
                        effect: '사랑/증오당, 피해량 +2% (최대 10%)\n전투 시작 시, 매지컬 아르카나 1 얻음',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_질투.png',
                        condition: 'X3 공명',
                        name: '매지컬 파워 차징 서포트',
                        effect: '기본 공격 스킬에서 충전 횟수를 획득하는 아군 중 충전 횟수가 가장 적은 아군 1명이 충전 횟수를 획득하는 기본 공격 스킬 사용 시, 충전 횟수 +2 (턴 당 최대 2회 발동)\n- 정신력이 0 이상이면, 체력을 (대상의 충전 × 2)만큼 회복 (최대 10, 턴당 최대 20 회복)\n- 정신력이 0 미만이면, 정신력을 대상의 충전만큼 회복 (최대 5, 턴당 최대 10 회복)'
                    }
                ],
                keywords: ['파열', '침잠', '충전']
            }
        }
    ],
    egos: [
        [ 
            {
                id:'donquixote_ego_001',
                name:'라 샹그레 데 산쵸',
                season: 'normal',
                image:'./수감자/에고/돈키호테/라_샹그레_데_산쵸/일러스트.png',
                slotImage:'./수감자/에고/돈키호테/라_샹그레_데_산쵸/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/돈키호테/라_샹그레_데_산쵸/일러스트.png',
                    cost:['lust','lust','pride','pride'],
                    passive:{ name:'과도한 열정', effect:'출혈이 있는 적 공격 시 체력 3 회복'},
                    keywords:['출혈'],
                    awakening:{
                        sanityCost:10,
                        attackType:'pierce',
                        sins:['lust'],
                        weight:1,
                        coinFaces:['head'],
                        coins:[
                            {
                                index:1,
                                effect:'[적중시] 출혈 8 부여\n[적중시] 피해량의 50%만큼 체력 회복'
                            }
                        ]
                    }
                }
            }
        ], 
        [
            {
                id:'donquixote_ego_004',
                name:'평생 스튜',
                season: '1',
                image:'./수감자/에고/돈키호테/평생_스튜/일러스트.png',
                slotImage:'./수감자/에고/돈키호테/평생_스튜/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/돈키호테/평생_스튜/일러스트.png',
                    cost:['lust','lust','lust','lust','lust'],
                    passive:{ name:'폭식의 도가니', effect:'턴 시작 시 색욕이 아닌 무작위 속성의 E.G.O 자원 2개를 색욕 E.G.O 자원 1개로 변경'},
                    keywords:['화상'],
                    awakening:{
                        sanityCost:20,
                        attackType:'blunt',
                        sins:['lust'],
                        weight:3,
                        coinFaces:['head'],
                        coins:[
                            { noIndex:true, effect:'[공격 시작 전] 보유한 색욕 E.G.O 자원에 비례하여 피해량이 증가함 (최대 50%)' },
                            { index:1, effect:'[적중시] 화상 횟수 3 증가' }
                        ]
                    },
                    corrosion:{
                        sanityCost:20,
                        attackType:'blunt',
                        sins:['lust'],
                        weight:3,
                        coinFaces:['head'],
                        coins:[
                            { noIndex:true, effect:'[피아식별불가]\n현재 체력이 가장 많은 대상 공격\n[공격 시작 전] 보유한 색욕 E.G.O 자원에 비례하여 피해량이 증가함 (최대 50%)\n이후 (색욕 공명 수)만큼 색욕 자원 소모. 소모한 자원 1개당 피해량 +10%' },
                            { index:1, effect:'[적중시] 화상 횟수 4 증가' }
                        ]
                    }
                }
            },
            {
                id:'donquixote_ego_005',
                name:'소망석',
                season: 'normal',
                image:'./수감자/에고/돈키호테/소망석/일러스트.png',
                slotImage:'./수감자/에고/돈키호테/소망석/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/돈키호테/소망석/일러스트.png',
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
            },
            {
                id:'donquixote_ego_006',
                name:'전기울음',
                season: 'normal',
                image:'./수감자/에고/돈키호테/소망석/일러스트.png',
                slotImage:'./수감자/에고/돈키호테/소망석/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/돈키호테/소망석/일러스트.png',
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
                id:'donquixote_ego_002',
                name:'물주머니',
                season: 'normal',
                image:'./수감자/에고/돈키호테/차원찢개/일러스트.png',
                slotImage:'./수감자/에고/돈키호테/차원찢개/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/돈키호테/차원찢개/일러스트.png',
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
                id:'donquixote_ego_003',
                name:'전봇대',
                season: '5',
                image:'./수감자/에고/돈키호테/흉탄/일러스트.png',
                slotImage:'./수감자/에고/돈키호테/흉탄/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/돈키호테/흉탄/일러스트.png',
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
            },
            {
                id:'donquixote_ego_008',
                name:'홍적',
                season: '5',
                image:'./수감자/에고/돈키호테/흉탄/일러스트.png',
                slotImage:'./수감자/에고/돈키호테/흉탄/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/돈키호테/흉탄/일러스트.png',
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
                id:'donquixote_ego_007',
                name:'갈망 - 미르칼라',
                season: '2',
                image:'./수감자/에고/돈키호테/여우비/일러스트.png',
                slotImage:'./수감자/에고/돈키호테/여우비/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/돈키호테/여우비/일러스트.png',
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
            },
            {
                id:'donquixote_ego_009',
                name:'사랑과 증오의 이름으로',
                season: '5',
                image:'./수감자/에고/돈키호테/흉탄/일러스트.png',
                slotImage:'./수감자/에고/돈키호테/흉탄/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/돈키호테/흉탄/일러스트.png',
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
        []
    ]
});