<template>
    <img
        class="lazyload"
        :src="`${image.filename}\\m\\${
            size ? `${size}x${isOnlyWdith ? '0' : '500'}` : ''
        }`"
        :alt="image.alt"
    />
</template>

<script setup lang="ts">
const props = defineProps({
    image: {
        type: Object as PropType<ISbAsset>,
        default: () => {},
    },
    size: {
        type: Number,
        Default: 0,
    },
    isOnlyWdith: {
        type: Boolean,
        default: true,
    },
});
</script>
