<style lang="scss" src="./swiper-container.scss"></style>

<template>
    <div class="b-swiper-container">
        <button @click="swiper.slideNext()">Slide to the next slide</button>
    </div>
</template>
<script setup lang="ts">
import { useSwiper } from "swiper/vue";
import { useApp } from "~/store/useApp";

const { setIsHomeActive } = useApp();

const swiper = useSwiper();

const slideTo = (slide = 1, speed = 300) => {
    swiper.value.activeIndex = 1;
};

onMounted(() => {
    // console.log("swiper", swiper.value);
    // slideTo(1);
});
</script>