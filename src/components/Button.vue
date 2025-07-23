<template>
    <button :class="['btn', buttonSize, backgroundClass]" :style="buttonStyle">
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
        default: '',
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
        default: () => {},
    }
})

const buttonStyle = computed(() => ({
    width: props.styleProps.width ?? '100%',
    height: props.styleProps.height ?? '40px',
    borderRadius: props.styleProps.borderRadius ?? '15px',
    margin: props.styleProps.margin ?? '',
    background: props.styleProps.background ?? 'btn-hot-pink'
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
const backgroundClass = computed(() => {
    const validClasses = ['btn-hot-pink', 'btn-sky-blue', 'btn-gray', 'btn-light-green'];
    return validClasses.includes(props.styleProps.background) ? props.styleProps.background : 'btn-hot-pink';
});
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

    .btn-icon {
        margin: 0;
    }

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

.btn-sky-blue {
    background: $sky-blue;
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