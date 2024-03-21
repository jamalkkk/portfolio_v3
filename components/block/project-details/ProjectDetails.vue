<style lang="scss" src="./project-details.scss"></style>

<template>
    <div
        :class="[
            'b-project-details',
            {
                'is-player-slide': isPlayerSlide,
                'is-modal-active': isModalActive,
                'are-controls-hidden': isUIHidden,
            },
        ]"
    >
        <Frame
            v-if="project"
            :isThick="true"
            :isPage="true"
            class="transition duration-500"
            :class="{
                'bg-[#222]': !isProjectLoaded,
            }"
        >
            <!-- Headline -->
            <Headline
                class="project-details-title"
                :text="project?.title"
                :isMain="true"
            />

            <!-- Navigation Icons -->
            <Icon
                v-show="isProjectActive"
                class="project-details-close"
                name="close"
                :isButton="true"
                :onClick="handleCloseProject"
            />
            <Icon
                v-show="hasSwiper"
                class="project-details-prev swiper-button-prev"
                :isButton="true"
                name="return"
                rotate="left"
            />
            <Icon
                v-show="hasSwiper"
                class="project-details-next swiper-button-next"
                :isButton="true"
                name="return"
            />

            <!-- Tags -->
            <div class="project-details-tags">
                <Tags :isInteractive="false" :projectTags="project?.tags" />
            </div>

            <!-- Navigation -->
            <div
                v-show="hasSwiper"
                class="project-details-pagination swiper-pagination"
            ></div>

            <!-- Swiper -->
            <Swiper
                ref="ProjectDetailSwiper"
                class="project-details-swiper"
                :modules="[
                    SwiperParallax,
                    SwiperKeyboard,
                    SwiperPagination,
                    SwiperNavigation,
                ]"
                :slidesPerView="1"
                :activeIndex="1"
                :speed="300"
                :spaceBetween="0"
                :allow-touch-move="true"
                parallax
                :pagination="{
                    el: '.swiper-pagination',
                    type: 'progressbar',
                    renderProgressbar: renderProgressbar,
                }"
                :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }"
                :keyboard="{ enabled: true }"
                @swiper="onSwiper"
                @slideChange="handleSlideChange"
                @keyPress="handleKeyPress"
            >
                <LazyProjectSlide
                    v-for="(slide, i) in project?.slides"
                    :key="i"
                    :index="i"
                    :slide="slide"
                >
                </LazyProjectSlide>
            </Swiper>
        </Frame>

        <!-- Modal -->
        <Modal />
    </div>
</template>

<script setup lang="ts">
import type { SwiperType, ProjectType } from "~/types/types";

import { useApp } from "~/store/useApp";
import { usePlayer } from "~/store/usePlayer";
import { useSwiperStore } from "~/store/useSwiperStore";
import { useModal } from "~/store/useModal";

const appStore = useApp();
const playerStore = usePlayer();
const swiperStore = useSwiperStore();
const modalStore = useModal();

const { closeProject } = useCommon();

const { setActiveIndex, setIsSpaceBarPressed } = swiperStore;
const { setIsModalActive, setProjectImages } = modalStore;

const { isSmallScreen } = storeToRefs(appStore);
const { isUIHidden } = storeToRefs(playerStore);
const { isModalActive } = storeToRefs(modalStore);
const { swiperActiveIndex, videoSlideIndices } = storeToRefs(swiperStore);

const ProjectDetailSwiper = ref();

// const isLoading = ref(true);
const isProjectActive = ref(true);
const isProjectLoaded = ref(false);
const isPlayerSlide = ref(false);
const hasSwiper = ref(false);
const swiper = ref<SwiperType>();

const props = defineProps({
    project: {
        type: Object as PropType<ProjectType>,
        required: true,
        default: () => {},
    },
});

watch(
    () => isModalActive.value,
    (value) => {
        if (swiper.value) {
            if (value) {
                swiper.value?.keyboard.disable();
            } else {
                swiper.value?.keyboard.enable();
            }
        }
    }
);

watch(
    () => isSmallScreen.value,
    (value) => {
        if (swiper.value) {
            swiper.value.allowTouchMove = value;
        }
    }
);

watch(
    () => swiperActiveIndex.value,
    (value) => {
        // isPlayerSlide.value = videoSlideIndices.value.includes(value);
    }
);

const onSwiper = (swiperObject: SwiperType) => {
    swiper.value = swiperObject;

    if (swiper.value) {
        swiper.value.allowTouchMove = isSmallScreen.value;
    }

    hasSwiper.value = props.project?.slides?.length > 1;
};

const handleCloseProject = () => {
    isProjectActive.value = false;
    closeProject();
    setIsModalActive(false);
};

const renderProgressbar = (progressbarFillClass: string) => {
    return '<span class="' + progressbarFillClass + '"></span>';
};

const handleSlideChange = () => {
    setActiveIndex(swiper.value?.activeIndex || 0);
};

const handleKeyPress = (swiper: any, keyCode: String) => {
    switch (`${keyCode}`) {
        case "32":
            setIsSpaceBarPressed(true);
            break;
        case "27":
            closeProject();
            break;
    }
};

const setAllImagesInModal = (project: ProjectType): string[] => {
    const images: string[] = [];

    // Iterate through each slide
    for (const slide of project.slides) {
        // Add slide image
        if (slide.type === "image" && slide.img) {
            images.push(slide.img);
        } else if (slide.type === "columns") {
            // Iterate through each column in the slide
            for (const column of slide.columns) {
                // Iterate through each item in the column
                for (const item of column.items) {
                    // If the item type is 'image', add its image
                    if (item.type === "image") {
                        images.push(item.img);
                    }
                }
            }
        }
    }

    setProjectImages(images);
    return images;
};

const revealProject = () => {
    setTimeout(() => {
        isProjectLoaded.value = true;
    }, 200);
};

onMounted(() => {
    revealProject();
    // const images = setAllImagesInModal(props.project);
});

onUnmounted(() => {
    swiper.value?.destroy();
});
</script>
