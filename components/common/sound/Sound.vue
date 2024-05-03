<template></template>

<script setup lang="ts">
// Imports
import background from "~/assets/audios/background.mp3";
import ball from "~/assets/audios/ball.mp3";
import bikeBell from "~/assets/audios/bikeBell.mp3";
import bikeChain from "~/assets/audios/bikeChain.mp3";
import bird from "~/assets/audios/bird.mp3";
import cat from "~/assets/audios/cat.mp3";
import desktop from "~/assets/audios/desktop.mp3";
import desktopType from "~/assets/audios/desktopType.mp3";
import lightSwitch from "~/assets/audios/lightSwitch.mp3";
import poster_1 from "~/assets/audios/poster_1.mp3";
import poster_2 from "~/assets/audios/poster_2.mp3";
import poster_3 from "~/assets/audios/poster_3.mp3";

// Object containing audio files
const audioFiles = {
    background,
    ball,
    bikeBell,
    bikeChain,
    bird,
    cat,
    desktop,
    desktopType,
    lightSwitch,
    poster_1,
    poster_2,
    poster_3,
};

import { useSounds } from "~/store/useSounds";

const soundsStore = useSounds();
const { setActiveSounds } = soundsStore;
const { isSoundActive } = storeToRefs(soundsStore);

const props = defineProps({
    shouldBePlaying: {
        type: Boolean,
        default: false,
    },
    loop: {
        type: Boolean,
        default: false,
    },
    restart: {
        type: Boolean,
        default: true,
    },
    volume: {
        type: Number,
        default: 0.3,
    },
    title: {
        type: String,
        default: "poster",
    },
    onPlay: {
        type: Function,
        default: () => null,
    },
    onPause: {
        type: Function,
        default: () => null,
    },
});

const isCurrentSoundPlaying = ref(false);
const isReady = ref(false);
const audio = ref<HTMLAudioElement>();

const setUpAudio = async () => {
    // const file = `../../../public/audios/${props.title}.mp3`;

    try {
        // const audioFile = await import(
        //     /* @vite-ignore */ audioFiles[props.title]
        // );
        audio.value = new Audio(audioFiles[props.title]);

        audio.value.volume = props.volume;
        audio.value.loop = props.loop;

        audio.value.oncanplay = () => (isReady.value = true);
        audio.value.onplay = () => setIsCurrentSoundPlaying(true);
        audio.value.onpause = () => setIsCurrentSoundPlaying(false);
        audio.value.onended = () => setIsCurrentSoundPlaying(false);
    } catch (error) {
        console.error("Failed to load audio file:", props.title, error);
    }
};

const play = () => {
    if (isReady.value) {
        if (props.restart) {
            if (audio.value) audio.value.currentTime = 0;
        }

        audio.value?.play();
    }
};

const pause = () => {
    if (isReady.value) {
        audio.value?.pause();
    }
};

const setIsCurrentSoundPlaying = (value: boolean) => {
    isCurrentSoundPlaying.value = value;
    setActiveSounds(props.title, value);
};

watch(isSoundActive, (value) => {
    if (!value && isCurrentSoundPlaying.value) {
        pause();
    }
});

watch(
    () => props.shouldBePlaying,
    (value) => {
        if (value && isSoundActive.value) {
            play();
        } else {
            pause();
        }
    }
);

onMounted(async () => {
    setTimeout(setUpAudio, 10);
});
</script>
