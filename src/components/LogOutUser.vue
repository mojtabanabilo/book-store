<template>
    <button @click="emitToggle">
        <img :src="themeIcon" alt="icon" />
    </button>
</template>

<script setup>
import { ref } from "vue";
import icon from "../assets/icons/icons8-logout-24.png";
const themeIcon = ref(icon)
const emitToggle = () => {};
</script>

<style lang="scss" scoped>
@use "../styles/logOutUser.scss";
</style>