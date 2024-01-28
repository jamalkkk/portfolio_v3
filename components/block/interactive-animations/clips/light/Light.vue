<style lang="scss" src="./light.scss"></style>

<template>
    <div>
        <JKSvg
            :class="['b-light', isSwinging ? 'is-swinging' : 'is-idle']"
            :style="{
                animationDuration:
                    (isSwinging ? SwingTime : SwingTime * 4) + 'ms',
            }"
            name="animation_light"
        />
        <Sound
            title="lightSwitch"
            :shouldBePlaying="isSwinging && isSoundActive"
            :volume="0.2"
        />
        <Sound
            title="lightSwing"
            :shouldBePlaying="isSwinging && isSoundActive"
            :volume="0.3"
        />
    </div>
</template>

<script setup lang="ts">
import { useTheme } from "~/store/useTheme";
import { useSounds } from "~/store/useSounds";

const soundsStore = useSounds();
const { isSoundActive } = storeToRefs(soundsStore);

const themeStore = useTheme();
const { toggleIsDarkTheme } = themeStore;

const props = defineProps({
    isClicked: {
        type: Boolean,
        default: false,
    },
});

const SwingTime = 500;

const isSwinging = ref(false);

watch(
    () => props.isClicked,
    (value) => {
        if (value && !isSwinging.value) {
            moveLight();
            toggleIsDarkTheme();
        }
    }
);

const moveLight = () => {
    isSwinging.value = true;

    setTimeout(() => (isSwinging.value = false), SwingTime);
};
</script>
