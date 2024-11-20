<template>
  <main :class="theme">
    <ToggleTheme v-model:toggle-theme="theme" />
    <RouterView />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import ToggleTheme from './components/ToggleTheme.vue';

const theme = ref('theme-light');
</script>

<style lang="scss">
@use './styles/app.scss';
</style>
