<script setup lang="ts">
import type { PropType } from "@vue/runtime-core";
import { ref } from "vue";
import type {ChangeEvent} from "rollup";
import type {ISortOptions} from "~/models/diary.model";

const props = defineProps({
  sortOptions: { type: Array as PropType<ISortOptions[]>, required: true },
  defaultOption: { type: String, required: true },
  setDefaultOption: {type: Function as PropType<(defaultOption: string) => void>, required: true}
});


</script>

<template>
  <select class="ControlMenu" v-model="props.defaultOption" @change="props.setDefaultOption?.($event.target.value)">
    <option v-for="sortOption in props.sortOptions" :value="sortOption.value">
      {{ sortOption.name }}
    </option>
  </select>
</template>

<style scoped>
.ControlMenu {
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  background-color: #ececec;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Nanum Pen Script";
  font-size: 18px;
}

select:not(:-internal-list-box) {
  overflow: visible !important;
}
</style>