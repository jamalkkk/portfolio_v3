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
        :text="`#${item?.name || 'all'}`"
        :onClick="onClick"
    />
</template>

<script setup lang="ts">
import type { SBTags } from "~/types/types";

const props = defineProps({
    isSelected: {
        type: Boolean,
        default: false,
    },
    item: {
        type: Object as PropType<SBTags>,
        requird: true,
    },
    onClick: {
        type: Function,
        default: () => null,
    },
});
</script>