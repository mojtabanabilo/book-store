<template>
  <button @click="changeLanguage(langname)">{{ langname }}</button>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';
import { saveLocalStorage } from '@/utils/hooks/localStorage';
const { locale } = useI18n();

// computed
const langname = computed(() => locale.value === 'fa' ? 'en' : 'fa');

// method
function changeLanguage(lang) {
  saveLocalStorage('lang', lang);
  locale.value = lang;
}
</script>

<style lang="scss" scoped>
@use "../styles/toggleLanguage.scss";
</style>
