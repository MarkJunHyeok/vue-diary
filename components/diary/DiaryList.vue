<script setup lang="ts">
import ControlMenu from "~/components/common/ControlMenu.vue";
import MyButton from "~/components/common/MyButton.vue";
import {ButtonType} from "~/enum/buttonType";

const controlMenuLeft: ISortOptions[] = [{
  name: '최신 순',
  value: 'latest'
}, {
  name:  '오래된 순',
  value:  'oldest'
}]

const controlMenuRight: ISortOptions[] = [{
  name: '전부다',
  value: 'all'
}, {
  name:  '좋은 감정만',
  value:  'good'
}, {
  name:  '안좋은 감정만',
  value:  'bad'
}]

const leftControlMenuDefaultOption = ref('latest');
const rightControlMenuDefaultOption = ref('all');

</script>

<template>
 <div>
   <div class="menu_wrapper">
     <div class="left_col">
       <ControlMenu
           :default-option="leftControlMenuDefaultOption"
           :set-default-option="value => leftControlMenuDefaultOption = value"
           :sort-options="controlMenuLeft"
       />
       <ControlMenu
           :default-option="rightControlMenuDefaultOption"
           :set-default-option="value => rightControlMenuDefaultOption = value"
           :sort-options="controlMenuRight"
       />
     </div>

     <div class="right_col">
      <MyButton :type="ButtonType.POSITIVE" text="새 일기 쓰기" />
     </div>
   </div>
 </div>

  {{leftControlMenuDefaultOption}}
  {{rightControlMenuDefaultOption}}
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