<template>
    <div class="bg" v-if="show">
        <div class="modal">
            <img :src="closePic" alt="close Icon">
            <p>آیا از حذف این کتاب اطمینان دارید؟</p>
            <div class="btn">
                <button class="remove-btn">حذف</button>
                <button class="cancel-btn" @click="emit('close-modal')">لغو</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import closePic from "@/assets/icons/Close.png"
const emit = defineEmits(['close-modal']);
defineProps({
    show: {
        type: Boolean,
        default: false
    }
});
</script>

<style lang="scss" scoped>
@use "../styles/deleteModal.scss";
</style>
