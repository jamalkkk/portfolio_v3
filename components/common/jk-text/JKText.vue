<style lang="scss" src="./jk-text.scss"></style>

<template>
    <div
        v-html="text"
        :class="[
            'b-jk-text',
            {
                'is-Big': isBig,
                'is-x-small': isXSmall,
                'is-small': isSmall,
                'is-light': isLight,
                'is-bold': isBold,
                'is-inverted': isInverted,
                'is-secondary-font': isSecondaryFont,
            },
        ]"
    ></div>
</template>

<script setup lang="ts">
const props = defineProps({
    isBig: {
        type: Boolean,
        default: false,
    },
    isSmall: {
        type: Boolean,
        default: false,
    },
    isXSmall: {
        type: Boolean,
        default: false,
    },
    isLight: {
        type: Boolean,
        default: false,
    },
    isBold: {
        type: Boolean,
        default: false,
    },
    isInverted: {
        type: Boolean,
        default: false,
    },
    isSecondaryFont: {
        type: Boolean,
        default: false,
    },
    text: {
        type: String,
        default: "",
    },
});
</script>
