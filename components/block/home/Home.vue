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
                class="home-swiper"
                :modules="[SwiperParallax, SwiperKeyboard]"
                :slides-per-view="'auto'"
                :active-index="1"
                :speed="300"
                :space-betwee="0"
                parallax
                :keyboard="{ enabled: true }"
                @swiper="onSwiper"
                @slideChange="handleSlideChange"
            >
                <SwiperSlide class="home-slide-about">
                    <About class="home-about" />
                </SwiperSlide>
                <SwiperSlide class="slide">
                    <InteractiveAnimations class="home-ia" />
                </SwiperSlide>
            </Swiper>
        </div>

        <!-- Navigation -->
        <div class="home-button is-right">
            <icon
                v-if="!isSmallScreen"
                class="mb-4"
                :is-button="true"
                :name="isInfosActive ? 'close' : 'info'"
                :size="1"
                :tabindex="3"
                :onClick="toggleIsInfosActive"
            />
            <icon
                :is-button="true"
                :name="`volume-o${isSoundActive ? 'n' : 'ff'}`"
                :size="1"
                :tabindex="4"
                :onClick="toggleSound"
            />
            <Info
                v-if="!isSmallScreen"
                :class="[
                    'home-info-info',
                    {
                        'is-active': isInfoInfoActive && !isInfosActive,
                    },
                ]"
                :isPartOfInfos="false"
                arrow="right"
                clickText="Show tips"
            />
            <Info
                v-if="!isSmallScreen"
                :class="[
                    'home-mute-info',
                    {
                        'is-active': isInfoInfoActive,
                    },
                ]"
                arrow="right"
                clickText="Un/mute sounds"
            />
        </div>
        <div
            :class="[
                'home-button is-bottom',
                {
                    'is-active': isMainHomeActive,
                },
            ]"
        >
            <cta
                :is-button="true"
                text="Projects"
                :tabindex="5"
                :on-click="scrollToProjects"
            />
        </div>
        <div class="home-button is-left">
            <cta
                v-if="isHomeActive"
                :is-button="true"
                text="About"
                :tabindex="1"
                :on-click="toggleShouldHomeBeActive"
            />
            <icon
                v-else
                :is-button="true"
                :size="1"
                name="return"
                :tabindex="6"
                :onClick="toggleShouldHomeBeActive"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import SwiperCore from "swiper"; //@TODO: move type to types
export type SwiperType = SwiperCore;
import { useApp } from "~/store/useApp";
import { useLoader } from "~/store/useLoader";
import { useSounds } from "~/store/useSounds";

const appStore = useApp();
const soundsStore = useSounds();
const { shouldProjectLoaderBeActive } = useLoader();
const { scrollToProjects } = useCommon();

const {
    isMainHomeActive,
    isInfosActive,
    isInfoInfoActive,
    shouldScrollToProjects,
    setShouldScrollToProjects,
    setIsHomeActive,
    toggleShouldHomeBeActive,
    toggleIsInfosActive,
} = appStore;
const { setIsSoundActive } = soundsStore;

const { isHomeActive, isSmallScreen, shouldHomeBeActive } =
    storeToRefs(appStore);
const { isSoundActive } = storeToRefs(soundsStore);

const activeIndex = ref(1);
const HomeSwiper = ref();

let swiper: SwiperType = null;

const slideTo = (slide = 1, speed = 300) => {
    swiper.slideTo(slide, speed);
};

const setAllowTouchMove = () => {
    swiper.allowTouchMove = isSmallScreen;
};

const handleSlideChange = () => {
    activeIndex.value = swiper.activeIndex;
    setIsHomeActive(!!swiper.activeIndex);
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
    swiper = swiperObject;

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
        scrollToProjects();
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

watch(isSmallScreen, setAllowTouchMove);

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
    swiper.destroy();
});
</script>