<script setup lang="ts">
import {ButtonType} from "~/enum/buttonType";
import TabBar from "~/components/diary/TabBar.vue";
import MyButton from "~/components/common/MyButton.vue";
import DiaryForm from "~/components/diary/DiaryForm.vue";

const router = useRouter();
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
          새 일기 쓰기
        </template>
      </TabBar>
    </div>
    <div>
      <DiaryForm />
    </div>
  </div>
  </body>
</template>

<style scoped>
</style>