<template>
    <NuxtImg
        class="lazyload"
        :src="`${image.filename}\\m\\${
            size ? `${size}x${isOnlyWdith ? '0' : size}` : ''
        }`"
        :alt="image.alt"
        sizes="50vw lg:270"
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
