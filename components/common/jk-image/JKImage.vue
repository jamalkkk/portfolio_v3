<template>
    <img class="lazyload" :src="img" />
    <!-- <img class="lazyload" :src="img" :alt="alt" :srcset="srcset" /> -->
</template>

<script setup lang="ts">
import type { ImageType } from "~/types/types";

const props = defineProps({
    image: {
        type: Object as PropType<ImageType>,
        default: () => ({}),
    },
    img: {
        type: String,
        default: "",
    },
});

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
