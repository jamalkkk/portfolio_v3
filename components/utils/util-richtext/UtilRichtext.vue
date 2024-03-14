<template>
    <div v-if="content" v-html="content" class="flex flex-col gap-4"></div>
</template>

<script setup lang="ts">
import type { ISbRichtext } from "storyblok-js-client";
import RichTextResolver from "storyblok-js-client/richTextResolver";

const resolver = new RichTextResolver();

const content = computed(() => resolver.render(props.text, {}));

const props = defineProps({
    text: {
        type: Object as PropType<ISbRichtext | String>,
        default: true,
    },
});
</script>
