"use strict";

/*
 * 원본 코드에서 Array(11).fill({...}) 로 동일한 구조가 11개 복제되던 부분을
 * 동일한 설정으로 11회 registerCharacter 호출하여 재현.
 * 실제 다른 캐릭터로 교체 시 이 파일을 수정하거나 분할하면 됨.
 */

const baseFaust = {
    characterName: '파우스트',
    defaultIcon: './기타/수감자_파우스트.png',
    personalities: [
        {
            id: 'yi_fau_012',
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
                        effect: '턴 종료 시 현재 정신력이 가장 낮은 아군 1명의 정신력을 5 + (최대 공명 수)만큼 회복시킴. (최대 10) (자신 또는 패닉, E.G.O 침식 상태인 아군 제외)<br>회복 대상이 화상 위력이나 횟수를 부여하는 기본 스킬을 가지고 있으면, 정신력 5 추가 회복<br>분노 공명 4 이상이면, 회복 대상 1명 추가',
                    }
                ],
                supportPassives: [
                    {
                        conditionImage: './기타/자원_분노.png',
                        condition: 'X3 공명',
                        name: '리우 방진',
                        effect: '- 정신력이 가장 낮은 아군 2명이 이번 턴에 정신력이 감소한 경우 턴 종료 시 정신력 5 회복<br>회복 대상이 화상 위력이나 횟수를 부여하는 기본 스킬을 가지고 있으면, 대신 5 ~ 10 회복'
                    }
                ],
                keywords: ['화상']
            }
        },
    ],
    egos: []
};

for (let i = 0; i < 11; i++) {
    // 깊은 복사 후 ID 충돌 방지를 위해 personality id에 인덱스 추가
    const clone = JSON.parse(JSON.stringify(baseFaust));
    clone.personalities[0].id = `yi_fau_012_${i}`;
    registerCharacter(clone);
}