<style lang="scss" src="./util-richtext.scss"></style>
<template>
    <div v-if="content" v-html="content" class="b-util-richtext"></div>
</template>

<script setup lang="ts">
import type { ISbRichtext } from "storyblok-js-client";
import RichTextResolver from "storyblok-js-client/richTextResolver";

const props = defineProps({
    text: {
        type: Object as PropType<ISbRichtext | String>,
        required: true,
    },
});

const resolver = new RichTextResolver();

const content = computed(() => resolver.render(props.text, {}));
</script>
