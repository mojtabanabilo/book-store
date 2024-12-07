<template>
    <button @click="emitToggle">
        <img :src="themeIcon" alt="icon" />
    </button>
</template>

<script setup>
import { ref } from 'vue';
import  icon  from "../assets/icons/icons8-dark-48.png";

const emit = defineEmits(['update:toggle-theme']);
const themeValue = ref('theme-light');
const themeIcon = ref(icon)

const emitToggle = () => {
    themeValue.value = themeValue.value === 'theme-light' ? 'theme-dark' : 'theme-light';
    emit('update:toggle-theme', themeValue.value);
};
</script>

<style lang="scss" scoped>
@use "../styles/toggleTheme.scss";
</style>