"use strict";

// 전역 슬롯 구성 배열 및 헬퍼 등록 함수
window.SLOT_CONFIG = [];
window.registerCharacter = function(characterConfig) {
    window.SLOT_CONFIG.push(characterConfig);
};

/* ===== 현재 시즌 상수 ===== */
const CURRENT_SEASON = 6; // 필요시 숫자 변경

/* ===== 아이콘 / 상수 맵 ===== */
const TIER_ICONS = {
    '1': './기타/등급_1성.png',
    '2': './기타/등급_2성.png',
    '3': './기타/등급_3성.png'
};

const EGO_TIER_LABELS = {
    'ZAYIN': './기타/에고_ZAYIN.png',
    'TETH':  './기타/에고_TETH.png',
    'HE':    './기타/에고_HE.png',
    'WAW':   './기타/에고_WAW.png',
    'ALEPH': './기타/에고_ALEPH.png'
};

const SKILL_TYPE_ICONS = {
    slash:  './기타/공격_참격.png',
    pierce: './기타/공격_관통.png',
    blunt:  './기타/공격_타격.png'
};

const COIN_FACE_ICONS = {
    head:    './기타/코인_앞면.png',
    tail:    './기타/코인_뒷면.png',
    unbhead: './기타/코인_앞면_파불코.png',
    unbtail: './기타/코인_뒷면_파불코.png'
};

const COIN_INDEX_ICONS = {
    1: './기타/코인_1.png',
    2: './기타/코인_2.png',
    3: './기타/코인_3.png',
    4: './기타/코인_4.png',
    5: './기타/코인_5.png',
    6: './기타/코인_6.png',
    7: './기타/코인_7.png',
    8: './기타/코인_8.png',
    9: './기타/코인_9.png',
    10: './기타/코인_10.png'
};

const SIN_ATTRIBUTES = {
    wrath:    { name: '분노', icon: './기타/자원_분노.png'},
    lust:     { name: '색욕', icon: './기타/자원_색욕.png'},
    sloth:    { name: '나태', icon: './기타/자원_나태.png'},
    gluttony: { name: '탐식', icon: './기타/자원_탐식.png'},
    gloom:    { name: '우울', icon: './기타/자원_우울.png'},
    pride:    { name: '오만', icon: './기타/자원_오만.png'},
    envy:     { name: '질투', icon: './기타/자원_질투.png'},
};

const DEFENSE_ICONS = {
    guard: {
        wrath:   './기타/수비_분노.png',
        lust:    './기타/수비_색욕.png',
        sloth:   './기타/수비_나태.png',
        gluttony:'./기타/수비_탐식.png',
        gloom:   './기타/수비_우울.png',
        pride:   './기타/수비_오만.png',
        envy:    './기타/수비_질투.png',
        colorless:'./기타/수비_무색.png'
    },
    evade: {
        wrath:   './기타/회피_분노.png',
        lust:    './기타/회피_색욕.png',
        sloth:   './기타/회피_나태.png',
        gluttony:'./기타/회피_탐식.png',
        gloom:   './기타/회피_우울.png',
        pride:   './기타/회피_오만.png',
        envy:    './기타/회피_질투.png',
        colorless:'./기타/회피_무색.png'
    },
    counter: {
        wrath:   './기타/반격_분노.png',
        lust:    './기타/반격_색욕.png',
        sloth:   './기타/반격_나태.png',
        gluttony:'./기타/반격_탐식.png',
        gloom:   './기타/반격_우울.png',
        pride:   './기타/반격_오만.png',
        envy:    './기타/반격_질투.png',
        colorless:'./기타/반격_무색.png'
    }
};