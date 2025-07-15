<template>
    <main class="main">
        <div class="header">
            <div class="title">
                <img :src="bookIcon" alt="books" />
                <h2>{{ t('roots.main.title') }}</h2>
            </div>
            <div class="btns">
                <Button v-if="hasFilter" :icon="cancelFilter" :styleProps="{ width: '40px', height: '40px' }"
                    @click="removeFilters" />
                <Button :label="t('roots.main.sort')" :styleProps="{ width: '130px', height: '50px' }"
                    @click="showFilter" />
            </div>
            <BookFilter v-if="showBookFilter" @close="showBookFilter = false" />
        </div>
        <div class="cards" v-if="store.initialState.data.length > 0">
            <Card v-for="book in store.initialState.data" :key="book.id" :book="book" />
        </div>
        <NoResults v-else />

        <pagination v-if="store.initialState.data.length > 0" />
    </main>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useI18n } from 'vue-i18n';
import { useBook } from "@/stores/book";
import Card from "@/components/Card.vue"
import books from "@/assets/icons/icons8-book-48.png"
import BookFilter from "@/components/BookFilter.vue";
import cancelFilter from '@/assets/icons/icons8-cancel-24.png'

const { t } = useI18n();
const store = useBook();
const bookIcon = ref(books)
const showBookFilter = ref(false);

const hasFilter = computed(() => store.initialState.isFiltered);

const showFilter = () => {
    showBookFilter.value = !showBookFilter.value;
}

const removeFilters = async () => {
    await store.removeFilter();
};

onMounted(async () => {
    await store.getBook(store.initialState.page)
});

</script>

<style lang="scss" scoped>
@use "../styles/main.scss";
</style>