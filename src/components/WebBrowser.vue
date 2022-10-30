<script setup>
import { ref, watch } from "vue";

const addr = ref("");
const correctAddr = ref(true);

watch(addr, (newAddr) => {
  correctAddr.value = "naver.com".startsWith(newAddr);
});
</script>

<template>
  <div class="browser">
    <div :class="['addr-bar', correctAddr ? '' : 'wrong']">
      <input
        type="text"
        v-model="addr"
        placeholder="naver.com 을 입력하세요"
        :disabled="addr === 'naver.com'"
      />
    </div>
    <div class="window">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.browser {
  width: 100%;
  max-width: 700px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 7px #2228;
}

.addr-bar {
  text-align: center;
  padding: 10px 20px;
  background-color: #eee;
  border-bottom: 1px solid grey;
}

.addr-bar input {
  box-sizing: border-box;
  height: 30px;
  line-height: 30px;
  width: 100%;
  padding: 0 15px;
  border-radius: 15px;
  border: none;
  background-color: lightgrey;
}

.wrong input {
  background-color: var(--dark-red);
  color: white;
}

.window {
  min-height: 50px;
  padding: 20px 20px 52px 20px;
}
</style>
