<style lang="scss" src="./animation.scss"></style>

<template>
    <div class="b-animation">
        <Lottie
            v-if="isLoaded"
            ref="lottie"
            :animationData="data[title]"
            :loop="loop"
            :autoplay="autoplay"
            @onComplete="complete"
            @onLoopComplete="loopComplete"
            @onAnimationLoaded="setAnimationController"
            class="animation-lottie"
        />
    </div>
</template>

<script setup lang="ts">
import { useAnimation } from "~/store/useAnimation";

import BallData from "~/assets/json/ball.json";
import BikeData from "~/assets/json/bike.json";
import BirdData from "~/assets/json/bird.json";
import CatData from "~/assets/json/cat.json";
import DesktopData from "~/assets/json/desktop.json";

const data = {
    ball: BallData,
    bike: BikeData,
    bird: BirdData,
    cat: CatData,
    desktop: DesktopData,
};

const useAnimationStore = useAnimation();
const { isAllAnimationActive } = useAnimationStore;

const props = defineProps({
    isSegmentForced: {
        type: Boolean,
        default: false,
    },
    isSegmentReversed: {
        type: Boolean,
        default: false,
    },
    shouldBePlaying: {
        type: Boolean,
        default: true,
    },
    autoplay: {
        type: Boolean,
        default: false,
    },
    loop: {
        type: Boolean,
        default: false,
    },
    speed: {
        type: Number,
        default: 1,
    },
    title: {
        type: String,
        default: "",
    },
    segments: {
        type: Array<number>,
        default: () => [],
    },
    onComplete: {
        type: Function,
        default: null,
    },
    onSegmentComplete: {
        type: Function,
        default: null,
    },
});

const isPlaying = ref(false);
const isLoaded = ref(false);
const lottie = ref(null);

watch(
    () => props.shouldBePlaying,
    (value) => {
        if (value) {
            play();
        } else {
            pause();
        }
    }
);

watch(
    () => props.speed,
    (value) => setSpeed(value)
);

watch(
    () => props.segments,
    (value) => {
        if (value.length) {
            playSegments(value);
        } else {
            pause();
        }
    }
);

const setAnimationController = () => {
    setSpeed(props.speed);

    if (props.segments?.length) {
        playSegments(props.segments);
    }
};

const play = () => lottie.value?.play();

const pause = () => lottie.value?.pause();

const setSpeed = (value: number) => lottie.value?.setSpeed(value);

const playSegments = (range: number[]) =>
    lottie.value.playSegments(range, props.isSegmentForced);

const complete = () => {
    if (props.onComplete) {
        props.onComplete();
    }
};

const loopComplete = () => {
    if (props.onSegmentComplete) {
        props.onSegmentComplete();
    }
};

onMounted(() => {
    isLoaded.value = true;
});
</script>
