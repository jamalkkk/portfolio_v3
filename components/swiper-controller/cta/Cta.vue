<style lang="scss" src="./cta.scss"></style>

<template>
    <component
        :is="tag"
        :class="[
            'b-cta',
            {
                'is-button': isButton,
                'is-medium': isMedium,
                'is-text': isText,
                'is-hovered': isHovered,
                'has-hover': hasHover,
            },
        ]"
        :href="to"
        :target="to && target"
        :type="type"
        @click="onClick"
        @mouseover="onMouseover"
        @mouseleave="onMouseleave"
        :tabindex="tabindex"
        data-cursor-hover
    >
        {{ text }}
        <JKLine v-show="hasUnderline" :isSingle="true" />
    </component>
</template>

<script setup lang="ts">
const props = defineProps({
    isButton: { type: Boolean, default: false },
    isMedium: { type: Boolean, default: false },
    isText: { type: Boolean, default: false },
    isHovered: { type: Boolean, default: false },
    hasHover: { type: Boolean, default: true },
    hasUnderline: { type: Boolean, default: true },
    to: { type: String, default: null },
    target: { type: String, default: "_blank" },
    text: { type: String, default: "" },
    tabindex: { type: Number, default: 0 },
    onClick: { type: Function, default: () => null },
    onMouseover: { type: Function, default: () => null },
    onMouseleave: { type: Function, default: () => null },
});

const tag = computed(() => {
    return props.isButton ? "button" : "a";
});

const type = computed(() => {
    return props.isButton ? "button" : null;
});
</script>
