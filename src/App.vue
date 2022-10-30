<script setup>
import { ref, computed } from "vue";
import { getQuery } from "@/helpers";
import DictationSearch from "./components/DictationSearch.vue";
import SearchBar from "./components/SearchBar.vue";
import SearchButton from "./components/SearchButton.vue";
import ShareButton from "./components/ShareButton.vue";

const searchQuery = ref("");
const urlQuery = computed(() => getQuery());
const isSharedUrl =
  urlQuery.value === null || urlQuery.value.trim().length === 0;
</script>

<template>
  <div v-if="isSharedUrl" class="App">
    <div class="search-bar">
      <SearchBar
        :value="searchQuery"
        @input="(e) => (searchQuery = e.target.value)"
      />
    </div>
    <div>
      <ShareButton :query="searchQuery" />
    </div>
  </div>
  <div v-else class="App">
    <div class="search-bar">
      <DictationSearch :word="urlQuery" />
    </div>
    <div>
      <SearchButton />
    </div>
  </div>
</template>

<style scoped>
.App {
  display: flex;
  justify-content: center;
}

.App .search-bar {
  flex: 1;
  max-width: 582px;
}
</style>
