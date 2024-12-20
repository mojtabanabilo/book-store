<template>
    <div class="card">
        <img :src="picture" alt="product">
        <h2>جنایات و مکافات</h2>
        <div class="buy">
            <p>123 هزار تومان</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import pic from "../assets/pic.jpg";

const picture = ref(pic)
</script>

<style lang="scss" scoped>
@use "../styles/card.scss";
</style>