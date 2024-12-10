<template>
    <button @click="emitToggle">
        <img :src="themeIcon" alt="icon" />
    </button>
</template>

<script setup>
import { ref, watch } from 'vue';
import icon from "../assets/icons/icons8-dark-48.png";
import { saveLocalStorage } from '@/utils/hooks/localStorage';
// data
const themeValue = ref('theme-light');
const themeIcon = ref(icon)
// methods
const emit = defineEmits(['update:toggle-theme']);
const emitToggle = () => {
    themeValue.value = themeValue.value === 'theme-light' ? 'theme-dark' : 'theme-light';
    emit('update:toggle-theme', themeValue.value);
};
// watch
watch(themeValue, (newVal) => saveLocalStorage('theme', newVal))
</script>

<style lang="scss" scoped>
@use "../styles/toggleTheme.scss";
</style>