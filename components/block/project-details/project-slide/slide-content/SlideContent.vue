<style lang="scss" src="./slide-content.scss"></style>

<template>
    <div
        class="b-slide-content flex flex-col justify-center lg:flex-row gap-8 lg:gap-16"
    >
        <div
            v-for="(column, i) in blok.columns"
            :key="i"
            class="flex flex-col gap-4 lg:gap-8 justify-center lg:w-1/2 lg:overflow-y-scroll"
        >
            <div
                v-for="(item, j) in column.items"
                :key="j"
                class="slide-content-item"
            >
                <!-- Image -->
                <ImageFrame
                    v-if="item.image"
                    :size="600"
                    :image="item"
                    :isThick="true"
                    :isInverted="true"
                    :isWidthFull="true"
                    :onClick="() => showModal(item.image)"
                    class="slide-content-image"
                >
                </ImageFrame>

                <UtilRichtext
                    v-else
                    :text="item.text"
                    class="text-center md:text-lef"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ColumnsType } from "~/types/types";
import { useApp } from "~/store/useApp";
import { useModal } from "~/store/useModal";

const appStore = useApp();
const modalStore = useModal();

const { global } = storeToRefs(appStore);
const { setIsModalActive, setImage } = modalStore;

const props = defineProps({
    size: {
        type: Number,
        default: 1,
    },
    blok: {
        type: Object as PropType<ColumnsType>,
        default: () => {},
    },
    onFrameClick: {
        type: Function,
        default: () => null,
    },
});

const showModal = (image: ISbAsset) => {
    console.log("Dlide image", image);

    setImage(image);
    setIsModalActive(true);
};
</script>
