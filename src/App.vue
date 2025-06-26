<template>
  <main :class="store.theme" :dir="store.direction">
    <ToggleTheme v-model:toggle-theme="store.theme" />
    <ToggleLanguage />
    <LogOutUser />
    <RouterView />
  </main>
</template>

<script setup>
import { watch } from 'vue';
import ToggleTheme from './components/ToggleTheme.vue';
import ToggleLanguage from './components/ToggleLanguage.vue';
import LogOutUser from './components/LogOutUser.vue';
import { useI18n } from 'vue-i18n';
import { useSettingStore } from './stores/setting';
import 'vue3-toastify/dist/index.css';

const { locale } = useI18n();
const store = useSettingStore()

watch(locale, (newVal) => {
  store.lang = newVal
})
</script>

<style lang="scss">
@use './styles/app.scss';
</style>
