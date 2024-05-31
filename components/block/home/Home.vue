<style lang="scss" src="./home.scss"></style>

<template>
    <div
        :class="[
            'b-home position-relative',
            {
                'is-about-active': !isHomeActive,
            },
        ]"
    >
        <!-- Swiper -->
        <div class="home-content">
            <Swiper
                ref="HomeSwiper"
                class="home-swiper !overflow-visible"
                :modules="[SwiperParallax, SwiperKeyboard]"
                :slidesPerView="'auto'"
                :activeIndex="1"
                :speed="300"
                :spaceBetween="0"
                parallax
                :keyboard="{ enabled: true }"
                @swiper="onSwiper"
                @slideChange="handleSlideChange"
            >
                <SwiperSlide class="home-slide-about">
                    <About
                        class="home-about transition duration-500"
                        :class="isHomeActive ? 'opacity-0' : 'opacity-100'"
                    />
                </SwiperSlide>
                <SwiperSlide class="slide">
                    <InteractiveAnimations
                        class="home-ia transition"
                        :class="
                            isHomeActive
                                ? 'opacity-100'
                                : 'opacity-50 md:opacity-60'
                        "
                    />
                </SwiperSlide>
            </Swiper>
        </div>

        <!-- Projects Button -->
        <div
            v-if="isMainHomeActive"
            :class="[
                'home-button is-bottom',
                {
                    'is-active': isMainHomeActive,
                },
            ]"
        >
            <Cta
                :isButton="true"
                text="Projects"
                :tabindex="0"
                :onClick="scrollToProjects"
            />
        </div>

        <!-- Info & Sound Buttons -->
        <div v-if="isMainHomeActive" class="home-button is-right">
            <!-- Info Button -->
            <Icon
                v-if="!isSmallScreen"
                class="mb-4"
                :is-button="true"
                :name="isInfosActive ? 'close' : 'info'"
                :size="1"
                :tabindex="0"
                :onClick="toggleIsInfosActive"
            />

            <!-- Sound Button -->
            <Icon
                :isButton="true"
                :name="`volume-${isSoundActive ? 'on' : 'off'}`"
                :size="1"
                :tabindex="0"
                :onClick="toggleSound"
            />

            <!-- Info's info Tag -->
            <Info
                v-if="!isSmallScreen"
                :class="[
                    'home-info-info',
                    {
                        'is-active': isInfoInfoActive && !isInfosActive,
                    },
                ]"
                :isPartOfInfos="false"
                :isFlashing="true"
                arrow="right"
                clickText="Show tips"
            />

            <!-- Mutes's Info Tag -->
            <Info
                v-if="!isSmallScreen"
                :class="[
                    'home-mute-info',
                    {
                        'is-active': isInfoInfoActive,
                    },
                ]"
                :isFlashing="true"
                arrow="right"
                clickText="Un/mute sounds"
            />
        </div>

        <!-- About Button -->
        <div v-if="isMainHomeActive" class="home-button is-left">
            <Cta
                v-if="isHomeActive"
                :is-button="true"
                text="About"
                :tabindex="0"
                :on-click="toggleShouldHomeBeActive"
            />
            <Icon
                v-else
                :is-button="true"
                :size="1"
                name="return"
                :tabindex="0"
                :onClick="toggleShouldHomeBeActive"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SwiperType } from "~/types/types";

import { useApp } from "~/store/useApp";
import { useSounds } from "~/store/useSounds";

const appStore = useApp();
const soundsStore = useSounds();
const { scrollToProjects } = useCommon();

const {
    shouldScrollToProjects,
    setShouldScrollToProjects,
    setIsHomeActive,
    toggleShouldHomeBeActive,
    toggleIsInfosActive,
} = appStore;
const { setIsSoundActive } = soundsStore;

const {
    isHomeActive,
    isMainHomeActive,
    isSmallScreen,
    shouldHomeBeActive,
    isInfosActive,
    isInfoInfoActive,
} = storeToRefs(appStore);
const { isSoundActive } = storeToRefs(soundsStore);

const activeIndex = ref(1);
const HomeSwiper = ref();
const swiper = ref<SwiperType>();

const slideTo = (slide = 1, speed = 300) => {
    swiper.value?.slideTo(slide, speed);
};

const setAllowTouchMove = () => {
    if (swiper.value) {
        swiper.value.allowTouchMove = isSmallScreen.value;
    }
};

const handleSlideChange = () => {
    activeIndex.value = swiper.value?.activeIndex || 0;
    setIsHomeActive(!!swiper.value?.activeIndex);
};

const toggleSound = () => setIsSoundActive(!isSoundActive.value);

const handleKeyPress = ({ code }: KeyboardEvent) => {
    switch (code) {
        case "KeyI":
            toggleIsInfosActive();
            break;
        case "KeyM":
            toggleSound();
            break;
        default:
            break;
    }
};

const onSwiper = (swiperObject: SwiperType) => {
    swiper.value = swiperObject;

    const route = useRoute();

    // @TODO: check how paths redirectory works
    if (route.path === "/about") {
        setIsHomeActive(false);
    } else if (route.path === "/projects") {
        scrollToProjects();
    } else {
        slideTo(1, 10);
    }

    if (shouldScrollToProjects) {
        scrollToProjects(false);
        setShouldScrollToProjects(false);
    }
};

const initialiseEvents = () => {
    window.addEventListener("keydown", handleKeyPress);
};

watch(isHomeActive, (value) => {
    if (value && !activeIndex.value) {
        slideTo(1);
    }
});

watch(
    () => isSmallScreen.value,
    (value) => setAllowTouchMove
);

watch(shouldHomeBeActive, (value) => {
    if (isHomeActive.value !== value) {
        slideTo(isHomeActive.value ? 0 : 1);
    }
});

onMounted(() => {
    initialiseEvents();
    setAllowTouchMove();
});

onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyPress);
    swiper.value?.destroy();
});
</script>
