<template>
    <div class="not-found">
        <img :src="image" alt="Not Found" />
        <h1>صفحه مورد نظر پیدا نشد</h1>
        <p>لینک وارد شده اشتباه است یا صفحه‌ای با این آدرس وجود ندارد.</p>
        <RouterLink to="/" class="back-home">بازگشت به خانه</RouterLink>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import notFoundImage from '@/assets/pic/not-found.png'

const image = ref(notFoundImage)
</script>

<style scoped lang="scss">
@use '../styles/notFound.scss';
</style>