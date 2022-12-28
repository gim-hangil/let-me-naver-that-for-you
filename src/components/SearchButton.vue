<script setup>
import search from "@/assets/search.svg";
import { getQuery } from "@/helpers";

defineProps({ onclick });

function redirectToNaver() {
  location.href = `https://search.naver.com/search.naver?query=${getQuery()}`;
}

defineExpose({ redirectToNaver });
</script>

<template>
  <button @click="onclick ? onclick() : redirectToNaver()">
    <img :src="search" />
  </button>
</template>

<style scoped>
button {
  width: 56px;
  height: 56px;
  color: white;
  background-color: var(--green);
  border: none;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
}

img {
  width: 22px;
  height: 22px;
}
</style>
