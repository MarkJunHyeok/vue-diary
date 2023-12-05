<script setup lang="ts">
import useDateStore from "~/store/date";
import {ButtonType} from "~/enum/buttonType";
import HeaderTab from "~/components/diary/HeaderTab.vue";
import MyButton from "~/components/common/MyButton.vue";
import {storeToRefs} from "pinia";
import ControlMenu from "~/components/common/ControlMenu.vue";
import DiaryList from "~/components/diary/DiaryList.vue";


const {incrementDate, decrementDate} = useDateStore();

const rightButtonClick = () => {
  useDateStore().incrementDate();
}

const leftButtonClick = () => {
  useDateStore().decrementDate();
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
        <template v-slot:rightButton>
          <MyButton :type="ButtonType.DEFAULT" text=">" @click="rightButtonClick"/>
        </template>
      </HeaderTab>
    </div>

    <div>
      <DiaryList />
    </div>
  </div>
  </body>
</template>

<style scoped>
body {
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nanum Pen Script";
  min-height: 100vh;
  margin: 0;
}

.main {
  background-color: #fff;
  box-shadow: 0 7px 29px 0 rgba(100, 100, 111, .2);
}

.main {
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  width: 640px;
}
</style>