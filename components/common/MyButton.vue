<script setup lang="ts">

import type {PropType} from "@vue/runtime-core";
import Button from "~/components/common/MyButton.vue";
import {ButtonType} from "~/enum/buttonType";

const props = defineProps({
  text: {type: String, required: true},
  type: {type: Object as PropType<ButtonType>, required: true}
});

const getButtonClass = (type: ButtonType) => {
  switch (type) {
    case ButtonType.DEFAULT:
      return 'default-button';
      break;
    case ButtonType.POSITIVE:
      return 'positive-button';
      break
    case ButtonType.NEGATIVE:
      return 'negative-button';
  }
}

</script>

<template>
  <button class="my-button" :class="getButtonClass(<ButtonType>props.type)">
    {{ text }}
  </button>
</template>

<style scoped>
.my-button {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  white-space: nowrap;
  font-family: "Nanum Pen Script";
}

.default-button {
  background-color: #ececec;
  color: #000;
}

.positive-button {
  background-color: #64c964;
  color: #fff;
}

.negative-button {
  background-color: #fd565f;
  color: #fff;
}

button {
  appearance: auto;
  text-rendering: auto;
  color: buttontext;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  box-sizing: border-box;
  background-color: buttonface;
  margin: 0em;
  padding-block: 1px;
  padding-inline: 6px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonborder;
  border-image: initial;
}
</style>