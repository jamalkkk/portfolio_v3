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
        <div class="home-content">
            <Swiper
                ref="HomeSwiper"
                class="home-swiper"
                :modules="[SwiperParallax, SwiperKeyboard]"
                :options="swiperOptions"
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
                    <about class="home-about" />
                </SwiperSlide>
                <SwiperSlide class="slide">
                    <interactive-animations class="home-ia" />
                </SwiperSlide>

                <SwiperController />
            </Swiper>
        </div>
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
import { useApp } from "~/store/useApp";
import { useLoader } from "~/store/useLoader";
import { useSounds } from "~/store/useSounds";

const {
    isHomeActive,
    isMainHomeActive,
    isInfosActive,
    isInfoInfoActive,
    isSmallScreen,
    shouldHomeBeActive,
    shouldScrollToProjects,
    setShouldScrollToProjects,
    setIsHomeActive,
    toggleShouldHomeBeActive,
    toggleIsInfosActive,
} = useApp();
const { shouldProjectLoaderBeActive } = useLoader();
const { isSoundActive, setIsSoundActive } = useSounds();

const activeIndex = ref(1);
const HomeSwiper = ref();

let swiper: any = null;

const swiperOptions = {
    spaceBetween: 0,
    speed: 300,
    parallax: true,
    slidesPerView: "auto",
    pagination: false,
    keyboard: {
        enabled: true,
    },
};

const slideTo = (slide = 1, speed = 300) => {
    swiper.slideTo(slide, speed);
};

const setAllowTouchMove = () => {
    swiper.allowTouchMove = isSmallScreen;
    console.log("swiper.allowTouchMove", swiper.allowTouchMove);
    console.log("swiper.isSmallScreen", isSmallScreen);
};

// const handleKeyPress = (keyCode) => {
//     if (keyCode === 73) {
//         toggleIsInfosActive();
//     } else if (keyCode === 77) {
//         toggleSound();
//     }
// };

// const toggleSound = () => {
//     setIsSoundActive(!isSoundActive.value);
// };

// const toggleSlide = () => {
//     slideTo(isHomeActive.value ? 0 : 1);
// };
// import { MySwiper } from "~/types"; // Import the MySwiper type

const handleSlideChange = (swiper: any) => {
    console.log("handleSlideChange", swiper.activeIndex);

    activeIndex.value = swiper.activeIndex;
    setIsHomeActive(!!swiper.activeIndex);
};
const onSwiper = (swiperObject: any) => {
    swiper = swiperObject;

    slideTo(1, 10);
};

const initialiseEvents = () => {
    // swiper.on("slideChange", handleSlideChange);
    // swiper.on("keyPress", (keyCode) => handleKeyPress(keyCode));
};

onMounted(() => {
    initialiseEvents();

    setAllowTouchMove();

    // const route = useRoute();

    // if (route.path === "/about") {
    //     setIsHomeActive(false);
    // } else if (route.path === "/projects") {
    //     slideTo(0, 300);
    // } else {
    //     slideTo(1, 300);
    // }

    // if (shouldScrollToProjects.value) {
    //     slideTo(0, 300);
    //     setShouldScrollToProjects();
    // }
});

// onUnmounted(() => {
//     swiper.off("slideChange", handleSlideChange);
//     swiper.off("keyPress", (keyCode) => handleKeyPress(keyCode));
//     swiper.destroy();
// });
</script>