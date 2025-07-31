<template>
    <div class="card">
        <img :src="picture" alt="product">
        <h2>{{ filterTitle(props.book.title) }}</h2>
        <p>{{ props.book.author }}</p>
        <div class="buy">
            <p>{{ props.book.price }} تومان</p>
            <img :src="cartIcon" alt="icon" @click="userController" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import hooks  from "@/utils/composables/functions";
import pic from "@/assets/book.jpg";
import cartIcon from "@/assets/icons/icons8-shopping-cart-48.png";
import router from "@/router/router";

const picture = ref(pic);
const { filterTitle } = hooks();

const props = defineProps({
    book: {
        type: Object,
        required: true
    }
});

const userController = () => {
    router.push(`/book-list/${props.book.id}`);
};
</script>

<style lang="scss" scoped>
@use "../styles/card.scss";
</style>