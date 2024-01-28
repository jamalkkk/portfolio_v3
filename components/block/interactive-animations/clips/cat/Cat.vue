<style lang="scss" src="./cat.scss"></style>

<template>
    <div>
        <Animation
            class="b-cat"
            title="cat"
            :shouldBePlaying="true"
            :isSegmentForce="true"
            :autoplay="false"
            :loop="true"
            :speed="speed"
            :segments="Segments[activeSegment]"
            :onSegmentComplete="onSegmentComplete"
        />
        <Sound title="cat" :shouldBePlaying="shouldPlaySound" />
    </div>
</template>
<script setup lang="ts">
import { useSounds } from "~/store/useSounds";
// import { CatSegmentsType } from "~/types/common";

const soundsStore = useSounds();
const { isSoundActive, activeSounds } = storeToRefs(soundsStore);

const Segments = {
    blink: [1, 216],
    sleep: [217, 384],
};

const StartSpeed = 10000; // run the first animation very fast
const NormalSpeed = 3;

const props = defineProps({
    isHovered: {
        type: Boolean,
        default: false,
    },
    isClicked: {
        type: Boolean,
        default: false,
    },
});

const isReady = ref(false);
const shouldPlayBlink = ref(false);
const shouldPlaySound = ref(false);
const activeSegment = ref<"sleep" | "blink">("sleep");
const speed = ref(StartSpeed);

watch(
    () => props.isHovered,
    (value) => {
        shouldPlayBlink.value = value;
        if (value) {
            activeSegment.value = "blink";
        }
    }
);

watch(
    () => props.isClicked,
    (value) => {
        if (value && isSoundActive && !activeSounds.value.includes("cat")) {
            shouldPlaySound.value = true;
        }
    }
);

watch(activeSounds, (value) => {
    if (!value.includes("cat")) {
        shouldPlaySound.value = false;
    }
});

const onSegmentComplete = () => {
    if (!shouldPlayBlink.value) {
        activeSegment.value = "sleep";
    }

    if (!isReady.value) {
        isReady.value = true;
        speed.value = NormalSpeed;
    }
};
</script>
