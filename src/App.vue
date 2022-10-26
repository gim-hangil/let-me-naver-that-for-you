<script setup>
import { ref } from "vue";
import SearchButton from "./components/SearchButton.vue";
import ShareButton from "./components/ShareButton.vue";

const query = ref("");
</script>

<template>
  <input v-model="query" />
  <ShareButton :query="query" />
  <SearchButton />
</template>

<style scoped></style>
