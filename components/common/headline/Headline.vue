<style lang="scss" src="./headline.scss"></style>

<template>
    <component
        :is="tag"
        :class="[
            'b-headline',
            {
                'is-main-title ': isMain,
                'is-inverted ': isInverted,
            },
        ]"
    >
        {{ text }}
    </component>
</template>
<script setup lang="ts">
// import { Headline } from "~/types/common";

const props = defineProps({
    isInverted: { type: Boolean, default: false },
    isMain: { type: Boolean, default: false },
    tag: { type: String as PropType<"h1" | "h2" | "h3">, default: "h1" },
    text: { type: String, default: "" },
});
</script>