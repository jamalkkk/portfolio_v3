<style lang="scss" src="./icon.scss"></style>

<template>
    <component
        :is="tag"
        :class="[
            'b-icon',
            `size-${size}`,
            `rotate-${rotate}`,
            {
                'is-button': isButton,
                'has-stroke': hasStroke,
            },
        ]"
        :href="to"
        :target="target"
        :tabindex="tabindex"
        @click="onClick"
        data-cursor-hover
    >
        <JKSvg :name="name" class="h-[1em] w-[1em]" />
    </component>
</template>
<script setup lang="ts">
const props = defineProps({
    isButton: { type: Boolean, default: false },
    hasStroke: { type: Boolean, default: false },
    size: { type: Number, default: 1 },
    to: { type: String, default: null },
    name: { type: String, default: "" },
    rotate: { type: String, default: "" },
    tabindex: { type: Number, default: 0 },
    onClick: { type: Function, default: () => null },
});

const tag = computed(() => (props.isButton ? "button" : "a"));

const target = computed(() => (props.to ? "_blank" : ""));

const html = computed(() => require(`~/assets/img/svg/${props.name}.svg?raw`));
</script>
