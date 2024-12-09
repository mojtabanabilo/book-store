<template>
  <main :class="theme" :dir="directionLang">
    <ToggleTheme v-model:toggle-theme="theme" />
    <ToggleLanguage />
    <RouterView />
  </main>
</template>

<script setup>
import { ref, watch } from 'vue';
import ToggleTheme from './components/ToggleTheme.vue';
import ToggleLanguage from './components/ToggleLanguage.vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

const directionLang = ref('rtl');
const theme = ref('theme-light');

watch(locale, (newVal) => newVal === "en" ? directionLang.value = "ltr" : directionLang.value = "rtl")
</script>

<style lang="scss">
@use './styles/app.scss';
</style>
