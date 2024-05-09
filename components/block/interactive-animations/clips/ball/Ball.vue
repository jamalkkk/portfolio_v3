
<template>
    <div>
        <Animation
            class="b-ball absolute bottom-0"
            title="ball"
            :isSegmentForced="true"
            :loop="false"
            :speed="currentSpeed"
            :segments="Segments[activeSegment]"
            :onComplete="onComplete"
        />
        <Sound
            title="ball"
            :shouldBePlaying="activeSegment === 'bounce' && isSoundActive"
        />
    </div>
</template>

<script setup lang="ts">
import { useSounds } from "~/store/useSounds";

const soundsStore = useSounds();
const { isSoundActive } = storeToRefs(soundsStore);

const Segments = {
    roll: [1, 192],
    bounce: [193, 288],
};
const IdleSpeed = 0.00001;
const ActiveSpeed = 1;

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

const isAnimating = ref(false);
const activeSegment = ref("");
const hoverTimer = ref<NodeJS.Timeout | null>();
const currentSpeed = ref<Number>(IdleSpeed);

const clearTimer = () => {
    if (hoverTimer.value) {
        clearTimeout(hoverTimer.value);
        hoverTimer.value = null;
    }
};

const onComplete = () => {
    activeSegment.value = "";
    currentSpeed.value = IdleSpeed;
};

watch(
    () => props.isHovered,
    (value) => {
        if (value && !isAnimating.value) {
            hoverTimer.value = setTimeout(() => {
                if (!isAnimating.value) {
                    activeSegment.value = "roll";
                    currentSpeed.value = ActiveSpeed;
                }
            }, 1000);
        } else {
            clearTimer();
        }
    }
);

watch(
    () => props.isClicked,
    (value) => {
        if (value && !isAnimating.value) {
            clearTimer();
            activeSegment.value = "bounce";
            currentSpeed.value = ActiveSpeed;
        }
    }
);

onBeforeUnmount(() => clearTimer());
</script>
