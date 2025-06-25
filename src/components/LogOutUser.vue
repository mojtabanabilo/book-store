<template>
    <button @click="logOutHandler" v-if="token">
        <img :src="logOutIcon" alt="icon" />
    </button>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import icon from "../assets/icons/icons8-logout-24.png";
import { getLocalStorage, removeLocalStorage } from "@/utils/hooks/localStorage";

const logOutIcon = ref(icon)
const router = useRouter();
const token = getLocalStorage("token");

const logOutHandler = () => {
    removeLocalStorage("token");
    router.push("/Login");
};
</script>

<style lang="scss" scoped>
@use "../styles/logOutUser.scss";
</style>