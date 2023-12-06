<script setup lang="ts">
import {DiaryType} from "~/enum/diaryType";
import type {PropType} from "@vue/runtime-core";
const props = defineProps({
  currentType: { type: Object as PropType<DiaryType>, required: true},
  setCurrentType: {type: Function as PropType<(currentType: DiaryType) => void>, required: true}
});
</script>

<template>
  <div class="input_box emotion_list_wrapper">
    <div @click="setCurrentType(DiaryType.VERY_GOOD)" class="emotionItem" :class="{'emotion_on_1' : props.currentType === DiaryType.VERY_GOOD}" ><img src="/assets/img/emotion/emotion1.png"><span>완전 좋음</span></div>
    <div @click="setCurrentType(DiaryType.GOOD)" class="emotionItem" :class="{'emotion_on_2' : props.currentType === DiaryType.GOOD}"><img src="/assets/img/emotion/emotion2.png"><span>좋음</span></div>
    <div @click="setCurrentType(DiaryType.SO_SO)" class="emotionItem" :class="{'emotion_on_3' : props.currentType === DiaryType.SO_SO}"><img src="/assets/img/emotion/emotion3.png"><span>그럭저럭</span></div>
    <div @click="setCurrentType(DiaryType.BAD)" class="emotionItem" :class="{'emotion_on_4' : props.currentType === DiaryType.BAD}"><img src="/assets/img/emotion/emotion4.png"><span>나쁨</span></div>
    <div @click="setCurrentType(DiaryType.VERY_BAD)" class="emotionItem" :class="{'emotion_on_5' : props.currentType === DiaryType.VERY_BAD}"><img src="/assets/img/emotion/emotion5.png"><span>끔찍함</span></div>
  </div>
</template>

<style scoped>
.emotion_list_wrapper {
  display: grid;
  grid-template-columns: repeat(5,auto);
  grid-gap: 2%;
  gap: 2%;
}

.emotionItem {
  cursor: pointer;
  border-radius: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ececec;
}

.emotionItem img {
  width: 50%;
  margin-bottom: 10px;
}

.emotion_on_1 {
  background-color: #64c964;
  color: #fff;
}


.emotion_on_2 {
  background-color: #9dd772;
  color: #fff;
}

.emotion_on_3 {
  background-color: #fdce17;
  color: #fff;
}

.emotion_on_4 {
  background-color: #fd8446;
  color: #fff;
}

.emotion_on_5 {
  background-color: #fd565f;
  color: #fff;
}
</style>