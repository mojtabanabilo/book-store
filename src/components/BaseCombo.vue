<template>
    <select class="combo-field" :class="comboSize" v-model="modelValue" >
        <option :value="null" disabled hidden>{{ placeholder }}</option>
        <option v-for="item in options" :key="item.id" :value="item.value">
            {{ item.title }}
        </option>
    </select>
</template>

<script setup>
import { computed, defineProps, defineModel } from 'vue';

const modelValue = defineModel();

const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    placeholder: {
        type: String,
        default: 'Select an option',
    },
    size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
});

const comboSize = computed(() => `combo-${props.size}`);


</script>

<style lang="scss" scoped>
.combo-field {
    width: 100%;
    margin: 5px;
    // padding: 5px;
    border-radius: 15px;
    border: 1px solid #ccc;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #999;
    }

    &.combo-small {
        height: 40px;
        font-size: 14px;
    }

    &.combo-medium {
        height: 50px;
        font-size: 16px;
    }

    &.combo-large {
        height: 60px;
        font-size: 18px;
    }
}
</style>