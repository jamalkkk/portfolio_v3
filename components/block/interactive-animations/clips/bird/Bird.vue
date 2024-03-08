<style lang="scss" src="./bird.scss"></style>

<template>
    <div>
        <Animation
            class="b-bird"
            title="bird"
            :shouldBePlaying="isAnimating"
            :autoplay="isAnimating"
            :loop="true"
            :speed="currentSpeed"
            :onSegmentComplete="onSegmentComplete"
        />
        <Sound
            title="bird"
            :volume="0.1"
            :shouldBePlaying="isAnimating && isSoundActive"
        />
    </div>
</template>

<script setup lang="ts">
import { useSounds } from "~/store/useSounds";

const soundsStore = useSounds();
const { setIsSoundActive } = soundsStore;
const { isSoundActive } = storeToRefs(soundsStore);

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

const HoverTime = 500;
const IdleSpeed = 0.00001;
const ActiveSpeed = 1.7;

const isAnimating = ref(false);
const hoverTimer = ref<NodeJS.Timeout>();
const currentSpeed = ref<Number>(ActiveSpeed);

watch(
    () => props.isHovered,
    (value) => {
        if (value && !isAnimating.value) {
            hoverTimer.value = setTimeout(() => {
                isAnimating.value = true;
                currentSpeed.value = ActiveSpeed;
            }, HoverTime);
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

const onSegmentComplete = () => {
    isAnimating.value = false;
    currentSpeed.value = IdleSpeed;
};
</script>