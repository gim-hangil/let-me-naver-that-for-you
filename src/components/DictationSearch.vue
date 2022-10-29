<script setup>
import { ref, computed } from "vue";

const props = defineProps({ word: String });
const text = ref("");
const entering = ref(false);
const correctInput = computed(() => props.word.startsWith(text.value));
const finishInput = computed(() => props.word === text.value);

if (!entering.value) {
  setTimeout(() => {
    entering.value = true;
  }, 300);
}
</script>

<template>
  <input
    :class="correctInput ? '' : 'wrong'"
    :value="text"
    @input="(e) => (text = e.target.value)"
    name="search"
  />
  <label v-if="finishInput" class="entering">이제 검색 버튼을 누르세요.</label>
  <label v-else for="search" :class="entering ? 'entering' : ''">
    <span class="darkgreen">{{ props.word }}</span>
    <span class="grey">를 입력하세요.</span>
  </label>
</template>

<style scoped>
input {
  box-sizing: border-box;
  transform: translateY(-3px);
  line-height: 56px;
  width: 300px;
  height: 56px;
  padding: 13px 15px;
  font-size: 18px;
  border: 2px solid var(--green);
  border-radius: 2px 0 0 2px;
}

input:focus {
  outline: none;
}

input.wrong {
  background-color: var(--light-red);
  color: var(--dark-red);
}

label {
  position: absolute;
  box-sizing: border-box;
  transform: translate(-293px, 2px);
  width: 100%;
  max-width: 296px;
  height: 52px;
  padding: 13px 10px;
  font-size: 18px;
  text-align: left;
  transition: 300ms ease;
}

label.entering {
  transform: translate(-293px, 56px);
}

.grey {
  color: grey;
}

.darkgreen {
  color: var(--dark-green);
}
</style>
