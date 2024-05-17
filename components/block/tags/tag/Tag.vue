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
        :text="`#${item?.name || text || 'All'}`"
        :onClick="onClick"
    />
</template>

<script setup lang="ts">
import type { SBTag } from "~/types/types";

const props = defineProps({
    isSelected: {
        type: Boolean,
        default: false,
    },
    item: {
        type: Object as PropType<SBTag>,
        requird: false,
    },
    text: {
        type: String,
        default: "",
    },
    onClick: {
        type: Function,
        default: () => null,
    },
});
</script>