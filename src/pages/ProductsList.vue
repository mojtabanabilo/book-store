<template>
    <div class="container">
        <DeleteModal :show="showDeleteModal" @close-modal="showDeleteModal = false" @delete-book="handleDeleteBook" />
        <AddModal :show="showAddModal" @close-modal="showAddModal = false" />
        <EditModal :show="showEditModal" @close-modal="showEditModal = false" @edit-book="handleEditBook" />

        <div class="search-container">
            <div class="search-box" :dir="directionLang">
                <img :src="searchIcon" alt="search" class="search-icon" />
                <input type="text" :placeholder="t('roots.productsList.searchPlaceHolder')" class="search-input" />
                <img :src="myPic" alt="profile" class="profile-pic" />
                <div class="user-info">
                    <h4>میلاد اعظمی</h4>
                    <p>مدیر</p>
                </div>
            </div>
        </div>
        <div class="header">
            <div class="title">
                <img :src="managmentBooksIcon" alt="books" />
                <h2>{{ t('roots.productsList.bookManagment') }}</h2>
            </div>
            <Button :label="t('roots.productsList.addBooks')" :styleProps="{ width: '130px', height: '50px' }"
                @click="showAddModal = true" />
        </div>
        <div class="data-table">
            <Table :columns="['title', 'author', 'price']" :data="store.initialState.data"
                @show-modal="handleShowModal" />
        </div>
    </div>
</template>

<script setup>
import { watch, ref, onMounted } from 'vue';
import { useBook } from '@/stores/book';
import { useDeleteBook } from '@/stores/deleteBook';
import { useEditBook } from '@/stores/editBook';
import { useI18n } from 'vue-i18n';
import myPic from "@/assets/book.jpg"
import searchIcon from "@/assets/icons/icons8-search-48.png"
import managmentBooksIcon from "@/assets/icons/icons8-management-50.png"

const { t, locale } = useI18n();
const directionLang = ref('rtl');
const showDeleteModal = ref(false);
const showAddModal = ref(false);
const showEditModal = ref(false);
const selectedBookId = ref(null);
const store = useBook();
const deleteStore = useDeleteBook();
const editStore = useEditBook()

const handleShowModal = (params) => {
    if (params.type === 'delete') {
        selectedBookId.value = params.id;
        showDeleteModal.value = true;
    } else if (params.type === 'edit') {
        showEditModal.value = true;
        selectedBookId.value = params.id;
    }
};

const handleDeleteBook = async () => {
    if (selectedBookId.value) {
        await deleteStore.deleteBookById(selectedBookId.value);
        showDeleteModal.value = false;
        selectedBookId.value = null;
        await store.getBook();
    }
};

const handleEditBook = async (data) => {
    console.log(data)
    if (selectedBookId.value) {
        await editStore.editBookById(selectedBookId.value, data);
        showDeleteModal.value = false;
        selectedBookId.value = null;
        await store.getBook();
    }
}


watch(locale, (newVal) => newVal === "en" ? directionLang.value = "ltr" : directionLang.value = "rtl")
onMounted(async () => {
    await store.getBook()
})
</script>

<style lang="scss" scoped>
@use "../styles/productsList.scss";
</style>
