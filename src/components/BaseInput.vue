<template>
    <component :is="isTextarea" :class="['input-field', inputSize]" :placeholder="placeholder" :type="isType" />
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
        required: true
    },
    placeholder: {
        type: String,
        default: 'Text'
    },
    size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
    textarea: {
        type: Boolean,
        default: false
    }
});

const isTextarea = computed(() => props.textarea ? 'textarea' : 'input');
const isType = computed(() => props.textarea ? undefined : props.type);
const inputSize = computed(() => `input-${props.size}`);
</script>

<style lang="scss" scoped>
@use "@/sass/mixins" as mixins;

.input-field {
    width: 100%;
    margin: 5px;
    padding: 22px 15px;
    border: none;
    border-radius: 15px;
    font-size: 16px;

    &:focus {
        outline: none;
    }

    &.input-small {
        height: 40px;
        font-size: 14px;
    }

    &.input-medium {
        height: 50px;
        font-size: 16px;
    }

    &.input-large {
        height: 60px;
        font-size: 18px;
    }
}
</style>
