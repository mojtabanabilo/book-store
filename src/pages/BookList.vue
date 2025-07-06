<template>
    <div class="book-list" dir="rtl">
        <div class="book">
            <img :src="picture" alt="book-image" class="book-picture" />
            <div class="titles">
                <h2>جنایت و مکافات</h2>
                <p>داستایوفسکی</p>
                <p>نشر علم</p>
                <h3>250 هزار تومان</h3>
                <Button :label="t('roots.bookList.btnPurchase')" :styleProps="{ width: '200px', height: '50px' }" :icon="cartIcon" />
            </div>
        </div>
        <div class="details" :dir="directionLang">
            <div>
                <span>{{ t('roots.bookList.bookCode') }}:</span>
                <p>142246</p>
            </div>
            <div>
                <span>{{ t('roots.bookList.ISBN') }}:</span>
                <p>978-62281720</p>
            </div>
            <div>
                <span>{{ t('roots.bookList.format') }}:</span>
                <p>رقعی</p>
            </div>
            <div>
                <span>{{ t('roots.bookList.numberPages') }}:</span>
                <p>281</p>
            </div>
            <div>
                <span>{{ t('roots.bookList.yearPublication') }}:</span>
                <p>1389</p>
            </div>
            <div>
                <span>{{ t('roots.bookList.printSeries') }}:</span>
                <p>17</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import picture from "@/assets/pic.jpg"
import cartIcon from "@/assets/icons/icons8-cart-50.png"
import { watch, ref } from 'vue';

const { t } = useI18n();
const { locale } = useI18n();
const directionLang = ref('rtl');

watch(locale, (newVal) => newVal === "en" ? directionLang.value = "ltr" : directionLang.value = "rtl")
</script>
<style lang="scss">
@use "../styles/bookList.scss";
</style>