<template>
    <table class="table">
        <thead>
            <tr>
                <th v-for="(col, index) in columns" :key="index">
                    {{ col }}
                </th>
                <th>...</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, rowIndex) in data" :key="rowIndex">
                <td v-for="(col, colIndex) in columns" :key="colIndex">
                    {{ row[col] }}
                </td>
                <td class="actions">
                    <img :src="edit" alt="edit" @click="emit('show-modal', 'edit')"  />
                    <img :src="trash" alt="trash" @click="emit('show-modal', 'delete')" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import trash from "@/assets/icons/trash.png";
import edit from "@/assets/icons/edit.png";

const emit = defineEmits(['show-modal']);
const props = defineProps({
    columns: Array,
    data: Array
});

</script>

<style lang="scss" scoped>
@use "../styles/table.scss";
</style>