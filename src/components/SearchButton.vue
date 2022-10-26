<script setup>
import search from "@/assets/search.svg";

function getQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("q");
}

function redirectToNaver() {
  location.href = `https://search.naver.com/search.naver?query=${getQuery()}`;
}
</script>

<template>
  <button @click="redirectToNaver">
    <img :src="search" />
  </button>
</template>

<style scoped>
button {
  width: 56px;
  height: 56px;
  color: white;
  background-color: #03cf5d;
  border: none;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
}

img {
  width: 22px;
  height: 22px;
}
</style>
