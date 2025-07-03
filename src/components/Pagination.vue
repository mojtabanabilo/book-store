<template>
    <div class="pagination" dir="rtl">
        <button @click="store.previousPage" v-show="prevShowHandler">
            <img :src="prevIcon" alt="icons" />
        </button>

        <button v-for="pageNumber in visiblePages" :key="pageNumber"
            :class="{ active: store.initialState.page === pageNumber }" @click="goToPage(pageNumber)">
            {{ pageNumber }}
        </button>

        <button @click="store.nextPage" v-show="nextShowHandler">
            <img :src="nextIcon" alt="icons" />
        </button>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useBook } from '@/stores/book';
import nextIcon from "@/assets/icons/icons8-prev-24.png"
import prevIcon from "@/assets/icons/icons8-right-button-24.png"

const store = useBook()

onMounted(async () => {
    await store.getBook(store.initialState.page)
})

const visiblePages = computed(() => {
    const current = store.initialState.page
    const total = store.initialState.totalPages
    const groupSize = 3

    const groupStart = Math.floor((current - 1) / groupSize) * groupSize + 1
    const groupEnd = Math.min(groupStart + groupSize - 1, total)

    const pages = []
    for (let i = groupStart; i <= groupEnd; i++) {
        pages.push(i)
    }
    return pages
})

const goToPage = async (page) => {
    if (page !== store.initialState.page) {
        await store.getBook(page)
    }
}

const prevShowHandler = computed(() => store.initialState.page > 1)
const nextShowHandler = computed(() => store.initialState.page < store.initialState.totalPages)
</script>

<style lang="scss" scoped>
@use "../styles/pagination.scss";
</style>