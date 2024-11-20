<template>
    <button @click="emitToggle">theme changer</button>
</template>

<script setup>
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['update:toggle-theme']);
const themeValue = ref('theme-light');

const emitToggle = () => {
    themeValue.value = themeValue.value === 'theme-light' ? 'theme-dark' : 'theme-light';
    emit('update:toggle-theme', themeValue.value);
};
</script>