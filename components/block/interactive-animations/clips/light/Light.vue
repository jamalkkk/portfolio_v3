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
    </div>
</template>

<script setup lang="ts">
import { useTheme } from "~/store/useTheme";
import { useSounds } from "~/store/useSounds";
import { useLoader } from "~/store/useLoader";

const soundsStore = useSounds();
const { isSoundActive } = storeToRefs(soundsStore);

const themeStore = useTheme();
const { toggleIsDarkTheme } = themeStore;

const loaderStore = useLoader();
const { isLoaderActive } = storeToRefs(loaderStore);

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

// Uncomment to enable light swinging after loader is done
// watch( () => isLoaderActive.value, (value) => {
//     if (!value) {
//         moveLight();
//     }
// });

const moveLight = () => {
    isSwinging.value = true;

    setTimeout(() => (isSwinging.value = false), SwingTime);
};
</script>
