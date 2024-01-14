<template>
    <Sound title="poster" :should-be-playing="shouldBePlaying" :volume="0.1" />
</template>
<script setup lang="ts">
import { useSounds } from "~/store/useSounds";

const soundsStore = useSounds();
const { isSoundActive, activeSounds } = storeToRefs(soundsStore);

const props = defineProps({
    isClicked: {
        type: Boolean,
        default: false,
    },
});

const shouldBePlaying = ref(false);

watch(
    () => props.isClicked,
    (value) => {
        if (value && isSoundActive && !activeSounds.value.includes("poster")) {
            shouldBePlaying.value = true;
        }
    }
);

watch(activeSounds, (value) => {
    if (!value.includes("poster")) shouldBePlaying.value = false;
});
</script>
