<style lang="scss" src="./project-slide.scss"></style>

<template>
    <SwiperSlide
        :class="[
            'b-project-slide',
            {
                'has-padding': !isVideo,
                'is-modal-active': isModalActive,
            },
        ]"
    >
        <!-- Video Player -->
        <Player v-if="isVideo" :video="slide" :index="index" />

        <!-- Image -->
        <div v-if="isImage" class="project-slide-image items-center">
            <ImageFrame
                class="project-slide-frame"
                :image="slide"
                :onClick="() => showModal(slide.image)"
                :isThick="true"
                :isInverted="true"
                :size="1140"
            />
        </div>

        <!-- Content with images -->
        <SlideContent v-else :blok="slide" />
    </SwiperSlide>
</template>
<script setup lang="ts">
import type { ColumnsType, VideoType, ImageType } from "~/types/types";

import { useModal } from "~/store/useModal";
import { useSwiperStore } from "~/store/useSwiperStore";

const modalStore = useModal();
const swiperStore = useSwiperStore();

const { isModalActive } = storeToRefs(modalStore);
const { setIsModalActive, setImage } = modalStore;
const { addVideoSlideIndex } = swiperStore;

const props = defineProps({
    index: {
        type: Number,
        default: 0,
    },
    slide: {
        type: Object as PropType<VideoType | ImageType | ColumnsType>,
        required: true,
    },
});

const isVideo = computed(() => props.slide.component === "video");
const isImage = computed(() => props.slide.component === "image");

const showModal = (image: ISbAsset) => {
    setImage(image);
    setIsModalActive(true);
};

onMounted(() => {
    if (isVideo) {
        addVideoSlideIndex(props.index);
    }
});
</script>
