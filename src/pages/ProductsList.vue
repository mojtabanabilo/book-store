<template>
    <div class="container">
        <DeleteModal :show="showDeleteModal" @close-modal="showDeleteModal = false" />
        <AddModal :show="showAddModal" @close-modal="showAddModal = false" />
        <EditModal :show="showEditModal" @close-modal="showEditModal = false" />
        
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
            <Button :label="t('roots.productsList.addBooks')" width="130px" height="50px"
                @click="showAddModal = true" />
        </div>
        <div class="data-table">
            <Table :columns="['name', 'age', 'job']" :data="productsData" @show-modal="handleShowModal" />
        </div>
    </div>
</template>

<script setup>
import { watch, ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import myPic from "@/assets/pic.jpg"
import searchIcon from "@/assets/icons/icons8-search-48.png"
import managmentBooksIcon from "@/assets/icons/icons8-management-50.png"

const { t, locale } = useI18n();
const directionLang = ref('rtl');
const showDeleteModal = ref(false);
const showAddModal = ref(false);
const showEditModal = ref(false)
const productsData = reactive([
    { name: 'کتاب اول', age: 10, job: 'نویسنده' },
    { name: 'کتاب دوم', age: 20, job: 'مترجم' },
    { name: 'کتاب سوم', age: 30, job: 'ویراستار' }
]);

const handleShowModal = (type) => {
    if (type === 'delete') {
        showDeleteModal.value = true;
    } else if (type === 'edit') {
        showEditModal.value = true;
    }
};

watch(locale, (newVal) => newVal === "en" ? directionLang.value = "ltr" : directionLang.value = "rtl")
</script>

<style lang="scss" scoped>
@use "../styles/productsList.scss";
</style>
