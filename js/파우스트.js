"use strict";

/* 파우스트의 모든 인격 + 에고 정의 */
registerCharacter({
    characterName: '파우스트',
    defaultIcon: './기타/수감자_파우스트.png',
    personalities: [
        {
            id: 'faust_001',
            name: 'LCB 수감자',
            season: 'normal',
            image: './수감자/인격/파우스트/LCB_수감자/프로필.png',
            tier: '1',
            skills: ['pride', 'pride', 'pride', 'sloth', 'sloth', 'gluttony'],
            defense: { type: 'evade', sin: 'pride' },
            details: {
                fullImage: './수감자/인격/파우스트/LCB_수감자/일러스트.png',
                skillIcons: [
                    './수감자/인격/파우스트/LCB_수감자/1스킬.png', 
                    './수감자/인격/파우스트/LCB_수감자/2스킬.png', 
                    './수감자/인격/파우스트/LCB_수감자/3스킬.png', 
                    './수감자/인격/파우스트/LCB_수감자/수비스킬.png'
                ],
                skillTypes: ['blunt', 'blunt', 'pierce'],
                passives: [
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X2 공명',
                        name: '분석',
                        effect: '부정적인 효과가 걸려있는 대상에게 가하는 피해량 +10%',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X3 보유',
                        name: '관찰',
                        effect: '최대 체력이 가장 높은 아군 1명 공격 적중 시 25% 확률로 공격 레벨 감소 2 부여'
                    }
                ],
                keywords: []
            }
        },
        {
            id: 'faust_002',
            name: 'W사 2등급 정리 요원',
            season: 'normal',
            tier: '2',
            image: './수감자/인격/파우스트/W사_2등급_정리_요원/프로필.png',
            skills: ['envy', 'envy', 'envy', 'gloom', 'gloom', 'wrath'],
            defense: { type: 'guard', sin: 'envy' },
            details: {
                fullImage: './수감자/인격/파우스트/W사_2등급_정리_요원/일러스트.png',
                skillIcons: [
                    './수감자/인격/파우스트/W사_2등급_정리_요원/1스킬.png', 
                    './수감자/인격/파우스트/W사_2등급_정리_요원/2스킬.png', 
                    './수감자/인격/파우스트/W사_2등급_정리_요원/3스킬.png', 
                    './수감자/인격/파우스트/W사_2등급_정리_요원/수비스킬.png'
                ],
                skillTypes: ['blunt', 'blunt', 'blunt'],
                passives: [
                    {
                        conditionImage: './기타/자원_질투.png',
                        condition: 'X4 보유',
                        name: '자가충전',
                        effect: '공격 종료 시 충전 횟수 1 증가\n공격 종료 시 무작위 아군 1명의 충전 횟수 1 증가',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_질투.png',
                        condition: 'X3 공명',
                        name: '무전',
                        effect: '최대 체력이 가장 낮은 아군 1명 충전 횟수 얻는 값 +1'
                    }
                ],
                keywords: ['충전']
            }
        },
        {
            id: 'faust_003',
            name: '살아남은 로보토미 직원',
            season: 'normal',
            tier: '2',
            image: './수감자/인격/파우스트/살아남은_로보토미_직원/프로필.png',
            skills: ['lust', 'lust', 'lust', 'gloom', 'gloom', 'envy'],
            defense: { type: 'evade', sin: 'envy' },
            details: {
                fullImage: './수감자/인격/파우스트/살아남은_로보토미_직원/일러스트.png',
                skillIcons: [
                    './수감자/인격/파우스트/살아남은_로보토미_직원/1스킬.png', 
                    './수감자/인격/파우스트/살아남은_로보토미_직원/2스킬.png', 
                    './수감자/인격/파우스트/살아남은_로보토미_직원/3스킬.png', 
                    './수감자/인격/파우스트/살아남은_로보토미_직원/수비스킬.png'
                ],
                skillTypes: ['slash', 'pierce', 'slash'],
                passives: [
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X2 공명',
                        name: '각오',
                        effect: '다음 턴 시작 시 호흡 횟수가 4 이상이면 신속 2를 얻음',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X2 공명',
                        name: '지지',
                        effect: '최대 체력이 가장 낮은 아군 1명 수비 스킬의 최종 위력 +2'
                    }
                ],
                keywords: ['파열', '호흡']
            }
        },
        {
            id: 'faust_004',
            name: '쥐는 자',
            season: 1,
            tier: '3',
            image: './수감자/인격/파우스트/쥐는_자/프로필.png',
            skills: ['envy', 'envy', 'envy', 'lust', 'lust', 'pride'],
            defense: { type: 'evade', sin: 'lust' },
            details: {
                fullImage: './수감자/인격/파우스트/쥐는_자/일러스트.png',
                skillIcons: [
                    './수감자/인격/파우스트/쥐는_자/1스킬.png', 
                    './수감자/인격/파우스트/쥐는_자/2스킬.png', 
                    './수감자/인격/파우스트/쥐는_자/3스킬.png', 
                    './수감자/인격/파우스트/쥐는_자/수비스킬.png'
                ],
                skillTypes: ['pierce', 'pierce', 'blunt'],
                passives: [
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X4 공명',
                        name: '휘파람',
                        effect: '전투 시작 시 정신력이 가장 낮은 아군 2명의 정신력 15 회복. 대상이 N사 광신도면 광신 2 부여',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_색욕.png',
                        condition: 'X3 공명',
                        name: '속삭임',
                        effect: '전투 시작 시 정신력이 가장 낮은 아군 1명의 정신력 15 회복. 대상이 N사 광신도면 광신 2 부여'
                    }
                ],
                keywords: ['출혈']
            }
        },
        {
            id: 'faust_005',
            name: '남부 츠바이 협회 4과',
            season: 'normal',
            tier: '2',
            image: './수감자/인격/파우스트/남부_츠바이_협회_4과/프로필.png',
            skills: ['envy', 'envy', 'envy', 'gloom', 'gloom', 'lust'],
            defense: { type: 'guard', sin: 'gloom' },
            details: {
                fullImage: './수감자/인격/파우스트/남부_츠바이_협회_4과/일러스트.png',
                skillIcons: [
                    './수감자/인격/파우스트/남부_츠바이_협회_4과/1스킬.png', 
                    './수감자/인격/파우스트/남부_츠바이_협회_4과/2스킬.png', 
                    './수감자/인격/파우스트/남부_츠바이_협회_4과/3스킬.png', 
                    './수감자/인격/파우스트/남부_츠바이_협회_4과/수비스킬.png'
                ],
                skillTypes: ['pierce', 'slash', 'slash'],
                passives: [
                    {
                        conditionImage: './기타/자원_우울.png',
                        condition: 'X4 보유',
                        name: '지역 보호',
                        effect: '전투 시작 시 조작 패널에서 양 옆의 아군에게 방어 레벨 증가 2 부여\n대상의 체력이 50% 미만이면 추가로 2 부여',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_우울.png',
                        condition: 'X2 공명',
                        name: '보호 요청 수신',
                        effect: '전투 시작 시 체력 비율이 가장 낮은 아군 1명에게 방어 레벨 증가 2 부여\n대상의 체력이 50% 미만이면 추가로 2 부여'
                    }
                ],
                keywords: []
            }
        },
        {
            id: 'faust_006',
            name: '남부 세븐 협회 4과',
            season: 'normal',
            tier: '3',
            image: './수감자/인격/파우스트/남부_세븐_협회_4과/프로필.png',
            skills: ['envy', 'envy', 'envy', 'gloom', 'gloom', 'gluttony'],
            defense: { type: 'guard', sin: 'lust' },
            details: {
                fullImage: './수감자/인격/파우스트/남부_세븐_협회_4과/일러스트.png',
                skillIcons: [
                    './수감자/인격/파우스트/남부_세븐_협회_4과/1스킬.png', 
                    './수감자/인격/파우스트/남부_세븐_협회_4과/2스킬.png', 
                    './수감자/인격/파우스트/남부_세븐_협회_4과/3스킬.png', 
                    './수감자/인격/파우스트/남부_세븐_협회_4과/수비스킬.png'
                ],
                skillTypes: ['slash', 'slash', 'slash'],
                passives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X3 보유',
                        name: '차가 식기 전에…',
                        effect: '상대의 약점, 취약 속성(내성 1 초과)으로 공격할 때, 공격 전 대상의 파열만큼 호흡을 얻음 (턴 당 최대 20)',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X4 보유',
                        name: '세븐 협회의 티타임',
                        effect: '속도가 가장 빠른 아군 1명이 상대의 약점, 취약 속성(내성 1 초과)으로 공격 시 대상의 파열에 비례하여 피해량 증가 (파열 1 당 1.5%. 최대 15%)\n효과를 적용받은 대상이 세븐 협회 해결사면, 피해량 추가 증가 (파열 1 당 0.5%. 최대 5%)'
                    }
                ],
                keywords: ['파열', '호흡', '참격']
            }
        },
        {
            id: 'faust_007',
            name: '로보토미 E.G.O::후회',
            season: 'walpurgis',
            tier: '3',
            image: './수감자/인격/파우스트/로보토미_E.G.O_후회/프로필.png',
            skills: ['sloth', 'sloth', 'sloth', 'pride', 'pride', 'wrath'],
            defense: { type: 'counter', sin: 'gloom' },
            details: {
                fullImage: './수감자/인격/파우스트/로보토미_E.G.O_후회/일러스트.png',
                skillIcons: [
                    './수감자/인격/파우스트/로보토미_E.G.O_후회/1스킬.png', 
                    './수감자/인격/파우스트/로보토미_E.G.O_후회/2스킬.png', 
                    './수감자/인격/파우스트/로보토미_E.G.O_후회/3스킬.png', 
                    './수감자/인격/파우스트/로보토미_E.G.O_후회/수비스킬.png'
                ],
                skillTypes: ['blunt', 'blunt', 'blunt', 'blunt'],
                passives: [
                    {
                        conditionImage: './기타/자원_분노.png',
                        condition: 'X6 보유',
                        name: '떠밀린 후회',
                        effect: '- 합 진행 시 대상이 보유한 부정적인 효과 3개당 대상의 합 위력 -1 (최대 2)\n- 자신이 생존해 있을 때, 진동 폭발을 당하는 적이 방어 레벨 감소 2를 얻음 (턴 당 적 1명당 최대 3회)\n- 정신 오염: 턴 종료 시 정신력이 -25 미만일 때 다음 턴에 속박 2, 타격 위력 증가 1을 얻음',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_분노.png',
                        condition: 'X5 보유',
                        name: '억압 작업',
                        effect: '속도가 가장 느린 아군 1명이 합 진행 시 대상이 보유한 부정적인 효과가 3개 이상이면, 대상의 합 위력 -1'
                    }
                ],
                keywords: ['진동', '타격']
            }
        },
        {
            id: 'faust_008',
            name: '검계 살수',
            season: '3',
            tier: '3',
            image: './수감자/인격/파우스트/검계_살수/프로필.png',
            skills: ['sloth', 'sloth', 'sloth', 'pride', 'pride', 'gloom'],
            defense: { type: 'guard', sin: 'gloom' },
            details: {
                fullImage: './수감자/인격/파우스트/검계_살수/일러스트.png',
                skillIcons: [
                    './수감자/인격/파우스트/검계_살수/1스킬.png', 
                    './수감자/인격/파우스트/검계_살수/2스킬.png', 
                    './수감자/인격/파우스트/검계_살수/3스킬.png', 
                    './수감자/인격/파우스트/검계_살수/수비스킬.png'
                ],
                skillTypes: ['slash', 'pierce', 'slash'],
                passives: [
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X4 보유',
                        name: '매화 같이 터져나오는 피',
                        effect: '크리티컬 적중 시 홍매화 1 부여.\n대상의 홍매화가 10이면, 대신 방어 레벨 감소 1 부여 (최대 6회)',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_오만.png',
                        condition: 'X4 보유',
                        name: '미련 서린 검끝',
                        effect: '편성 순서가 가장 빠른 아군이 참격 속성 스킬로 크리티컬 적중 시 방어 레벨 감소 1 부여 (턴 당 적 1명당 최대 3)'
                    }
                ],
                keywords: ['호흡', '참격']
            }
        },
        {
            id: 'faust_009',
            name: '워더링하이츠 버틀러',
            season: '4',
            tier: '2',
            image: './수감자/인격/파우스트/워더링하이츠_버틀러/프로필.png',
            skills: ['gloom', 'gloom', 'gloom', 'lust', 'lust', 'wrath'],
            defense: { type: 'guard', sin: 'gloom' },
            details: {
                fullImage: './수감자/인격/파우스트/워더링하이츠_버틀러/일러스트.png',
                skillIcons: [
                    './수감자/인격/파우스트/워더링하이츠_버틀러/1스킬.png', 
                    './수감자/인격/파우스트/워더링하이츠_버틀러/2스킬.png', 
                    './수감자/인격/파우스트/워더링하이츠_버틀러/3스킬.png', 
                    './수감자/인격/파우스트/워더링하이츠_버틀러/수비스킬.png'
                ],
                skillTypes: ['slash', 'blunt', 'slash'],
                passives: [
                    {
                        conditionImage: './기타/자원_우울.png',
                        condition: 'X4 보유',
                        name: '버틀러식 대응',
                        effect: '합 승리 시 대상에게 침잠 1 부여 (턴 당 3회)\n대상에게 저택의 메아리가 있다면 대신 3 부여'
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_우울.png',
                        condition: 'X4 보유',
                        name: '그 날을 위한 훈련',
                        effect: '정신력이 가장 낮은 아군 1명이 침잠이 5 이상 부여된 대상에게 공격 적중 시 자신의 정신력 3 회복 (턴 당 4회)'
                    }
                ],
                keywords: ['침잠']
            }
        },
        {
            id: 'faust_010',
            name: '멀티크랙 사무소 대표',
            season: '4',
            tier: '3',
            image: './수감자/인격/파우스트/멀티크랙_사무소_대표/프로필.png',
            skills: ['lust', 'lust', 'lust', 'envy', 'envy', 'gloom'],
            defense: { type: 'guard', sin: 'envy' },
            details: {
                fullImage: './수감자/인격/파우스트/멀티크랙_사무소_대표/일러스트.png',
                skillIcons: [
                    './수감자/인격/파우스트/멀티크랙_사무소_대표/1스킬.png', 
                    './수감자/인격/파우스트/멀티크랙_사무소_대표/2스킬.png', 
                    './수감자/인격/파우스트/멀티크랙_사무소_대표/3스킬.png', 
                    './수감자/인격/파우스트/멀티크랙_사무소_대표/수비스킬.png'
                ],
                skillTypes: ['slash', 'blunt', 'blunt'],
                passives: [
                    {
                        conditionImage: './기타/자원_질투.png',
                        condition: 'X3 보유',
                        name: '전류 해체',
                        effect: '전투 중 누적으로 자신의 충전 횟수 10을 소모할 때마다, 충전 1 얻음\n충전이 2 이상이면, 피해량이 (충전 × 3)%만큼 증가 (최대 15%)\n- 대상의 체력이 50% 미만이면 피해량이 (충전 × 5)%만큼 추가로 증가 (최대 25%)\n적을 처치하면 자신과 충전 횟수가 가장 적은 아군 2명이 (2 + 충전)만큼 충전 횟수 증가 (최대 5, 충전을 소모하거나 스스로 획득하는 스킬을 보유한 아군에게 우선으로 적용됨)'
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_질투.png',
                        condition: 'X5 보유',
                        name: '해체 보조 전류',
                        effect: '충전 횟수가 가장 적은 아군 1명이 적 처치 시 충전 횟수 3 증가 (턴 당 1회, 충전을 소모하거나 스스로 획득하는 스킬을 보유한 아군에게 우선으로 적용됨)'
                    }
                ],
                keywords: ['충전', '질투']
            }
        },
        {
            id: 'faust_011',
            name: 'LCE E.G.O::홍염살',
            season: 5,
            tier: '3',
            image: './수감자/인격/파우스트/LCE_E.G.O_홍염살/프로필.png',
            skills: ['sloth', 'sloth', 'sloth', 'pride', 'pride', 'wrath'],
            defense: { type: 'evade', sin: 'wrath' },
            details: {
                fullImage: './수감자/인격/파우스트/LCE_E.G.O_홍염살/일러스트.png',
                skillIcons: [
                    './수감자/인격/파우스트/LCE_E.G.O_홍염살/1스킬.png', 
                    './수감자/인격/파우스트/LCE_E.G.O_홍염살/2스킬.png', 
                    './수감자/인격/파우스트/LCE_E.G.O_홍염살/3스킬.png', 
                    './수감자/인격/파우스트/LCE_E.G.O_홍염살/수비스킬.png'
                ],
                skillTypes: ['blunt', 'blunt', 'blunt'],
                passives: [
                    {
                        conditionImage: './기타/자원_분노.png',
                        condition: 'X3 보유',
                        name: '내화',
                        effect: '화상 피해로 흐트러짐 상태가 되거나 체력이 1 미만으로 감소하지 않음'
                    },
                    {
                        conditionImage: './기타/자원_분노.png',
                        condition: 'X3 보유',
                        name: '불나방',
                        effect: '전투 시작 시 자신의 잃은 체력이 80% 이상이고 화상이 30 미만이면, 화상을 30까지 얻음 (스테이지 당 1회)\n턴 종료 시 자신의 화상 6 당, 다음 턴에 공격 레벨 증가 1 얻음 (최대 5)\n\n사망 시 아래의 효과 발동\n- 모든 적에게 화상 2 부여. 자신의 화상을 나누어 부여 (1명당 최대 3)\n- 가장 부족한 속성의 E.G.O 자원 2종 2개씩 획득\n\n홍염살 최대 감응 【열화침식】 스킬의 효과로 사망하였으면, 효과가 강화됨\n- 모든 적에게 화상 3 부여. 자신의 화상을 나누어 부여 (1명당 최대 5)\n- 가장 부족한 속성의 E.G.O 자원 2종 2개씩 획득\n- 자신의 화상이 30 이상이었으면, 대기 해제되는 인원 1명에게 공격 레벨 증가 3 부여'
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_분노.png',
                        condition: 'X3 공명',
                        name: '잔열',
                        effect: '정신력이 가장 낮은 아군 1명이 기본 스킬의 적중시 효과로 화상을 부여할 때 화상 2 추가 부여 (최대 3회 발동)\n- 피격 대상의 화상이 30 이상이면, 대신 화상 횟수 1 증가 (최대 3회 발동)'
                    }
                ],
                keywords: ['화상']
            }
        },
        {
            id: 'faust_012',
            name: '흑수 - 묘 필두 ',
            season: '6',
            tier: '3',
            image: './수감자/인격/파우스트/흑수_묘_필두/프로필.png',
            skills: ['sloth', 'sloth', 'sloth', 'pride', 'pride', 'gluttony'],
            defense: { type: 'counter', sin: 'gluttony' },
            details: {
                fullImage: './수감자/인격/파우스트/흑수_묘_필두/일러스트.png',
                skillIcons: [
                    './수감자/인격/파우스트/흑수_묘_필두/1스킬.png', 
                    './수감자/인격/파우스트/흑수_묘_필두/2스킬.png', 
                    './수감자/인격/파우스트/흑수_묘_필두/3스킬.png', 
                    './수감자/인격/파우스트/흑수_묘_필두/수비스킬.png'
                ],
                skillTypes: ['slash', 'slash', 'slash', 'slash'],
                passives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X5 보유',
                        name: '천구성',
                        effect: '주살【파】의 수치가 0이 되어 소멸 시, 붕괴 표식이 부여됨',
                    },
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X5 보유',
                        name: '흑수화 [묘] / 묘 필두',
                        effect: '자신의 속도가 대상보다 빠르면, 속도 차이 1 당 가하는 피해량 +2% (최대 10%)\n\n전투 중 아군이 주살 효과를 발동시킬 때마다, 천구성도 1 얻음 (턴 당 최대 5회)\n- 자신이 발동시켰으면, 천구성도 추가로 1 얻음\n원호 방어 효과 발동 시, 천구성도 5 얻음'
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_탐식.png',
                        condition: 'X4 공명',
                        name: '쾌도',
                        effect: '속도가 가장 빠른 아군이 파열 피해를 입히면, 다음 턴에 공격 레벨 증가 1 얻음 (턴 당 최대 3회)'
                    }
                ],
                keywords: ['파열', '호흡']
            }
        }
    ],
    egos: [
        [ 
            {
                id:'faust_ego_001',
                name:'표상 방출기',
                season: 'normal',
                image:'./수감자/에고/파우스트/표상_방출기/일러스트.png',
                slotImage:'./수감자/에고/파우스트/표상_방출기/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/파우스트/표상_방출기/일러스트.png',
                    cost:['gluttony','gluttony','pride','pride','pride','pride'],
                    passive:{ name:'권태', effect:'자신의 공격 중 적이 흐트러짐 상태가 되었으면, 정신력이 가장 낮은 아군 1명의 다음 턴 정신력 회복 효율 +2 (턴당 최대 3회)'},
                    keywords:[],
                    awakening:{
                        sanityCost:20,
                        attackType:'blunt',
                        sins:['pride'],
                        weight:3,
                        coinFaces:['head'],
                        coins:[
                            {
                                index:1,
                                effect:'[공격 종료시] 정신력이 가장 낮은 아군 4명의 정신력 12 회복'
                            }
                        ]
                    }
                }
            }
        ], 
        [
            {
                id:'faust_ego_002',
                name:'저주못',
                season: 'normal',
                image:'./수감자/에고/파우스트/저주못/일러스트.png',
                slotImage:'./수감자/에고/파우스트/저주못/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/파우스트/저주못/일러스트.png',
                    cost:['envy','envy','envy','envy','envy','envy'],
                    passive:{ name:'아파!', effect:'자신에게 부여된 부정적 효과 1개당 피해량 +10% (최대 50%)'},
                    keywords:['출혈, 관통, 질투'],
                    awakening:{
                        sanityCost:20,
                        attackType:'pierce',
                        sins:['envy'],
                        weight:1,
                        coinFaces:['head'],
                        coins:[
                            { index:1, effect:'[적중시] 관통 취약 3 부여\n[적중시] 질투 취약 1 부여\n[앞면 적중시] 저주 3 부여\n[앞면 적중시] 못 3 부여\n[적중시] 대상에게 저주가 있으면 피해량 +50%' }
                        ]
                    },
                    corrosion:{
                        sanityCost:20,
                        attackType:'pierce',
                        sins:['envy'],
                        weight:1,
                        coinFaces:['tail'],
                        coins:[
                            { noIndex:true, effect:'[피아식별불가]\n무작위 대상 공격' },
                            { index:1, effect:'[적중시] 관통 취약 1 부여\n[적중시] 질투 취약 3 부여\n[적중시] 저주 3 부여\n[적중시] 못 3 부여\n[적중시] 대상에게 저주가 있으면 피해량 +50%' }
                        ]
                    }
                }
            },
            {
                id:'faust_ego_005',
                name:'9장 2절',
                season: '3',
                image:'./수감자/에고/파우스트/9장_2절/일러스트.png',
                slotImage:'./수감자/에고/파우스트/9장_2절/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/파우스트/9장_2절/일러스트.png',
                    cost:['lust','gluttony','gluttony','gluttony','pride'],
                    passive:{ name:'불꽃의 검', effect:'색욕 속성 스킬로 앞면 적중 시 대상에게 화상 1 부여 (턴 당 최대 6회)'},
                    keywords:['화상'],
                    awakening:{
                        sanityCost:20,
                        attackType:'slash',
                        sins:['lust'],
                        weight:1,
                        coinFaces:['head'],
                        coins:[
                            { noIndex:true, effect:'[공격 시작 전] (최대 색욕 완전 공명 수)가 4 이상이면 공격 가중치 +1\n(최대 색욕 완전 공명 수)가 6 이상이면, 추가로 공격 가중치 +1' },
                            { index:1, effect:'[적중시] 화상 3 부여\n[적중시] 대상의 화상 2를 방어 레벨 감소 1로 전환 (최대 10)' }
                        ]
                    },
                    corrosion:{
                        sanityCost:20,
                        attackType:'slash',
                        sins:['lust'],
                        weight:1,
                        coinFaces:['tail'],
                        coins:[
                            { noIndex:true, effect:'[피아식별불가]\n무작위 대상 공격\n[공격 시작 전] (최대 색욕 완전 공명 수)가 4 이상이면 공격 가중치 +1\n(최대 색욕 완전 공명 수)가 6 이상이면, 추가로 공격 가중치 +1' },
                            { index:1, effect:'[뒷면 적중시] 다음 턴에 속박 2 부여\n[적중시] 화상 4 부여\n[적중시] 대상의 화상 2를 방어 레벨 감소 1로 전환 (최대 10)' }
                        ]
                    }
                }
            },
            {
                id:'faust_ego_007',
                name:'올가미',
                season: '5',
                image:'./수감자/에고/파우스트/올가미/일러스트.png',
                slotImage:'./수감자/에고/파우스트/올가미/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/파우스트/올가미/일러스트.png',
                    cost:['lust','gluttony','gluttony','gluttony','envy','envy'],
                    passive:{ name:'퍼져나가는 올가미', effect:'공격 종료 시 대상이 흐트러지거나 사망한 경우, 무작위 적 2명의 파열 횟수 1 증가 (턴 당 1회, 중첩 불가, 집중 전투인 경우 부위로 판정)'},
                    keywords:['파열', '탐식'],
                    awakening:{
                        sanityCost:20,
                        attackType:'slash',
                        sins:['gluttony'],
                        weight:1,
                        coinFaces:['head','head','head'],
                        coins:[
                            { noIndex:true, effect:'자신과 대상의 속도의 합이 6 이상이면, 코인 위력 +1\n대상의 파열 7 당 코인 위력 +1 (최대 2)\n[공격 시작 전] 다음 턴에 신속 2 얻음\n[공격 시작 전] 최대 공명이 4 이상이면, 공격 가중치 +1\n- 해당 공명이 탐식 공명이면, 공격 가중치 +1' },
                            { index:1, effect:'[적중시] 파열 횟수 2 증가' },
                            { index:2, effect:'[적중시] 파열 2 부여' },
                            { index:3, effect:'[적중시] 파열 2 부여' }
                        ]
                    },
                    corrosion:{
                        sanityCost:20,
                        attackType:'slash',
                        sins:['gluttony'],
                        weight:3,
                        coinFaces:['head','head','head'],
                        coins:[
                            { noIndex:true, effect:'[피아식별불가]\n무작위 대상 공격\n자신과 대상의 속도의 합이 6 이상이면, 코인 위력 +1\n대상의 파열 7 당 코인 위력 +1 (최대 2)\n[공격 시작 전] 다음 턴에 신속 2 얻음\n[공격 종료시] 대상이 흐트러지거나 사망한 경우, 다음 턴에 탐식 위력 증가 1 얻음' },
                            { index:1, effect:'[적중시] 파열 횟수 2 증가' },
                            { index:2, effect:'[적중시] 파열 4 부여' },
                            { index:3, effect:'[적중시] 올가미 2 부여\n[적중시] 대상의 파열 1 당 피해량 +2% (최대 60%' }
                        ]
                    }
                }
            }
        ],
        [
            {
                id:'faust_ego_003',
                name:'물주머니',
                season: '1',
                image:'./수감자/에고/파우스트/물주머니/일러스트.png',
                slotImage:'./수감자/에고/파우스트/물주머니/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/파우스트/물주머니/일러스트.png',
                    cost:['lust','lust','gloom','gloom','gloom','gloom','envy','envy','envy'],
                    passive:{ name:'감싸는 액체', effect:'턴 시작 시 자신을 포함하여 체력이 가장 낮은 아군 1명에게 보호 2 부여'},
                    keywords:[],
                    awakening:{
                        sanityCost:20,
                        attackType:'blunt',
                        sins:['gloom'],
                        weight:1,
                        coinFaces:['head'],
                        coins:[
                            { index:5, effect:'[공격 종료시] 아군 전체 정신력 15 회복\n[공격 종료시] 아군 전체 최대 체력의 15%만큼 체력 회복\n[앞면 공격 종료 시] 아군 전체 정신력 10 회복' }
                        ]
                    },
                    corrosion:{
                        sanityCost:20,
                        attackType:'blunt',
                        sins:['gloom'],
                        weight:5,
                        coinFaces:['tail'],
                        coins:[
                            { noIndex:true, effect:'[피아식별불가]\n무작위 대상 공격' },
                            { index:1, effect:'[적중시] 대상에게 정신력 20 피해\n[뒷면 적중시] 대상에게 정신력 10 피해\n[적중시] 다음 턴에 공격 위력 감소 2 부여' }
                        ]
                    }
                }
            },
            {
                id:'faust_ego_004',
                name:'전봇대',
                season: 'normal',
                image:'./수감자/에고/파우스트/전봇대/일러스트.png',
                slotImage:'./수감자/에고/파우스트/전봇대/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/파우스트/전봇대/일러스트.png',
                    cost:['wrath','lust','lust','lust','envy','envy'],
                    passive:{ name:'적응형 방출', effect:'자신에게 충전이 있을 때 충전 횟수 1당 피해량 +2%\n스킬의 효과로 소모하는 충전 횟수의 값 -2'},
                    keywords:['충전', '질투'],
                    awakening:{
                        sanityCost:20,
                        attackType:'pierce',
                        sins:['envy'],
                        weight:1,
                        coinFaces:['head'],
                        coins:[
                            { index:1, effect:'[적중시] 마비 3 부여\n[공격 종료시] 자신의 충전 횟수 7 증가\n[앞면 공격 종료 시] 다음 턴에 무작위 아군 2명에게 질투 위력 증가 1, 신속 1 부여, 자신의 충전 횟수 3 증가' }
                        ]
                    },
                    corrosion:{
                        sanityCost:20,
                        attackType:'pierce',
                        sins:['envy'],
                        weight:1,
                        coinFaces:['head'],
                        coins:[
                            { noIndex:true, effect:'[피아식별불가]\n무작위 대상 공격' },
                            { index:1, effect:'[적중시] 마비 5 부여\n[공격 종료시] 자신의 충전 횟수 10 증가\n[뒷면 공격 종료 시] 다음 턴에 무작위 캐릭터 2명에게 마비 2, 속박 2 부여, 충전 횟수 3 증가' }
                        ]
                    }
                }
            },
            {
                id:'faust_ego_008',
                name:'흉통',
                season: '5',
                image:'./수감자/에고/파우스트/흉통/일러스트.png',
                slotImage:'./수감자/에고/파우스트/흉통/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/파우스트/흉통/일러스트.png',
                    cost:['sloth','gloom','pride','pride','pride','pride','pride'],
                    passive:{ name:'숨', effect:'이 E.G.O 스킬을 사용한 다음 턴 시작 시, 네뷸라이저 α 1 얻음 (턴 당 1회)\n- 이 수치는 이번 전투 동안 누적됨\n전투 시작 시 네뷸라이저 α의 효과로 아군에게 호흡 횟수를 10 부여할 때마다 네뷸라이저 α 1 얻음\n턴 종료 시 아군 (최대 공명 수)명의 체력을 현재 체력 비율이 가장 낮은 순으로 최대 체력의 (네뷸라이저 α 수치)%만큼 회복 (최대 6명)\n- 회복 대상의 호흡 위력이 20 이상이면, 회복 1회 추가 발동'},
                    keywords:['호흡', '오만'],
                    awakening:{
                        sanityCost:20,
                        attackType:'pierce',
                        sins:['pride'],
                        weight:3,
                        coinFaces:['head','head'],
                        coins:[
                            { noIndex:true, effect:'[공격 시작 전] 모든 아군에게 호흡 위력을 (최대 공명 수)만큼 부여 (최대 부여량 : 6)\n- 오만 공명 3 이상이면, 부여 대상의 호흡 횟수 1 증가, 부여 대상에게 다음 턴에 가쁜 날숨 1 부여' },
                            { index:1, effect:'[적중시] 자신의 호흡 횟수 1 증가' },
                            { index:2, effect:'크리티컬 피해량 +(호흡 위력과 호흡 횟수의 합)% (최대 40%)' }
                        ]
                    },
                    corrosion:{
                        sanityCost:20,
                        attackType:'pierce',
                        sins:['pride'],
                        weight:3,
                        coinFaces:['tail','tail'],
                        coins:[
                            { noIndex:true, effect:'[피아식별불가]\n무작위 대상 공격\n[공격 시작 전] 자신의 호흡 위력이 20 미만이면, 호흡 위력을 20까지 얻고 최대 체력의 (얻은 호흡 위력 × 2)%만큼 체력 소모\n- 이 효과로 흐트러지거나 사망하지 않음\n[공격 시작 전] 모든 아군에게 호흡 위력을 (최대 공명 수)만큼 부여 (최대 부여량 : 6)\n- 오만 공명 3 이상이면, 부여 대상의 호흡 횟수 1 증가, 부여 대상에게 다음 턴에 가쁜 날숨 1, 오만 피해량 증가 1 부여' },
                            { index:1, effect:'[적중시] 자신의 호흡 횟수 1 증가' },
                            { index:2, effect:'크리티컬 피해량 +(호흡 위력과 호흡 횟수의 합)% (최대 40%)' }
                        ]
                    }
                }
            },
            {
                id:'faust_ego_009',
                name:'명령: 용해',
                season: 'collabo',
                image:'./수감자/에고/파우스트/명령_용해/일러스트.png',
                slotImage:'./수감자/에고/파우스트/명령_용해/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/파우스트/명령_용해/일러스트.png',
                    cost:['sloth','gluttony','gluttony','gluttony','gluttony','gluttony','pride','pride'],
                    passive:{ name:'의사', effect:'턴 시작 시, 자신과 현재 체력 비율이 가장 낮은 아군의 체력을 자신의 최대 체력의 (경화막 수치)%만큼 회복\n- 자신의 체력이 최대일 경우, 대신 현재 체력 비율이 가장 낮은 다른 아군 2명의 체력 회복\n- 회복받는 대상의 체력이 25% 이하거나 흐트러짐 상태면, 이 효과로 회복되는 수치가 1.5배로 증가\n\n턴 종료 시 이번 전투에서 파우스트가 가장 마지막에 사용한 E.G.O 스킬이 명령 : 용해일 경우 경화막 효과의 턴 종료 시 감소량이 1로 변경\n- 이 효과는 E.G.O 스킬을 사용한 턴부터 즉시 적용'},
                    keywords:['화상', '파열'],
                    awakening:{
                        sanityCost:20,
                        attackType:'pierce',
                        sins:['gluttony'],
                        weight:3,
                        coinFaces:['head'],
                        coins:[
                            { noIndex:true, effect:'메인 타겟에게 화상 또는 파열이 있으면, 최종 위력 +3\n[공격 시작 전] 메인 타겟의 파열 위력과 파열 횟수의 합 1당 피해량 +1% (최대 25%)\n경화막이 있으면, 이 효과와 최댓값이 2배로 증가\n[공격 종료시] 경화막 10 얻음\n[공격 종료시] 자신과 현재 체력 비율이 낮은 아군 체력을 자신의 최대 체력의 30%만큼 회복\n- 자신이 최대 체력일 경우, 대신 아군 2명의 체력 회복\n[공격 종료시] 자신을 포함하여 현재 정신력이 가장 낮은 아군 2명의 정신력 15 회복' },
                            { index:1, effect:'[적중시] 파열 3 부여\n[적중시] 화상 3 부여' }
                        ]
                    },
                    corrosion:{
                        sanityCost:25,
                        attackType:'pierce',
                        sins:['gluttony'],
                        weight:3,
                        coinFaces:['head','head','unbhead','unbhead'],
                        coins:[
                            { noIndex:true, effect:'[피아식별불가]\n무작위 대상 공격\n메인 타겟에게 파열 위력과 파열 횟수의 합 6당, 기본 위력 +1 (최대 2)\n[공격 시작 전] 최대 공명 수 3당 공격 가중치 +1 (최대 2)\n[공격 종료시] 경화막 10 얻음\n[공격 종료시] 이 스킬 피해로 흐트러지거나 사망한 대상이 없으면, 최대 체력의 20%만큼 체력 피해를 입고 그 (수치 × 2)만큼 보호막 얻음\n- 이 효과로 사망하지 않으며, 이후 턴 종료 시 경화막 수치가 최대가 되고 다음 턴에 피해량 증가 2 얻음 (턴당 1회)' },
                            { index:1, effect:'[적중시] 파열 1 부여' },
                            { index:2, effect:'[적중시] 파열 1 부여' },
                            { index:3, effect:'파괴 불가 코인\n[적중시] 파열 횟수 2 증가' },
                            { index:4, effect:'파괴 불가 코인\n[코인 시작 시] 이 스킬로 흐트러지거나 사망한 대상이 없으면, 피해량 +30%\n[적중시] 화상 3 부여' }
                        ]
                    }
                }
            }
        ],
        [
            {
                id:'faust_ego_006',
                name:'영속',
                season: '4',
                image:'./수감자/에고/파우스트/영속/일러스트.png',
                slotImage:'./수감자/에고/파우스트/영속/프로필.png',
                egoDetails:{
                    fullImage:'./수감자/에고/파우스트/영속/일러스트.png',
                    cost:['lust','lust','sloth','sloth','sloth','sloth','gloom','gloom','pride','pride','pride'],
                    passive:{ name:'달리는 시간', effect:'자신이 적에게 스킬을 사용하여 진동 폭발 부여 시, 신속 1 얻음 (턴 당 최대 4회. E.G.O 스킬 포함)'},
                    keywords:['진동'],
                    awakening:{
                        sanityCost:10,
                        attackType:'blunt',
                        sins:['sloth'],
                        weight:1,
                        coinFaces:['head','head','head','head'],
                        coins:[
                            { noIndex:true, effect:'대상의 속도가 자신보다 느릴 때, 피해량 +(대상과의 속도 차이 × 5)% (최대 50%)\n[공격 시작 전] 최대 공명 수가 3 이상일 경우, (최대 공명 수 × 2)만큼 진동 위력 부여 (최대 10)\n- 최대 공명이 나태 완전 공명일 경우, 부여한 진동 위력 값만큼 진동 횟수 부여 (최대 10)\n[공격 종료 시] 3턴 동안 턴 종료 시 정신력 10 감소' },
                            { index:1, effect:'[적중시] 진동 10, 진동 횟수 10 부여\n[적중시] 진동 - 영속으로 진폭 얽힘\n[적중시] 진동 폭발. 대상의 진동 횟수 1 감소' },
                            { index:2, effect:'[적중시] 진동 폭발. 대상의 진동 횟수 1 감소' },
                            { index:3, effect:'[적중시] 진동 폭발. 대상의 진동 횟수 1 감소' },
                            { index:4, effect:'[적중시] 진동 폭발. 대상의 진동 횟수 1 감소\n[적중시] 다음 턴에 대상의 속도 최댓값 절반으로 감소' }
                        ]
                    },
                    corrosion:{
                        sanityCost:40,
                        attackType:'blunt',
                        sins:['sloth'],
                        weight:3,
                        coinFaces:['tail'],
                        coins:[
                            { noIndex:true, effect:'메인 공격 대상의 속도가 자신보다 느릴 때, 피해량 +(대상과의 속도 차이 × 2.5)% (최대 20%)\n[공격 시작 전] 최대 공명 수가 3 이상일 경우, (최대 공명 수)만큼 진동 위력 부여 (최대 5)\n- 최대 공명이 나태 완전 공명일 경우, 부여한 진동 위력 값만큼 진동 횟수 부여 (최대 5)' },
                            { index:1, effect:'[적중시] 진동 5, 진동 횟수 5 부여\n[적중시] 진동 - 영속으로 진폭 얽힘\n[적중시] 진동 폭발. 대상의 진동 횟수 1 감소\n[적중시] 진동 폭발. 대상의 진동 횟수 1 감소\n[적중시] 진동 폭발. 대상의 진동 횟수 1 감소\n[적중시] 다음 턴에 대상의 속도 최댓값 절반으로 감소' }
                        ]
                    }
                }
            }
        ],
        []
    ]
});