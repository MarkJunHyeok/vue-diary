<script setup lang="ts">
import useDateStore from "~/store/date";
import {ButtonType} from "~/enum/buttonType";
import HeaderTab from "~/components/diary/HeaderTab.vue";
import MyButton from "~/components/common/MyButton.vue";
import DiaryList from "~/components/diary/DiaryList.vue";
import {storeToRefs} from "pinia";


const {incrementDate, decrementDate} = useDateStore();
const {getYearAndMonth} = storeToRefs(useDateStore());

const rightButtonClick = () => {
  incrementDate();
}

const leftButtonClick = () => {
  decrementDate();
}
</script>

<template>
  <body>
  <div class="main">
    <div>
      <HeaderTab>
        <template v-slot:leftButton>
          <MyButton :type="ButtonType.DEFAULT" text="<" @click="leftButtonClick"/>
        </template>
        <template v-slot:centerText>
          {{ getYearAndMonth }}
        </template>
        <template v-slot:rightButton>
          <MyButton :type="ButtonType.DEFAULT" text=">" @click="rightButtonClick"/>
        </template>
      </HeaderTab>
    </div>

    <div>
      <DiaryList/>
    </div>
  </div>
  </body>
</template>

<style src="~/assets/css/container.css">
</style>