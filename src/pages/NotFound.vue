<template>
    <div class="not-found">
        <img :src="image" alt="Not Found" />
        <h1>{{ t('roots.notFound.title') }}</h1>
        <p>{{ t('roots.notFound.description') }}</p>
        <RouterLink to="/" class="back-home">{{ t('roots.notFound.button') }}</RouterLink>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router'
import notFoundImage from '@/assets/pic/not-found.png'

const { t } = useI18n();
const image = ref(notFoundImage)
</script>

<style scoped lang="scss">
@use '../styles/notFound.scss';
</style>