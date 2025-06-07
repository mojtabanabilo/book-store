<template>
    <div class="bg" v-if="show">
        <div class="modal">
            <img :src="closePic" alt="close Icon">
            <p>{{t('roots.deleteModal.deleteTitle')}}</p>
            <div class="btn">
                <button class="remove-btn">{{t('roots.deleteModal.removeBtn')}}</button>
                <button class="cancel-btn" @click="emit('close-modal')">{{t('roots.deleteModal.cancelBtn')}}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import closePic from "@/assets/icons/Close.png"
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
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
