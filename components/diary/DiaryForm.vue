<script setup lang="ts">

import {ButtonType} from "~/enum/buttonType";
import TabBar from "~/components/diary/TabBar.vue";
import MyButton from "~/components/common/MyButton.vue";
import {DiaryType} from "~/enum/diaryType";
import useDiaryStore from "~/store/diary";
import {storeToRefs} from "pinia";
import Calender from "~/components/common/Calender.vue";
import Emotions from "~/components/common/Emotions.vue";

const router = useRouter();
const currentDate = ref(new Date().toISOString().split('T')[0]);
const currentType = ref(DiaryType.SO_SO)
const currentText = ref('')
const {addDiary} = useDiaryStore();
const {getNewDiaryId} = storeToRefs(useDiaryStore());

const submit = () => {
  const result = confirm("새로운 일기를 작성하시겠습니까?");

  if (result) {
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
  <section>
    <h4>오늘은 언제인가요?</h4>
    <Calender
        :current-date="currentDate"
        :set-current-date="(value) => currentDate = value"
    />
  </section>

  <section>
    <h4>오늘의 감정</h4>
    <Emotions
        :current-type="currentType"
        :set-current-type="(value) => currentType = value"
    />
  </section>

  <section>
    <h4>오늘의 일기</h4>
    <div class="input_box text_wrapper">
      <textarea placeholder="오늘은 어땠나요" v-model="currentText"></textarea>
    </div>
  </section>


  <section>
    <TabBar>
      <template v-slot:leftButton>
        <MyButton :type="ButtonType.DEFAULT" text="< 뒤로가기" @click="router.go(-1)"/>
      </template>
      <template v-slot:rightButton>
        <MyButton :type="ButtonType.DEFAULT" text="작성 완료" @click="submit"/>
      </template>
    </TabBar>
  </section>
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
</style>