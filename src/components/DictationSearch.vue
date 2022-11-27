<script setup>
import { ref, computed } from "vue";
import SearchBar from "@/components/SearchBar.vue";

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
  <label v-if="finishInput" class="entering">이제 검색 버튼을 누르세요.</label>
  <label v-else for="search" :class="entering ? 'entering' : ''">
    <span class="darkgreen">{{ props.word }}</span>
    <span class="grey">를 입력하세요.</span>
  </label>
  <SearchBar
    v-bind="$attrs"
    :class="correctInput ? '' : 'wrong'"
    :value="text"
    @input="(e) => (text = e.target.value)"
    name="search"
  />
</template>

<style scoped>
.wrong {
  background-color: var(--light-red);
  color: var(--dark-red);
}

label {
  position: absolute;
  box-sizing: border-box;
  transform: translate(2px);
  width: 100%;
  max-width: 296px;
  height: 52px;
  padding: 13px 10px;
  font-size: 18px;
  text-align: left;
  transition: 300ms ease;
  z-index: 1;
}

label.entering {
  transform: translateY(56px);
}

.grey {
  color: grey;
}

.darkgreen {
  color: var(--dark-green);
}
</style>
