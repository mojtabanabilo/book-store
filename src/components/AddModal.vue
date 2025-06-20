<template>
    <div class="bg" v-if="show">
        <div class="modal">
            <h2 style="color: black;">{{ t('roots.addModal.title') }}</h2>
            <base-input type="text" :placeholder="t('roots.addModal.bookName')" />
            <base-input type="text" :placeholder="t('roots.addModal.authorName')" />
            <base-textarea textarea :placeholder="t('roots.addModal.summary')" />
            <div class="count-price">
                <base-input type="number" :placeholder="t('roots.addModal.count')" />
                <base-input type="text" :placeholder="t('roots.addModal.price')" />
            </div>
            <div class="btns">
                <Button :label="t('roots.addModal.create')" width="200px" height="50px"
                    :styleProps="{ background: 'btn-light-green', radius: '15px' }" />
                <Button :label="t('roots.addModal.cancel')" width="200px" height="50px"
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