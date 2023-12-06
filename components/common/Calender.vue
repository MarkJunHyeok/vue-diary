<script setup lang="ts">

import type {PropType} from "@vue/runtime-core";

const props = defineProps({
  currentDate: {type: String, required: true},
  setCurrentDate: {type: Function as PropType<(currentDate: string) => void>, required: true}
});
</script>

<template>
  <div class="input_box">
    <input class="input_date" type="date" :value="props.currentDate" @change="props.setCurrentDate?.($event.target.value)"/>
  </div>
</template>

<style scoped>
.input_date {
  border: none;
  border-radius: 5px;
  background-color: #ececec;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Nanum Pen Script";
  font-size: 20px;
}
</style>