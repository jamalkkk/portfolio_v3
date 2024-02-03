<style lang="scss" src="./jk-line.scss"></style>

<template>
    <JKSvg
        :name="`line${isThick ? '-thick' : ''}${isVertical ? '_y' : ''}`"
        :class="[
            'b-jk-line',
            `is-${position}`,
            {
                'is-centered': isCentered,
                'is-thick': isThick,
                'is-half': isHalf,
                'is-inverted': isInverted,
                'is-page': isPage,
                'is-single': isSingle,
            },
        ]"
    />
</template>

<script setup lang="ts">
const props = defineProps({
    isCentered: {
        type: Boolean,
        default: true,
    },
    isThick: {
        type: Boolean,
        default: false,
    },
    isHalf: {
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
    isSingle: {
        type: Boolean,
        default: false,
    },
    position: {
        type: String,
        default: "bottom",
    },
});

const isVertical = computed(() => ["right", "left"].includes(props.position));

const lineClasses = computed(() => [
    "b-jk-line",
    `is-${props.position}`,
    {
        "is-centered": props.isCentered,
        "is-thick": props.isThick,
        "is-half": props.isHalf,
        "is-inverted": props.isInverted,
        "is-page": props.isPage,
        "is-single": props.isSingle,
    },
]);
</script>
