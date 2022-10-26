<script setup>
import share from "@/assets/share.svg";
const props = defineProps({ query: String });

function getSharingUrl() {
  const protocol = window.location.protocol + "//";
  const hostname = window.location.host;
  const query = "?q=" + encodeURI(props.query);
  return protocol + hostname + query;
}

function copySharingUrl() {
  if (props.query.trim().length === 0) {
    window.alert("⚠️ 검색어를 입력해주세요");
  } else {
    navigator.clipboard.writeText(getSharingUrl());
  }
}
</script>

<template>
  <button @click="copySharingUrl">
    <img :src="share" />
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
