<template>
    <div class="card">
        <img :src="picture" alt="product">
        <h2>جنایات و مکافات</h2>
        <div class="buy">
            <p>123 هزار تومان</p>
            <img :src="cartIcon" alt="icon" @click="userController"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import pic from "@/assets/pic.jpg";
import cartIcon from "@/assets/icons/icons8-shopping-cart-48.png";
import router from "@/router/router";

const userController = () => {
    router.push('/book-list')
}

const picture = ref(pic)
</script>

<style lang="scss" scoped>
@use "../styles/card.scss";
</style>