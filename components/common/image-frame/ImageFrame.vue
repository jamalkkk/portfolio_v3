<style lang="scss" src="./image-frame.scss"></style>

<template>
    <div
        :class="[
            'b-image-frame mx-auto',
            {
                'enlarge-on-hover': enlargeOnHover,
                'aspect-ratio-1': !isWidthFull,
            },
        ]"
        @click="onClick"
    >
        <div class="image-frame-container">
            <Frame
                class="overflow-revert"
                :size="size"
                :isThick="isThick"
                :isInverted="isInverted"
            >
                <div class="image-frame-wrapper">
                    <LazyJKImage
                        :image="image.image"
                        :size="size"
                        :isOnlyWdith="isOnlyWdith"
                    />
                </div>
                <slot name="content" />
            </Frame>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useModal } from "~/store/useModal";
import type { ImageType } from "~/types/types";

const modalStore = useModal();
const { isModalActive } = storeToRefs(modalStore);

const props = defineProps({
    isThick: {
        type: Boolean,
        default: true,
    },
    isInverted: {
        type: Boolean,
        default: false,
    },
    isWidthFull: {
        type: Boolean,
        default: false,
    },
    isOnlyWdith: {
        type: Boolean,
        default: true,
    },
    shouldShowImmediately: {
        type: Boolean,
        default: false,
    },
    enlargeOnHover: {
        type: Boolean,
        default: true,
    },
    size: {
        type: Number,
        default: 0,
    },
    image: {
        type: Object as PropType<ImageType>,
        default: () => ({}),
    },
    onClick: {
        type: Function,
        default: () => null,
    },
});
</script>
