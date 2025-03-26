<template>
    <main class="main">
        <div class="header">
            <div class="title">
                <img :src="bookIcon" alt="books" />
                <h2>{{ t('roots.main.title') }}</h2>
            </div>
            <Button :label="t('roots.main.sort')" width="130px" height="50px" />
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