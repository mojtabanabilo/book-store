<template>
    <button @click="emitToggle">
        <img :src="themeIcon" alt="icon" />
    </button>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import icon from "../assets/icons/icons8-dark-48.png";
import { getLocalStorage, saveLocalStorage } from '@/utils/hook/localStorage';
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

onMounted(() => {
    if (!getLocalStorage('theme')){
        saveLocalStorage('theme', themeValue.value)
        window.location.reload();
    }
})
</script>

<style lang="scss" scoped>
@use "../styles/toggleTheme.scss";
</style>