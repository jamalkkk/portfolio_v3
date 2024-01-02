
<template>
    <div>
        <Animation
            class="b-ball absolute bottom-0"
            title="ball"
            :isSegmentForced="true"
            :loop="false"
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
const { isSoundActive } = soundsStore;

const Segments = {
    roll: [1, 192],
    bounce: [193, 288],
};

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

const clearTimer = () => {
    if (hoverTimer.value) {
        clearTimeout(hoverTimer.value);
        hoverTimer.value = null;
    }
};

const onComplete = () => {
    activeSegment.value = "";
};

watch(
    () => props.isHovered,
    (value) => {
        if (value && !isAnimating.value) {
            hoverTimer.value = setTimeout(() => {
                if (!isAnimating.value) {
                    activeSegment.value = "roll";
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
        }
    }
);

onBeforeUnmount(() => {
    clearTimer();
});
</script>
