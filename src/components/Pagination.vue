<template>
    <div class="pagination" dir="rtl">
        <button @click="prevPage" v-show="prevShowHandler">
            <img :src="prevIcon" alt="icons" />
        </button>
        <button v-for="(product, index) in paginatedProducts" :key="index">{{ product }}</button>
        <button @click="nextPage" v-show="nextShowHandler">
            <img :src="nextIcon" alt="icons" />
        </button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import nextIcon from "@/assets/icons/icons8-prev-24.png"
import prevIcon from "@/assets/icons/icons8-right-button-24.png"
const products = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
const currentPage = ref(1);
const itemsPerPage = 3;

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return products.value.slice(start, end);
});

const prevShowHandler = computed(() => {
    return currentPage.value > 1;
})

const nextShowHandler = computed(() => {
    return currentPage.value * itemsPerPage < products.value.length;
})

const nextPage = () => {
    if (currentPage.value * itemsPerPage < products.value.length) currentPage.value++;
};

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};
</script>

<style lang="scss" scoped>
@use "../styles/pagination.scss";
</style>