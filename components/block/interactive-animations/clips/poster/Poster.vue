<template>
    <div v-bind="$attrs">
        <Sound
            v-for="i in 3"
            :key="i"
            :title="`poster_${i}`"
            :shouldBePlaying="shouldBePlaying && activeSoundIndex === i"
        />
    </div>
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
const activeSoundIndex = ref(0);

watch(
    () => props.isClicked,
    (value) => {
        if (value && isSoundActive && !activeSounds.value.includes("poster")) {
            // Randomize the poster sound
            activeSoundIndex.value = Math.floor(Math.random() * 3) + 1;
            shouldBePlaying.value = true;
        }
    }
);

watch(activeSounds, (value) => {
    if (!value.includes("poster")) shouldBePlaying.value = false;
});
</script>
