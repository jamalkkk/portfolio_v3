<style lang="scss" src="./bird.scss"></style>

<template>
    <div>
        <Animation
            class="b-bird"
            title="bird"
            :shouldBePlaying="isAnimating"
            :autoplay="isAnimating"
            :loop="true"
            :speed="1.5"
            :onSegmentComplete="onSegmentComplete"
        />
        <Sound title="bird" type="wav" :volume="0.1" :shouldBePlaying="true" />
    </div>
</template>

<script setup lang="ts">
import { useSounds } from "~/store/useSounds";

const soundsStore = useSounds();
const { setIsSoundActive } = soundsStore;

const props = defineProps({
    isHovered: { type: Boolean, default: false },
    isClicked: { type: Boolean, default: false },
});

const isAnimating = ref(false);
const hoverTimer = ref<NodeJS.Timeout>();
const hoverTime = 1000;

watch(
    () => props.isHovered,
    (value) => {
        if (value && !isAnimating.value) {
            hoverTimer.value = setTimeout(
                () => (isAnimating.value = true),
                hoverTime
            );
        } else {
            clearTimer();
        }
    }
);

const clearTimer = () => {
    if (hoverTimer.value) {
        clearTimeout(hoverTimer.value);
        hoverTimer.value = undefined;
    }
};

const onSegmentComplete = () => (isAnimating.value = false);
</script>