<style lang="scss" src="./image-frame.scss"></style>

<template>
    <div
        :class="[
            'b-image-frame mx-auto',
            {
                'is-clicked': isClicked,
                'enlarge-on-hover': enlargeOnHover,
                'aspect-ratio-1': !isWidthFull,
            },
        ]"
        @click="frameClick"
    >
        <div class="image-frame-container">
            <Frame
                class="overflow-revert"
                :size="size"
                :isThick="isThick"
                :isInverted="isInverted"
            >
                <div class="image-frame-wrapper">
                    <LazyJKImage :image="image.image" />
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
    // @TODO: use image instead
    img: {
        type: String,
        default: "",
    },
    onClick: {
        type: Function,
        default: () => null,
    },
});


const isClicked = ref(false);

const imageAttributes = computed(() => props.image?.attributes);

watch(
    () => isModalActive.value,
    (value) => {
        if (isClicked.value && !value) {
            isClicked.value = false;
        }
    }
);

const frameClick = () => {
    // props.onClick(props.image);

    // @TODO: use image instead
    props.onClick(props.img);
    if (!isClicked.value) {
        isClicked.value = true;
        if (props.shouldShowImmediately) {
            setTimeout(() => {
                isClicked.value = false;
            }, 200);
        }
    }
};
</script>
