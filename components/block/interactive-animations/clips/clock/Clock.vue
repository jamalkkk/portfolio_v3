<style lang="scss" src="./clock.scss"></style>

<template>
    <div class="b-clock">
        <JKSvg class="clock-frame" name="animation_clock-frame" />
        <div class="clock-hands">
            <JKSvg
                class="clock-hour"
                name="animation_clock-hour"
                :style="{
                    transform: hourTransform,
                }"
            />
            <JKSvg
                class="clock-minute"
                name="animation_clock-minute"
                :style="{
                    transform: minuteTransform,
                }"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const hourTransform = ref<string>("0");
const minuteTransform = ref<string>("0");
let interval: NodeJS.Timeout | null = null;

const setTime = () => {
    const now = new Date();
    let orgMinutes = now.getMinutes();
    let orgHours = now.getHours();

    let minutes = orgMinutes * (360 / 60) - 90;
    const additionalDegrees = (orgMinutes / 60) * 30;

    let hours = orgHours > 12 ? orgHours - 12 : orgHours;
    hours = hours * (360 / 12) + additionalDegrees - 95;

    hourTransform.value = `rotate(${hours}deg)`;
    minuteTransform.value = `rotate(${minutes}deg)`;
};

const updateTime = () => {
    setTime();
    interval = setInterval(setTime, 60000);
};

onMounted(updateTime);
onUnmounted(() => {
    if (interval) clearInterval(interval);
});
</script>
