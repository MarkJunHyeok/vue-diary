<script setup lang="ts">
import {DiaryType} from "~/enum/diaryType";
import type {PropType} from "@vue/runtime-core";
import type {IDiary} from "~/models/diary.model";

const props = defineProps({
  diary: {type: Object as PropType<IDiary>, required: true}
});

const emotionImageUrl = computed(() => {
  const imageName = getEmotionImageName(props.diary.type); // type에 따른 이미지 이름을 결정하는 함수
  return new URL(`/assets/img/emotion/${imageName}.png`, import.meta.url).href; // 이미지 경로를 동적으로 생성
});

function getEmotionImageName(type: DiaryType) {
  switch (type) {
    case DiaryType.VERY_GOOD:
      return 'emotion1';
    case DiaryType.GOOD:
      return 'emotion2';
    case DiaryType.SO_SO:
      return 'emotion3';
    case DiaryType.BAD:
      return 'emotion4';
    case DiaryType.VERY_BAD:
      return 'emotion5';
  }
}

const imageClass = computed(() => {
  switch (props.diary.type) {
    case DiaryType.VERY_GOOD:
      return 'emotion_img_wrapper_1';
    case DiaryType.GOOD:
      return 'emotion_img_wrapper_2';
    case DiaryType.SO_SO:
      return 'emotion_img_wrapper_3';
    case DiaryType.BAD:
      return 'emotion_img_wrapper_4';
    case DiaryType.VERY_BAD:
      return 'emotion_img_wrapper_5';
  }
});
</script>

<template>
  <article>
    <section>
      <h4>오늘의 감정</h4>
      <div class="diary_img_wrapper" :class="imageClass">
        <img :src="emotionImageUrl">
        <div class="emotion_descript">{{ props.diary.type.valueOf() }}</div>
      </div>
    </section>

    <section>
      <h4>오늘의 일기</h4>
      <div class="diary_content_wrapper">
        <p>{{ props.diary.text }}</p>
      </div>
    </section>
  </article>
</template>

<style scoped>
article {
  display: block;
}

section {
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h4 {
  font-size: 22px;
  font-weight: 700;
}

.emotion_descript {
  font-size: 25px;
  color: #fff;
}

.diary_img_wrapper {
  width: 250px;
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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

.diary_content_wrapper {
  width: 100%;
  background-color: #ececec;
  border-radius: 5px;
  word-break: keep-all;
  overflow-wrap: break-word;
}

.diary_content_wrapper p {
  padding: 20px;
  text-align: left;
  font-size: 20px;
  font-family: "Yeon Sung";
  font-weight: 400;
  line-height: 2.5;
}
</style>