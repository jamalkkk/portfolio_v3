<style lang="scss" src="./clock.scss"></style>

<template>
    <div class="b-clock">
        <JKSvg class="clock-frame" name="animation_clock-frame" />
        <div class="clock-hands">
            <JKSvg
                class="clock-hour"
                name="animation_clock-hour"
                :style="{ transform: hourTransform }"
            />
            <JKSvg
                class="clock-minute"
                name="animation_clock-minute"
                :style="{ transform: minuteTransform }"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const hourTransform = ref<string>("rotate(0deg)");
const minuteTransform = ref<string>("rotate(0deg)");
const currentHoursDeg = ref<number>(0);
const currentMinutesDeg = ref<number>(0);

const isHoursRotating = ref<boolean>(false);
const isMinutesRotating = ref<boolean>(false);
let interval: NodeJS.Timeout | null = null;

const props = defineProps({
    isClicked: {
        type: Boolean,
        default: false,
    },
});

const setTime = () => {
    const now = new Date();
    const orgMinutes = now.getMinutes();
    const orgHours = now.getHours();

    const minutes = orgMinutes * (360 / 60) - 90;
    const additionalDegrees = (orgMinutes / 60) * 30;
    const hours = (orgHours % 12) * (360 / 12) + additionalDegrees - 90;

    currentHoursDeg.value = hours;
    currentMinutesDeg.value = minutes;

    hourTransform.value = `rotate(${hours}deg)`;
    minuteTransform.value = `rotate(${minutes}deg)`;
};

const updateTime = () => {
    setTime();
    interval = setInterval(setTime, 60000);
};

const rotateHourHand = () => {
    let degree = currentHoursDeg.value;
    let fullRotationReached = false;

    const rotate = () => {
        if (degree > 360) {
            degree = 0;
            fullRotationReached = true;
        }

        hourTransform.value = `rotate(${degree}deg)`;
        degree++;

        if (
            (!fullRotationReached && degree > currentHoursDeg.value) ||
            (fullRotationReached && degree < currentHoursDeg.value)
        ) {
            setTimeout(rotate, 9);
        } else {
            isHoursRotating.value = false;
        }
    };

    rotate();
};

const rotateMinuteHand = () => {
    let degree = currentMinutesDeg.value;
    let fullRotationReached = false;

    const rotate = () => {
        if (degree < -360) {
            degree = 360;
            fullRotationReached = true;
        }

        minuteTransform.value = `rotate(${degree}deg)`;
        degree--;

        if (
            (!fullRotationReached && degree < currentMinutesDeg.value) ||
            (fullRotationReached && degree > currentMinutesDeg.value)
        ) {
            setTimeout(rotate, 1);
        } else {
            isMinutesRotating.value = false;
        }
    };

    rotate();
};

const handleClick = () => {
    if (isMinutesRotating.value || isHoursRotating.value) return;

    isMinutesRotating.value = true;
    isHoursRotating.value = true;
    rotateHourHand();
    rotateMinuteHand();
};

watch(
    () => props.isClicked,
    (value) => {
        if (value) {
            handleClick();
        }
    }
);

onMounted(updateTime);
onUnmounted(() => {
    if (interval) clearInterval(interval);
});
</script>