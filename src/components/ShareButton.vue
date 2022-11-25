<script setup>
import { ref, watch } from "vue";
import { getSharingUrl } from "@/helpers";
import share from "@/assets/share.svg";

const props = defineProps({ query: String });
const emptyQuery = ref(false);
const hasCopied = ref(false);

watch(
  () => props.query,
  () => {
    emptyQuery.value = false;
    hasCopied.value = false;
  }
);

function copySharingUrl(q) {
  if (q.trim().length === 0) {
    emptyQuery.value = true;
  } else {
    navigator.clipboard.writeText(getSharingUrl(q));
    hasCopied.value = true;
  }
}

defineExpose({ copySharingUrl });
</script>

<template>
  <button name="button" @click="copySharingUrl(props.query)">
    <img :src="share" />
  </button>
  <label v-if="hasCopied" class="good" for="button">
    링크를 복사했습니다.
  </label>
  <label v-if="emptyQuery" class="warning" for="button">
    검색어를 입력해주세요.
  </label>
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

label {
  position: absolute;
  transform: translate(-100%, 60px);
  white-space: nowrap;
  padding: 5px 16px;
  border-radius: 5px;
}

label.good {
  background-color: var(--light-green);
  color: var(--dark-green);
}

label.warning {
  background-color: var(--light-red);
  color: var(--dark-red);
}

img {
  width: 22px;
  height: 22px;
}
</style>
