<script setup>
import { ref, watch } from "vue";
import { getSharingUrl } from "@/helpers";
import share from "@/assets/share.svg";

const props = defineProps({ query: String });
const hasCopied = ref(false);

watch(
  () => props.query,
  () => {
    hasCopied.value = false;
  }
);

function copySharingUrl(q) {
  if (q.trim().length === 0) {
    window.alert("⚠️ 검색어를 입력해주세요");
  } else {
    navigator.clipboard.writeText(getSharingUrl(q));
    hasCopied.value = true;
  }
}
</script>

<template>
  <button name="button" @click="copySharingUrl(props.query)">
    <img :src="share" />
  </button>
  <label v-if="hasCopied" for="button">링크를 복사했습니다.</label>
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
