<script setup>
import { magnifier } from './index';

const vMag = magnifier

</script>

<template>
  <div v-mag="{ circular: true}">
    <img src="@/assets/img/magnifier.png" alt="">
  </div>
</template>

<style scoped>
img {
  margin-top: 300px;
  margin-left: 300px;
  width: 500px;
  height: 500px;
}
</style>
