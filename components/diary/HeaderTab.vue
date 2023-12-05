<script setup lang="ts">
import useDateStore from "~/store/date";
import {storeToRefs} from "pinia";

const { date, month } = storeToRefs(useDateStore())
</script>

<template>
  <div>
    <header>
      <div class="head_btn_left">
        <slot name="leftButton"/>
      </div>

      <div class="head_text">
        {{ date.getFullYear() }}년 {{ month }}월
      </div>

      <div class="head_btn_right">
        <slot name="rightButton"/>
      </div>
    </header>
  </div>

  {{date.get}}
</template>

<style scoped>
header {
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
}

header, header>div {
  display: flex;
}

header .head_text {
  width: 50%;
  font-size: 25px;
  justify-content: center;
}

header .head_btn_left {
  width: 25%;
  justify-content: start;
}

header .head_btn_right {
  width: 25%;
  justify-content: end;
}

header, header>div {
  display: flex;
}
</style>