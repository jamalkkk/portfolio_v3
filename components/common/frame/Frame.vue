<style lang="scss" src="./frame.scss"></style>

<template>
    <div class="b-frame">
        <slot />

        <JKLine
            v-for="(line, i) in lines"
            :key="i"
            class="frame-line"
            :isThick="isThick"
            :isInverted="isInverted"
            :isPage="isPage"
            :isHalf="size === 2 && i % 2"
            :position="line"
        />
    </div>
</template>

<script setup lang="ts">
const lines = ["top", "right", "bottom", "left"];

const props = defineProps({
    isThick: {
        type: Boolean,
        default: false,
    },
    isInverted: {
        type: Boolean,
        default: false,
    },
    isPage: {
        type: Boolean,
        default: false,
    },
    size: {
        type: Number,
        default: 1,
    },
});
</script>
