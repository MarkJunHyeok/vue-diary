<script setup lang="ts">
import {ButtonType} from "~/enum/buttonType";
import HeaderTab from "~/components/diary/HeaderTab.vue";
import useDiaryStore from "~/store/diary";
import DiaryInfo from "~/components/common/DiaryInfo.vue";
import MyButton from "~/components/common/MyButton.vue";


const route = useRoute()
const router = useRouter()
const {getDetail} = useDiaryStore();

const diaryId = route.params.id; // 라우트 파라미터를 가져옴

const redirectToEdit = () => {
  router.push(`/diary/${diaryId}/edit`)
}

const diaryDetail = getDetail(parseInt(diaryId.toString()));
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
            {{ diaryDetail.date.getFullYear() }}-{{ diaryDetail.date.getMonth() + 1 }}-{{ diaryDetail.date.getDate() }} 기록
          </template>

          <template v-slot:rightButton>
            <MyButton :type="ButtonType.DEFAULT" text="수정하기" @click="redirectToEdit"/>
          </template>
        </HeaderTab>
      </div>

      <div>
        <DiaryInfo :diary="diaryDetail"/>
      </div>
    </div>
  </body>
</template>

<style src="~/assets/css/container.css">
</style>