<template>
    <button @click="logOutHandler" v-if="logOutShow">
        <img :src="logOutIcon" alt="icon" />
    </button>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import icon from "../assets/icons/icons8-logout-24.png";
import { useAuthStore } from "@/stores/auth";
import { removeLocalStorage } from "@/utils/hook/localStorage";

const logOutIcon = ref(icon)
const router = useRouter();
const route = useRoute()
const auth = useAuthStore()

const logOutShow = computed(() => {
    const hiddenRoutes = ['sign-up', 'login']
    return !hiddenRoutes.includes(route.name) && auth.token
})

const logOutHandler = () => {
    auth.clearToken()
    router.push("/Login")
        .then(() => {
            removeLocalStorage('role')
            window.location.reload();
        })
        .catch((error) => {
            console.error("Error during logout:", error);
        });
};
</script>

<style lang="scss" scoped>
@use "../styles/logOutUser.scss";
</style>