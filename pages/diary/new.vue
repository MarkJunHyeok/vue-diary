<script setup lang="ts">
import {ButtonType} from "~/enum/buttonType";
import HeaderTab from "~/components/diary/HeaderTab.vue";
import MyButton from "~/components/common/MyButton.vue";
import {DiaryType} from "~/enum/diaryType";
import useDiaryStore from "~/store/diary";
import {storeToRefs} from "pinia";

const router = useRouter();
const currentDate = ref(new Date().toISOString().split('T')[0]);
const currentType = ref(DiaryType.SO_SO)
const currentText = ref('')
const {addDiary} = useDiaryStore();
const {getNewDiaryId} = storeToRefs(useDiaryStore());

const submit = () => {
  const result = confirm("새로운 일기를 작성하시겠습니까?");

  if(result) {
    addDiary({
      id: getNewDiaryId.value,
      text: currentText.value,
      type: currentType.value,
      date: new Date(currentDate.value)
    })
    router.push('/')
  }
}

</script>

<template>
  <body>
  <div class="main">
    <div>
      <HeaderTab>
        <template v-slot:leftButton>
          <MyButton :type="ButtonType.DEFAULT" text="< 뒤로가기" @click="router.go(-1)"/>
        </template>

        <template v-slot:centerText>
          새 일기 쓰기
        </template>
      </HeaderTab>
    </div>
    <div>
      <section>
        <h4>오늘은 언제인가요?</h4>
        <div class="input_box">
          <input class="input_date" type="date" v-model="currentDate"/>
        </div>
      </section>

      <section>
        <h4>오늘의 감정</h4>
        <div class="input_box emotion_list_wrapper">
          <div @click="currentType = DiaryType.VERY_GOOD" class="emotionItem" :class="{'emotion_on_1' : currentType === DiaryType.VERY_GOOD}" ><img src="/assets/img/emotion/emotion1.png"><span>완전 좋음</span></div>
          <div @click="currentType = DiaryType.GOOD" class="emotionItem" :class="{'emotion_on_2' : currentType === DiaryType.GOOD}"><img src="/assets/img/emotion/emotion2.png"><span>좋음</span></div>
          <div @click="currentType = DiaryType.SO_SO" class="emotionItem" :class="{'emotion_on_3' : currentType === DiaryType.SO_SO}"><img src="/assets/img/emotion/emotion3.png"><span>그럭저럭</span></div>
          <div @click="currentType = DiaryType.BAD" class="emotionItem" :class="{'emotion_on_4' : currentType === DiaryType.BAD}"><img src="/assets/img/emotion/emotion4.png"><span>나쁨</span></div>
          <div @click="currentType = DiaryType.VERY_BAD" class="emotionItem" :class="{'emotion_on_5' : currentType === DiaryType.VERY_BAD}"><img src="/assets/img/emotion/emotion5.png"><span>끔찍함</span></div>
        </div>
      </section>

      <section>
        <h4>오늘의 일기</h4>
        <div class="input_box text_wrapper">
          <textarea placeholder="오늘은 어땠나요" v-model="currentText"></textarea>
        </div>
      </section>

      <section>
        <div class="control_box">
          <MyButton :type="ButtonType.DEFAULT" text="취소하기" @click="router.go(-1)"/>
          <MyButton :type="ButtonType.POSITIVE" text="작성 완료" @click="submit"/>
        </div>
      </section>
    </div>
  </div>
  </body>
</template>

<style scoped>

section {
  margin-bottom: 40px;
  display: block;
}

h4 {
  font-size: 22px;
  font-weight: 700;
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.input_date {
  border: none;
  border-radius: 5px;
  background-color: #ececec;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Nanum Pen Script";
  font-size: 20px;
}

input {
  text-rendering: auto;
  color: fieldtext;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  -webkit-rtl-ordering: logical;
  cursor: text;
  background-color: field;
  margin: 0em;
  padding: 1px 0px;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
  padding-block: 1px;
  padding-inline: 2px;
}

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

textarea {
  font-family: "Nanum Pen Script";
  font-size: 20px;
  box-sizing: border-box;
  width: 100%;
  min-height: 200px;
  resize: vertical;
  border: none;
  border-radius: 5px;
  background-color: #ececec;
  padding: 20px;
}

.control_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>