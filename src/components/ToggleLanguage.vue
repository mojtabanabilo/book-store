<template>
  <button @click="changeLanguage(langname)">{{ langname }}</button>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';
import { saveLocalStorage } from '@/utils/hooks/localStorage';
const { locale } = useI18n();

// data
const language = ref(false)

// computed
const langname = computed(() => {
  return language.value ? 'fa' : 'en'
})

// method
function changeLanguage(lang) {
  saveLocalStorage('lang', lang);
  language.value = !language.value
  locale.value = lang;
}
</script>

<style lang="scss" scoped>
@use "../styles/toggleLanguage.scss";
</style>
