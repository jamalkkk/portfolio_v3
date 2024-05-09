<template>
    <div>
        <Animation
            class="b-bike"
            title="bike"
            :shouldBePlaying="true"
            :speed="currentSpeed"
            :loop="true"
        />
        <Sound
            title="bikeChain"
            :shouldBePlaying="isActive && isSoundActive"
            :loop="true"
            :volume="0.1"
        />
        <Sound title="bikeBell" :shouldBePlaying="shouldBellBePlaying" />
    </div>
</template>
<script setup lang="ts">
import { useSounds } from "~/store/useSounds";

const soundsStore = useSounds();
const { isSoundActive, activeSounds } = storeToRefs(soundsStore);

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

const MaxSpeed = 3;
const MinSpeed = 0.03;
const SpeedIncrement = 0.04;
const SpeedIncrementTime = 70;
const HoverTime = 500;

const isActive = ref(false);
const isSpeedingUp = ref(false);
const isSpeedingDown = ref(false);
const shouldBePlaying = ref(false);
const shouldBellBePlaying = ref(false);
const soundPlaying = ref("");
const currentSpeed = ref(MinSpeed);
const hoverTimer = ref<NodeJS.Timeout | undefined>();
const interval = ref<NodeJS.Timeout | undefined>();

const clearHoverTimer = () => {
    // if bike chain sound is playing
    if (hoverTimer.value) {
        clearTimeout(hoverTimer.value);
        hoverTimer.value = undefined;
        shouldBePlaying.value = false;
    }
};

const increaseSpeed = () => {
    if (!isSpeedingUp.value) {
        isActive.value = true;
        isSpeedingUp.value = true;
    }

    resetSpeedInterval(true);
    interval.value = setInterval(() => {
        if (currentSpeed.value <= MaxSpeed) {
            setSpeed(SpeedIncrement);
        } else {
            resetSpeedInterval(false, false);
        }
    }, SpeedIncrementTime);
};

const decreaseSpeed = () => {
    if (!isSpeedingDown.value) {
        isSpeedingDown.value = true;
        resetSpeedInterval(false);
    }

    interval.value = setInterval(() => {
        if (currentSpeed.value >= MinSpeed) {
            setSpeed(-SpeedIncrement);
        } else {
            resetSpeedInterval(false, false);
            isActive.value = false;
        }
    }, SpeedIncrementTime);
};

const resetSpeedInterval = (
    isIncrease: boolean,
    isChanging: boolean = true
) => {
    clearInterval(interval.value);
    interval.value = undefined;
    isSpeedingUp.value = isIncrease && isChanging;
    isSpeedingDown.value = !isIncrease && isChanging;
};

const setSpeed = (value: number) => {
    currentSpeed.value += value;
};

watch(
    () => props.isHovered,
    (value) => {
        if (value && !shouldBePlaying.value) {
            hoverTimer.value = setTimeout(() => {
                shouldBePlaying.value = true;
            }, HoverTime);
        } else {
            clearHoverTimer();
        }
    }
);

watch(
    () => props.isClicked,
    (value) => {
        if (
            value &&
            isSoundActive &&
            !activeSounds.value.includes("bikeBell")
        ) {
            shouldBellBePlaying.value = true;
        }
    }
);

watch(activeSounds, (value) => {
    if (!value.includes("bikeBell")) {
        shouldBellBePlaying.value = false;
    }
});

watch(shouldBePlaying, (value) => {
    if (value) {
        increaseSpeed();
    } else {
        decreaseSpeed();
    }
});
</script>
