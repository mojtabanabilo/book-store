<template>
    <div class="no-results">
        <img src="@/assets/pic/no-result.png" alt="not found" />
        <h3>{{ t('roots.noResult.title') }}</h3>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped lang="scss">
@use "../styles/noResult.scss";
</style>