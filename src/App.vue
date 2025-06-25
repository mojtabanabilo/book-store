<template>
  <main :class="theme" :dir="directionLang">
    <ToggleTheme v-model:toggle-theme="theme" />
    <ToggleLanguage />
    <LogOutUser />
    <RouterView />
  </main>
</template>

<script setup>
import { ref, watch } from 'vue';
import ToggleTheme from './components/ToggleTheme.vue';
import ToggleLanguage from './components/ToggleLanguage.vue';
import LogOutUser from './components/LogOutUser.vue';
import { useI18n } from 'vue-i18n';
import { getLocalStorage } from './utils/hooks/localStorage';
const { locale } = useI18n();
// data
const directionLang = ref('rtl');
const theme = ref(getLocalStorage('theme'))
// watch
watch(locale, (newVal) => newVal === "en" ? directionLang.value = "ltr" : directionLang.value = "rtl")
</script>

<style lang="scss">
@use './styles/app.scss';
</style>
