<template>
    <main class="main">
        <div class="header">
            <div class="title">
                <img :src="bookIcon" alt="books" />
                <h2>{{ t('roots.main.title') }}</h2>
            </div>
            <Button :label="t('roots.main.sort')" :styleProps="{width: '130px', height: '50px'}" @click="showFilter" />
            <Button :label="t('roots.main.sort')" :styleProps="{width: '130px', height: '50px'}" @click="showFilter" />
            <BookFilter v-if="showBookFilter" @close="showBookFilter = false" />
        </div>
        <div class="cards">
            <Card v-for="book in store.initialState.data" :key="book.id" :book="book" />
        </div>
        <pagination />
    </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from 'vue-i18n';
import { useBook } from "@/stores/book";
import Card from "@/components/Card.vue"
import books from "@/assets/icons/icons8-book-48.png"
import BookFilter from "@/components/BookFilter.vue";

const { t } = useI18n();
const store = useBook();
const bookIcon = ref(books)
const showBookFilter = ref(false);

const showFilter = () => {
    showBookFilter.value = !showBookFilter.value;
}

onMounted(async () => {
    await store.getBook(store.initialState.page)
});

</script>

<style lang="scss" scoped>
@use "../styles/main.scss";
</style>