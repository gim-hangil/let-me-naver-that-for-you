<script setup>
import { ref } from "vue";
import { getQuery } from "@/helpers";
import SearchButton from "./components/SearchButton.vue";
import ShareButton from "./components/ShareButton.vue";

const query = ref("");
const isSharedUrl = getQuery() === null || getQuery().trim().length === 0;
</script>

<template>
  <input v-model="query" />
  <ShareButton v-if="isSharedUrl" :query="query" />
  <SearchButton v-else />
</template>

<style scoped></style>
