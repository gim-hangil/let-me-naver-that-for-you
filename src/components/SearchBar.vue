<script setup></script>

<template>
  <input autocomplete="off" />
</template>

<style scoped>
input {
  box-sizing: border-box;
  line-height: 56px;
  width: 100%;
  height: 56px;
  padding: 13px 15px;
  font-size: 18px;
  border: 2px solid var(--green);
  border-radius: 2px 0 0 2px;
}

input:focus {
  outline: none;
}
</style>
