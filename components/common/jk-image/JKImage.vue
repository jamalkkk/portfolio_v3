<template>
    <!-- <img class="lazyload" :src="img" /> -->
    <img class="lazyload" :src="image.filename" :alt="image.alt"/>
</template>

<script setup lang="ts">

const props = defineProps({
    image: {
        type: Object as PropType<ISbAsset>,
        default: () => ({}),
    },
});

console.log("image", props.image);

// const src = computed(() => props.image?.url);
// const alt = computed(() => props.image?.alternativeText);

// // @TODO: Set image sizes
// const srcset = computed(() => {
//     const { large, medium, small } = props.image?.formats;

//     return `${small ? `${small.url} ${small.width}w, ` : ""}
//           ${medium ? `${medium.url} ${medium.width}w, ` : ""}
//           ${large ? `${large.url} ${large.width}w, ` : ""}
//           ${src.value} ${props.image?.width}w`;
// });
</script>
