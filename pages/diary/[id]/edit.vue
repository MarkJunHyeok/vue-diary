<script setup lang="ts">

import {ButtonType} from "~/enum/buttonType";
import TabBar from "~/components/diary/TabBar.vue";
import MyButton from "~/components/common/MyButton.vue";
import DiaryForm from "~/components/diary/DiaryForm.vue";
import useDiaryStore from "~/store/diary";

const router = useRouter()
const route = useRoute();
const {deleteDiary} = useDiaryStore();

const deleteDiaryButton = () => {
  const result = confirm("삭제하시겠습니까?")
  if(result) {
    const diaryId = parseInt(route.params.id.toString());

    deleteDiary(diaryId)

    router.push('/')
  }
}
</script>

<template>
  <body>
  <div class="main">
    <div>
      <TabBar>
        <template v-slot:leftButton>
          <MyButton :type="ButtonType.DEFAULT" text="< 뒤로가기" @click="router.go(-1)"/>
        </template>

        <template v-slot:centerText>
          일기 수정하기
        </template>

        <template v-slot:rightButton>
          <MyButton :type="ButtonType.NEGATIVE" text="삭제하기" @click="deleteDiaryButton"/>
        </template>
      </TabBar>
    </div>
    <div>
      <DiaryForm/>
    </div>
  </div>
  </body>
</template>

<style src="~/assets/css/container.css">

</style>