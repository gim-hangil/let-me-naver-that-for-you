<script setup>
import { ref, computed } from "vue";
import { getQuery } from "@/helpers";
import DictationSearch from "./components/DictationSearch.vue";
import SearchButton from "./components/SearchButton.vue";
import ShareButton from "./components/ShareButton.vue";

const searchQuery = ref("");
const urlQuery = computed(() => getQuery());
const isSharedUrl =
  urlQuery.value === null || urlQuery.value.trim().length === 0;
</script>

<template>
  <div v-if="isSharedUrl">
    <input v-model="searchQuery" />
    <ShareButton :query="searchQuery" />
  </div>
  <div v-else>
    <DictationSearch :word="urlQuery" />
    <SearchButton />
  </div>
</template>

<style scoped>
div {
  text-align: center;
}
</style>
