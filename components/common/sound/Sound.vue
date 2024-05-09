<template></template>
<script setup lang="ts">
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
const audio = ref();

const setUpAudio = async () => {
    const file = `../../../assets/audios/${props.title}.mp3`;

    try {
        const audioFile = await import(/* @vite-ignore */ file);
        audio.value = new Audio(audioFile.default);
        audio.value.play();
        // Fetch the audio file from the serverless function
        // const response = await fetch(`/audios?title=${props.title}`);

        // Check if the request was successful
        // if (!response.ok) {
        //     throw new Error("Failed to fetch audio file");
        // }

        // Convert the audio stream into a Blob
        // const audioBlob = await response.blob();

        // Create an object URL for the audio Blob
        // const audioUrl = URL.createObjectURL(audioBlob);

        // Create an Audio object with the object URL
        // const audioElement = new Audio(audioUrl);

        audio.value.volume = props.volume;
        audio.value.loop = props.loop;

        audio.value.oncanplay = () => (isReady.value = true);
        audio.value.onplay = () => setIsCurrentSoundPlaying(true);
        audio.value.onpause = () => setIsCurrentSoundPlaying(false);
        audio.value.onended = () => setIsCurrentSoundPlaying(false);
    } catch (error) {
        console.error("Failed to load audio file:", error);
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
    // setUpAudio();
});
</script>
