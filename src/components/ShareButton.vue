<script setup>
const props = defineProps({ query: String });

function getSharingUrl() {
  const protocol = window.location.protocol + "//";
  const hostname = window.location.host;
  const query = "?q=" + (props.query ? encodeURI(props.query) : "");
  return protocol + hostname + query;
}

function copySharingUrl() {
  navigator.clipboard.writeText(getSharingUrl());
}
</script>

<template>
  <button @click="copySharingUrl">공유</button>
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
</style>
