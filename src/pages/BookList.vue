<template>
    <section class="book-container" :dir="directionLang" v-if="currentBook">
        <article class="book-wrapper">
            <!-- تصویر کتاب -->
            <figure class="image-section">
                <img :src="picture" alt="Book Image" class="book-picture" />
            </figure>

            <!-- اطلاعات کتاب -->
            <section class="info-section">
                <header>
                    <h2>{{ currentBook.title }}</h2>
                    <p class="author">{{ currentBook.author }}</p>
                </header>

                <p class="summary">{{ currentBook.summary }}</p>

                <Button :label="t('roots.bookList.btnPurchase')" :styleProps="{ width: '200px', height: '50px' }"
                    :icon="cartIcon" />

                <!-- مشخصات -->
                <section class="book-details">
                    <div class="detail-item">
                        <span>{{ t('roots.bookList.price') }}:</span>
                        <p>{{ currentBook.price }}</p>
                    </div>
                    <div class="detail-item">
                        <span>{{ t('roots.bookList.ISBN') }}:</span>
                        <p>978-62281720</p>
                    </div>
                    <div class="detail-item">
                        <span>{{ t('roots.bookList.format') }}:</span>
                        <p>رقعی</p>
                    </div>
                    <div class="detail-item">
                        <span>{{ t('roots.bookList.numberPages') }}:</span>
                        <p>281</p>
                    </div>
                    <div class="detail-item">
                        <span>{{ t('roots.bookList.yearPublication') }}:</span>
                        <p>1389</p>
                    </div>
                    <div class="detail-item">
                        <span>{{ t('roots.bookList.printSeries') }}:</span>
                        <p>17</p>
                    </div>
                </section>
            </section>
        </article>
    </section>
</template>


<script setup>
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { watch, ref, onMounted } from 'vue';
import { useBook } from '@/stores/book';
import picture from "@/assets/book.jpg"
import cartIcon from "@/assets/icons/icons8-cart-50.png"
const { t } = useI18n();
const route = useRoute();
const bookId = route.params.id;
const store = useBook()
const { locale } = useI18n();
const directionLang = ref('rtl');
const currentBook = ref(null);


watch(locale, (newVal) => newVal === "en" ? directionLang.value = "ltr" : directionLang.value = "rtl")

onMounted(async () => {
    if (!store.initialState.data || store.initialState.data.length === 0) await store.getBook();
    currentBook.value = store.initialState.data.find((i) => i.id === bookId);
})
</script>
<style lang="scss">
@use "../styles/bookList.scss";
</style>