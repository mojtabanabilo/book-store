<template>
    <div class="bg" v-if="show">
        <div class="modal">
            <h2 style="color: black;">{{ t('roots.editModal.title') }}</h2>
            <base-input type="text" :placeholder="t('roots.editModal.bookName')" />
            <base-input type="text" :placeholder="t('roots.editModal.authorName')" />
            <base-textarea textarea :placeholder="t('roots.editModal.summary')" />
            <div class="count-price">
                <base-input type="number" :placeholder="t('roots.editModal.count')" />
                <base-input type="text" :placeholder="t('roots.editModal.price')" />
            </div>
            <div class="btns">
                <Button :label="t('roots.editModal.change')" width="200px" height="50px"
                    :styleProps="{ background: 'btn-sky-blue', radius: '15px' }" />
                <Button :label="t('roots.editModal.cancel')" width="200px" height="50px"
                    :styleProps="{ background: 'btn-gray', radius: '15px' }" @click="emit('close-modal')" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

defineProps({
    show: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['close-modal'])

</script>

<style lang="scss" scoped>
@use "../styles/addModal.scss";
</style>