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

        <Player v-if="isVideo" :video="slide.video" :index="index" />

        <!-- Image -->
        <div v-if="isImage" class="project-slide-image items-center">
            <ImageFrame
                class="project-slide-frame"
                :image="slide.image"
                :img="slide.img"
                :onClick="showModal"
                :isThick="true"
                :isInverted="true"
            />
        </div>

        <!-- Content with images -->
        <SlideContent
            v-else
            :columns="slide.columns"
            :onFrameClick="showModal"
        />
    </SwiperSlide>
</template>
<script setup lang="ts">
import type { ProjectSlideType } from "~/types/types";

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
        type: Object as PropType<ProjectSlideType>,
        required: true,
    },
});

const isVideo = computed(() => props.slide.type === "video");
const isImage = computed(() => props.slide.type === "image");

const showModal = (image: any) => {
    setImage(image);
    setIsModalActive(true);
};

onMounted(() => {
    if (isVideo) {
        addVideoSlideIndex(props.index);
    }
});
</script>
