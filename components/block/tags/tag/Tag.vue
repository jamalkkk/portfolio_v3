<style lang="scss" src="./tag.scss"></style>

<template>
    <Cta
        :class="[
            'b-tag',
            {
                'is-selected': isSelected,
            },
        ]"
        :isButton="true"
        :hasHover="false"
        :hasUnderline="false"
        :text="`#${name}`"
        :onClick="onClick"
    />
</template>

<script setup lang="ts">
const props = defineProps({
    isSelected: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        default: "",
    },
    onClick: {
        type: Function,
        default: () => null,
    },
});
</script>