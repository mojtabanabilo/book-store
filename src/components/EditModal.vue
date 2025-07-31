<template>
    <div class="bg" v-if="show">
        <div class="modal">
            <h2 style="color: black;">{{ t('roots.editModal.title') }}</h2>
            <base-input type="text" :placeholder="t('roots.editModal.bookName')" v-model="data.title" />
            <base-input type="text" :placeholder="t('roots.editModal.authorName')" v-model="data.author" />
            <base-textarea textarea :placeholder="t('roots.editModal.summary')" v-model="data.summary" />
            <div class="count-price">
                <base-input type="number" :placeholder="t('roots.editModal.count')" v-model="data.quantity" />
                <base-input type="text" :placeholder="t('roots.editModal.price')" v-model="data.price" />
            </div>
            <div class="btns">
                <Button :label="t('roots.editModal.change')"
                    :styleProps="{ background: 'btn-sky-blue', radius: '15px', width: '200px', height: '50px' }"
                    @click="emit('edit-book', data)" />
                <Button :label="t('roots.editModal.cancel')"
                    :styleProps="{ background: 'btn-gray', radius: '15px', width: '200px', height: '50px' }"
                    @click="emit('close-modal')" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const data = reactive({
    title: null,
    summary: null,
    author: null,
    price: null,
    quantity: null
})

defineProps({
    show: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['close-modal', 'edit-book'])

</script>

<style lang="scss" scoped>
@use "../styles/editModal.scss";
</style>