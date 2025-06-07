<template>
    <button :class="['btn', buttonSize, buttonBackground]" :style="buttonStyle">
        <span v-if="icon" class="btn-icon">
            <img :src="icon" alt="icon">
        </span>
        <span>{{ label }}</span>
    </button>
</template>
<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: 'Button',
    },
    width: {
        type: String,
        default: 'auto',
    },
    height: {
        type: String,
        default: '40px',
    },
    size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
    icon: {
        type: String,
        default: '',
    },
    styleProps: {
        type: Object,
        default: () => ({
            radius: '15px',
            margin: '',
            background: 'btn-hot-pink',
        }),
    },
    // radius: {
    //     type: String,
    //     default: '15px'
    // },
    // margin: {
    //     type: String,
    //     default: ''
    // },
    // background: {
    //     type: String,
    //     default: 'btn-hot-pink',
    // },
})

const buttonBackground = computed(() => props.styleProps.background);
const buttonStyle = computed(() => ({
    width: props.width,
    height: props.height,
    borderRadius: props.styleProps.radius,
    margin: props.styleProps.margin,
}))
const buttonSize = computed(() => {
    switch (props.size) {
        case 'small':
            return 'btn-small';
        case 'large':
            return 'btn-large';
        default:
            return 'btn-medium';

    }
})
</script>
<style lang="scss" scoped>
@use "@/sass/mixins" as mixins;
@use '@/sass/variables' as *;

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &-icon {
        margin-right: 8px;
        @include mixins.flex(row, center, center);

        img {
            width: 20px;
            height: 20px;
        }
    }

    &-small {
        font-size: 0.8rem;
        padding: 5px 15px;
    }

    &-medium {
        font-size: 1rem;
        padding: 10px 20px;
    }

    &-large {
        font-size: 1.2rem;
        padding: 15px 30px;
    }
}

.btn-hot-pink {
    background: $hot-pink;
    color: $white;
}

.btn-light-green {
    background: $light-green;
    color: $white;
}

.btn-gray {
    background: $gray;
    color: $black;
}

@media (max-width: 768px) {
    .btn {
        font-size: 0.9rem;
        padding: 8px 16px;
    }
}
</style>