<script setup>
import { ref, computed } from "vue";
import { getQuery } from "@/helpers";
import DictationSearch from "./components/DictationSearch.vue";
import SearchBar from "./components/SearchBar.vue";
import SearchButton from "./components/SearchButton.vue";
import ShareButton from "./components/ShareButton.vue";
import WebBrowser from "./components/WebBrowser.vue";

const searchQuery = ref("");
const shareButton = ref(null);
const urlQuery = computed(() => getQuery());
const isSharedUrl = urlQuery.value !== null && urlQuery.value.trim().length > 0;

function copySharingUrl() {
  shareButton.value.copySharingUrl(searchQuery.value);
}
</script>

<template>
  <div v-if="isSharedUrl">
    <div class="container">
      <WebBrowser>
        <div class="container">
          <div class="search-bar">
            <DictationSearch :word="urlQuery" />
          </div>
          <div>
            <SearchButton />
          </div>
        </div>
      </WebBrowser>
    </div>
  </div>
  <div v-else>
    <div class="container">
      <div class="search-bar">
        <SearchBar
          :value="searchQuery"
          @input="(e) => (searchQuery = e.target.value)"
          @keyup.enter="copySharingUrl"
          autofocus
        />
      </div>
      <div>
        <ShareButton ref="shareButton" :query="searchQuery" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.container .search-bar {
  flex: 1;
  max-width: 582px;
}
</style>
