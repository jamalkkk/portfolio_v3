<style lang="scss" src="./player.scss"></style>

<template>
    <div
        :class="[
            'b-player',
            {
                'is-loading': !isReady,
                'is-playing': isPlayerPlaying,
                'is-mouse-hidden': !isPlayerMouseMoving,
            },
        ]"
    >
        <div class="player-loader">
            <icon
                class="loader-icon"
                name="loader"
                :is-button="true"
                :size="3"
            />
        </div>
        <div class="player-wrapper">
            <YoutubeVue3
                ref="$playerWrapper"
                :videoid="video.videoId"
                :loop="flase"
                :width="480"
                :height="320"
                @ended="setIsPlaying(false)"
                @paused="setIsPlaying(false)"
                @played="setIsPlaying(true)"
            />
            <!-- <VueVideoWrapper
            
                ref="$playerWrapper"
                :player="video.type"
                :videoId="video.videoId"
                :height="'100%'"
                :width="'100%'"
                :controls="true"
                :no-cookie="true"
                :options="vimeoOptions"
                :player-vars="youtubeOptions"
                @play="setIsPlaying(true)"
                @pause="setIsPlaying(false)"
                @ended="setIsPlaying(false)"
                @ready="isReady = true"
                @loaded="isReady = true"
            /> -->
        </div>
        <div
            class="player-overlay"
            @click="setStoreShouldBePlaying"
            @mousemove="handleMousemove"
        ></div>
    </div>
</template>

<script setup lang="ts">
import type { VideoType } from "~/types/types";

import { usePlayer } from "~/store/usePlayer";
import { useSwiperStore } from "~/store/useSwiperStore";
import { useTheme } from "~/store/useTheme";

const playerStore = usePlayer();
const swiperStore = useSwiperStore();
const themeStore = useTheme();

const {
    setIsPlaying,
    setShouldBePlaying,
    setIsPlayerMouseMoving,
    setShouldBePlayingWhenBack,
    setPlayerActiveIndex,
} = playerStore;

const { setIsSpaceBarPressed } = swiperStore;

const { isSpaceBarPressed, swiperActiveIndex, videoSlideIndices } =
    storeToRefs(swiperStore);

const {
    isPlaying,
    isPlayerMouseMoving,
    playerActiveIndex,
    shouldBePlaying,
    shouldBePlayingWhenBack,
} = storeToRefs(playerStore);

const { negative } = storeToRefs(themeStore);

const props = defineProps({
    video: {
        type: Object as PropType<VideoType>,
        default: () => ({}),
    },
    index: {
        type: Number as () => Number,
        default: 0,
    },
});

const $playerWrapper = ref<HTMLElement>();

const isReady = ref(false);
const isSlideActive = ref(false);
const isPlayerPlaying = ref(false);
const mouseMovingTimeout = ref<NodeJS.Timeout | null>(null);
const youtubeOptions = ref({ controls: 1 });
const duration = ref(0);

const isYoutube = computed(() => props.video.type === "youtube");

const vimeoOptions = computed(() => {
    return { transparent: false, color: negative.value };
});

const play = () => {
    if (isYoutube.value) {
        $playerWrapper.value?.player.playVideo();
    } else {
        $playerWrapper.value?.play();
    }
};

const pause = () => {
    if (isYoutube.value) {
        $playerWrapper.value?.player.pauseVideo();
    } else {
        $playerWrapper.value?.pause();
    }
};

const setStoreShouldBePlaying = () => {
    if (isReady.value) {
        setShouldBePlaying(
            props.index === (swiperActiveIndex.value ? props.index : -1)
        );
    }
};

const setStoreShouldBePlayingWhenBack = (value: boolean) => {
    if (value) {
        if (shouldBePlayingWhenBack.value) {
            play();
        }
    } else {
        if (isPlayerPlaying.value) {
            pause();
            setShouldBePlayingWhenBack(true);
        } else {
            setShouldBePlayingWhenBack(false);
        }
    }
};

// const handleIsReady = () => {
//     isReady.value = true;
// };

// const handlePlay = () => {
//     setIsPlaying(true);
// };

// const handlePause = () => {
//     setIsPlaying(false);
// };

const handleMousemove = () => {
    if (!mouseMovingTimeout.value) {
        setIsPlayerMouseMoving(true);

        mouseMovingTimeout.value = setTimeout(() => {
            setIsPlayerMouseMoving(false);
            mouseMovingTimeout.value = null;
        }, 2000);
    }
};

const handlePageLeave = () => {
    setStoreShouldBePlayingWhenBack(!document.hidden);
};

const initialiseEventListeners = () => {
    window.addEventListener("visibilitychange", handlePageLeave);
};

watch(
    () => isReady.value,
    (value) => {
        isPlayerPlaying.value =
            value && swiperActiveIndex.value === props.index;
    }
);

watch(
    () => isPlaying.value,
    () => {
        duration.value = 200;
    }
);

watch(
    () => isSpaceBarPressed.value,
    (value) => {
        if (value) {
            setStoreShouldBePlaying();
            setIsSpaceBarPressed(false);
        }
    }
);

watch(
    () => shouldBePlaying.value,
    (value) => {
        if (value) {
            if (isSlideActive.value) {
                play();
            }
        } else {
            pause();
        }
    }
);

watch(
    () => swiperActiveIndex.value,
    (value) => {
        isSlideActive.value = props.index === value;

        if (props.index !== value && isPlayerPlaying.value) {
            setStoreShouldBePlaying();
        }
    }
);

onMounted(() => {
    initialiseEventListeners();
});

onBeforeUnmount(() => {
    window.removeEventListener("visibilitychange", handlePageLeave);
});
</script>
