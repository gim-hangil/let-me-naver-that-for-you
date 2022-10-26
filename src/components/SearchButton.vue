<script setup>
function getQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("q");
}

function redirectToNaver() {
  location.href = `https://search.naver.com/search.naver?query=${getQuery()}`;
}
</script>

<template>
  <button @click="redirectToNaver">검색</button>
</template>

<style scoped></style>
