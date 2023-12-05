<script setup lang="ts">

import type {PropType} from "@vue/runtime-core";
import {DiaryType} from "~/enum/diaryType";

const props = defineProps({
  type: {type: Object as PropType<DiaryType>, required: true},
  text: String,
  date: Date
});

// 이미지 경로를 계산하는 computed 속성
const emotionImageUrl = computed(() => {
  const imageName = getEmotionImageName(props.type); // type에 따른 이미지 이름을 결정하는 함수
  return `/_nuxt/assets/img/emotion/${imageName}.png`; // 이미지 경로를 동적으로 생성
});

function getEmotionImageName(type : DiaryType) {
  switch (type) {
    case DiaryType.VERY_GOOD: return 'emotion1';
    case DiaryType.GOOD: return 'emotion2';
    case DiaryType.SO_SO: return 'emotion3';
    case DiaryType.BAD: return 'emotion4';
    case DiaryType.VERY_BAD: return 'emotion5';
  }
}

const imageClass = computed(() => {
  switch (props.type) {
    case DiaryType.VERY_GOOD: return 'emotion_img_wrapper_1';
    case DiaryType.GOOD: return 'emotion_img_wrapper_2';
    case DiaryType.SO_SO: return 'emotion_img_wrapper_3';
    case DiaryType.BAD: return 'emotion_img_wrapper_4';
    case DiaryType.VERY_BAD: return 'emotion_img_wrapper_5';
  }
});
</script>

<template>
  <div class="DiaryItem">
    <div class="emotion_img_wrapper" :class="imageClass">
      <img :src="emotionImageUrl" >
    </div>
    <div class="info_wrapper">
      <div class="diary_date">
        {{props.date.getFullYear()}}-{{props.date.getMonth()}}-{{props.date.getDate()}}
      </div>
      <div class="diary_content_preview">
        {{props.text}}
      </div>
    </div>
  </div>
</template>

<style scoped>
.DiaryItem {
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
}

.emotion_img_wrapper {
  cursor: pointer;
  min-width: 120px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
}

.emotion_img_wrapper_1 {
  background-color: #64c964;
  color: #fff;
}


.emotion_img_wrapper_2 {
  background-color: #9dd772;
  color: #fff;
}

.emotion_img_wrapper_3 {
  background-color: #fdce17;
  color: #fff;
}

.emotion_img_wrapper_4 {
  background-color: #fd8446;
  color: #fff;
}

.emotion_img_wrapper_5 {
  background-color: #fd565f;
  color: #fff;
}

.info_wrapper {
  flex-grow: 1;
  margin-left: 20px;
  cursor: pointer;
}

.diary_date {
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 5px;
}

.diary_content_preview {
  font-size: 18px;
}
</style>