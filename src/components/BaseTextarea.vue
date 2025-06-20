<template>
    <textarea v-model="modelValue" :class="['textarea-field', inputSize]" :placeholder="placeholder" />
</template>

<script setup>
import { computed, defineProps, defineEmits, defineModel } from 'vue';
const modelValue = defineModel()
const props = defineProps({
    value: {
        type: Object,
        default: () => { }
    },
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: 'Text'
    },
    size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value),
    }
});

const inputSize = computed(() => `input-${props.size}`);
</script>

<style lang="scss" scoped>
.textarea-field {
    width: 100%;
    // height: 200px;
    min-height: 100px;
    margin: 5px;
    padding: 22px 15px;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    resize: none;
    overflow-y: auto;

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
