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
                :options="swiperOptions"
            >
                <SwiperSlide class="home-slide-about">
                    <about class="home-about" />
                </SwiperSlide>
                <SwiperSlide class="slide">
                    <interactive-animations class="home-ia" />
                </SwiperSlide>
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
import { ref, computed, onMounted, onUnmounted } from "vue";
// import { Swiper, SwiperSlide, directive } from "nuxt-swiper";
// import { useStore } from "vuex";

// const store = useStore();

const activeIndex = ref(1);
const swiper = ref(null);

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

// const isHomeActive = computed(() => store.state.isHomeActive);
// const isMainHomeActive = computed(() => store.state.isMainHomeActive);
// const isInfosActive = computed(() => store.state.isInfosActive);
// const isInfoInfoActive = computed(() => store.state.isInfoInfoActive);
// const isSoundActive = computed(() => store.state.sounds.isActive);
// const isSmallScreen = computed(() => store.state.isSmallScreen);
// const shouldHomeBeActive = computed(() => store.state.shouldHomeBeActive);
// const shouldScrollToProjects = computed(() => store.state.shouldScrollToProjects);
// const shouldProjectLoaderBeActive = computed(() => store.state.loader.shouldProjectLoaderBeActive);

// const setShouldScrollToProjects = () => store.commit('setShouldScrollToProjects', false);
// const setIsHomeActive = (value) => store.commit('setIsHomeActive', value);
// const toggleShouldHomeBeActive = () => store.commit('toggleShouldHomeBeActive');
// const setIsSoundActive = (value) => store.commit('sounds/setIsActive', value);
// const toggleIsInfosActive = () => store.commit('toggleIsInfosActive');

// const slideTo = (slide = 1, speed = 300) => {
//   swiper.value.slideTo(slide, speed);
// };

// const setAllowTouchMove = () => {
//   swiper.value.allowTouchMove = isSmallScreen.value;
// };

// const handleKeyPress = (keyCode) => {
//   if (keyCode === 73) {
//     toggleIsInfosActive();
//   } else if (keyCode === 77) {
//     toggleSound();
//   }
// };

// const toggleSound = () => {
//   setIsSoundActive(!isSoundActive.value);
// };

// const toggleSlide = () => {
//   slideTo(isHomeActive.value ? 0 : 1);
// };

// const handleSlideChange = () => {
//   activeIndex.value = swiper.value.activeIndex;
//   setIsHomeActive(!!swiper.value.activeIndex);
// };

// const initialiseEvents = () => {
//   swiper.value.on('slideChange', handleSlideChange);
//   swiper.value.on('keyPress', (keyCode) => handleKeyPress(keyCode));
// };

// onMounted(() => {
//   initialiseEvents();

//   setAllowTouchMove();

//   if ($route.path === '/about') {
//     setIsHomeActive(false);
//   } else if ($route.path === '/projects') {
//     slideTo(0, 300);
//   } else {
//     slideTo(1, 300);
//   }

//   if (shouldScrollToProjects.value) {
//     slideTo(0, 300);
//     setShouldScrollToProjects();
//   }
// });

// onUnmounted(() => {
//   swiper.value.off('slideChange', handleSlideChange);
//   swiper.value.off('keyPress', (keyCode) => handleKeyPress(keyCode));
//   swiper.value.destroy();
// });
</script>