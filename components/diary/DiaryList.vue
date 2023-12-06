<script setup lang="ts">
import ControlMenu from "~/components/common/ControlMenu.vue";
import MyButton from "~/components/common/MyButton.vue";
import {ButtonType} from "~/enum/buttonType";
import DiaryItem from "~/components/common/DiaryItem.vue";
import type {ISortOptions} from "~/models/diary.model";
import useDiaryStore from "~/store/diary";
import {storeToRefs} from "pinia";
import useControlMenuStore from "~/store/controlMenu";

const {initDiary} = useDiaryStore();
const {filteredDiaries} = storeToRefs(useDiaryStore());
const {leftControlMenuDefaultOption, rightControlMenuDefaultOption} = storeToRefs(useControlMenuStore());
const {setLeftControlMenuDefaultOption, setRightControlMenuDefaultOption} = useControlMenuStore();
const router = useRouter();

const controlMenuLeft: ISortOptions[] = [{
  name: '최신 순',
  value: 'latest'
}, {
  name: '오래된 순',
  value: 'oldest'
}]

const controlMenuRight: ISortOptions[] = [{
  name: '전부다',
  value: 'all'
}, {
  name: '좋은 감정만',
  value: 'good'
}, {
  name: '안좋은 감정만',
  value: 'bad'
}]


initDiary()
</script>

<template>
  <div>
    <div class="menu_wrapper">
      <div class="left_col">
        <ControlMenu
            :default-option="leftControlMenuDefaultOption"
            :set-default-option="setLeftControlMenuDefaultOption"
            :sort-options="controlMenuLeft"
        />
        <ControlMenu
            :default-option="rightControlMenuDefaultOption"
            :set-default-option="setRightControlMenuDefaultOption"
            :sort-options="controlMenuRight"
        />
      </div>

      <div class="right_col">
        <MyButton :type="ButtonType.POSITIVE" text="새 일기 쓰기" @click="router.push('/diary/new')"/>
      </div>
    </div>

    <div v-for="diary in filteredDiaries">
      <DiaryItem :diary="diary"/>
    </div>
  </div>
</template>

<style scoped>
.menu_wrapper {
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}

.right_col {
  flex-grow: 1;
}

.right_col button {
  width: 100%;
}
</style>