<template>
  <main :class="theme" dir="rtl">
    <ToggleTheme v-model:toggle-theme="theme" />
    <ToggleLanguage />
    <RouterView />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import ToggleTheme from './components/ToggleTheme.vue';
import ToggleLanguage from './components/ToggleLanguage.vue';

const theme = ref('theme-light');
</script>

<style lang="scss">
@use './styles/app.scss';
</style>
