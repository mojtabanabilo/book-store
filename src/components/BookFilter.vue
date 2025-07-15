<template>
    <div class="overlay" @click.self="close">
        <div class="modal">
            <button class="close-btn" @click="close">×</button>

            <h1>{{ t('roots.bookFilter.title') }}</h1>
            <base-input type="text" :placeholder="t('roots.bookFilter.searchPlaceholder')" v-model="searchTerm" />

            <BaseCombo v-model="selectedItem" :options="options"
                :placeholder="t('roots.bookFilter.optionPlaceholder')" @change="sortHandler" size="medium" />

            <Button :label="t('roots.bookFilter.btnApply')" :styleProps="{ margin: '10px 0 0 0', height: '50px' }"
                @click="applyFilter" />
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Button from './Button.vue';
import { useI18n } from 'vue-i18n';
import { useBook } from '@/stores/book';
const { t } = useI18n();

const searchTerm = ref('');
const options = reactive([
    { title: t('roots.bookFilter.lowestPrice'), value: 'lowest', id: 1 },
    { title: t('roots.bookFilter.highestPrice'), value: 'highest', id: 2 },
]);
const selectedItem = ref(null);
const emit = defineEmits(['filter', 'close']);
const store = useBook()

const applyFilter = () => {
    store.searchByTitle(searchTerm)
    close()
};

const sortHandler = (e) => {
    const comboValue = e.target.value
    console.log(comboValue)
    store.sortByPrice(comboValue)
    close()
}

const close = () => {
    emit('close');
};
</script>

<style scoped lang="scss">
@use '../styles/bookFilter.scss';
</style>