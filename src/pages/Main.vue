<template>
    <main class="main">
        <div class="header">
            <div class="title">
                <img :src="bookIcon" alt="books" />
                <h2>{{ t('roots.main.title') }}</h2>
            </div>
            <button>{{ t('roots.main.sort') }}</button>
        </div>
        <div class="cards">
            <Card />
        </div>
        <pagination />
    </main>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import Card from "@/components/Card.vue"
import books from "@/assets/icons/icons8-book-48.png"

const bookIcon = ref(books)
</script>

<style lang="scss" scoped>
@use "../styles/main.scss";
</style>