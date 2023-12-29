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
const props = defineProps({
    isInverted: { type: Boolean, default: false },
    isMain: { type: Boolean, default: false },
    tag: { type: String, default: "h1" },
    text: { type: String, default: "" },
});
</script>