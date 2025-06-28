<template>
    <div class="card">
        <img :src="picture" alt="product">
        <h2>{{ props.book.title }}</h2>
        <p>{{ props.book.author }}</p>
        <div class="buy">
            <p>{{ props.book.price }} تومان</p>
            <img :src="cartIcon" alt="icon" @click="userController" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import pic from "@/assets/pic.jpg";
import cartIcon from "@/assets/icons/icons8-shopping-cart-48.png";
import router from "@/router/router";

const picture = ref(pic);

const props = defineProps({
    book: {
        type: Object,
        required: true
    }
});

const userController = () => {
    router.push('/book-list');
};

onMounted(() => {
    console.log(props.book);
});
</script>

<style lang="scss" scoped>
@use "../styles/card.scss";
</style>