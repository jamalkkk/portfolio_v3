<template>
    <div>
        <Animation
            class="b-bike"
            title="bike"
            :shouldBePlaying="isActive"
            :speed="currentSpeed"
            :loop="true"
        />
        <sound
            title="bikeChain"
            :shouldBePlaying="isActive && isSoundActive"
            :loop="true"
            :volume="0.1"
        />
        <sound title="bikeBell" :shouldBePlaying="shouldBellBePlaying" />
    </div>
</template>
<script setup lang="ts">
import { useSounds } from "~/store/useSounds";

const soundsStore = useSounds();
const { isSoundActive } = soundsStore;

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

const isActive = ref(false);
const isSpeedingUp = ref(false);
const isSpeedingDown = ref(false);
const shouldBePlaying = ref(false);
const shouldBellBePlaying = ref(false);
const soundPlaying = ref("");
const currentSpeed = ref(0);
const maxSpeed = 3;
const speedIncrement = 0.05;
const speedIncrementTime = 70;
const hoverTime = 1000;
const hoverTimer = ref<NodeJS.Timeout | null>();
const interval = ref<NodeJS.Timeout | null>();

const isBellPlaying = computed(() => {
    return $store.state.sounds.bikeBell;
});

const clearHoverTimer = () => {
    if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
        shouldBePlaying.value = false;
    }
};

const increaseSpeed = () => {
    if (!isSpeedingUp.value) {
        isActive.value = true;
        isSpeedingUp.value = true;
    }

    resetSpeedInterval(true);
    interval = setInterval(() => {
        if (currentSpeed.value <= maxSpeed) {
            setSpeed(speedIncrement);
        } else {
            resetSpeedInterval(false, false);
        }
    }, speedIncrementTime);
};

const decreaseSpeed = () => {
    if (!isSpeedingDown.value) {
        isSpeedingDown.value = true;
        resetSpeedInterval(false);
    }

    interval = setInterval(() => {
        if (currentSpeed.value >= 0) {
            setSpeed(-speedIncrement);
        } else {
            resetSpeedInterval(false, false);
            isActive.value = false;
        }
    }, speedIncrementTime);
};

const resetSpeedInterval = (isIncrease, isChanging = true) => {
    clearInterval(interval);
    interval = null;
    isSpeedingUp.value = isIncrease && isChanging;
    isSpeedingDown.value = !isIncrease && isChanging;
};

const setSpeed = (value) => {
    currentSpeed.value += value;
};

watch(
    () => props.isHovered,
    (value) => {
        if (value && !shouldBePlaying.value) {
            hoverTimer = setTimeout(() => {
                shouldBePlaying.value = true;
            }, hoverTime);
        } else {
            clearHoverTimer();
        }
    }
);

watch(
    () => props.isClicked,
    (value) => {
        if (value && isSoundActive.value && !isBellPlaying.value) {
            shouldBellBePlaying.value = true;
        }
    }
);

watch(isBellPlaying, (value) => {
    if (!value) {
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
