<template>
    <img class="lazyload" :src="image.filename" :alt="image.alt"/>
</template>

<script setup lang="ts">
const props = defineProps({
    image: {
        type: Object as PropType<ISbAsset>,
        default: () => {},
    },
});
</script>
