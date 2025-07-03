<template>
  <button @click="changeLanguage(langname)">{{ langname }}</button>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed, onMounted } from 'vue';
import { getLocalStorage, saveLocalStorage } from '@/utils/hook/localStorage';
import { useAuthStore } from '@/stores/auth';
const { locale } = useI18n();

const store = useAuthStore();

// computed
const langname = computed(() => locale.value === 'fa' ? 'en' : 'fa');

// method
function changeLanguage(lang) {
  saveLocalStorage('lang', lang);
  locale.value = lang;
}

onMounted(() => {
  if (!getLocalStorage('lang')) {
    saveLocalStorage('lang', 'fa')
  }
})
</script>

<style lang="scss" scoped>
@use "../styles/toggleLanguage.scss";
</style>
