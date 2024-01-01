
<script setup lang="ts">
import { useSounds } from "~/store/useSounds";

const soundsStore = useSounds();
const { setIsSoundPlaying, isCurrentPlaying } = soundsStore;
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
    type: {
        type: String,
        default: "mp3",
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
const isPlaying = isCurrentPlaying(props.title);

const isReady = ref(false);
const audio = ref<HTMLAudioElement>();

const setUpAudio = async () => {
    const file = `../../../assets/audio/${props.title}.${props.type}`;

    try {
        const audioFile = await import(file); /* @vite-ignore */
        audio.value = new Audio(audioFile.default);

        audio.value.volume = props.volume;
        audio.value.loop = props.loop;

        // audio.value.oncanplay = () => {
        //     isReady.value = true;
        // };

        // audio.value.onplay = () => {
        //     setIsSoundPlaying({ title: props.title, value: true });
        // };

        // audio.value.onpause = () => {
        //     setIsSoundPlaying({ title: props.title, value: false });
        // };

        // audio.value.onended = () => {
        //     setIsSoundPlaying({ title: props.title, value: false });
        // };
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

watch(isSoundActive, (value) => {
    if (!value && isPlaying.value) {
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
    setUpAudio();
});
</script>
