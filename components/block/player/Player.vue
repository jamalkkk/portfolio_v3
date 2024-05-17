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
        <!-- Loader -->
        <div class="player-loader">
            <icon class="loader-icon" name="loader" :size="3" />
        </div>

        <!-- Player Wrapper -->
        <div class="player-wrapper">
            <Youtube
                v-if="isYoutube"
                ref="$playerWrapper"
                :videoid="video.id"
                :autoplay="false"
                :controls="1"
                :no-cookie="true"
                @ended="handlePause"
                @paused="handlePause"
                @played="handlePlay"
                @ready="handleIsReady"
            />

            <Vimeo
                v-else
                ref="$playerWrapper"
                :video-id="video.id"
                height="100%"
                width="100%"
                :autoplay="false"
                muted
                :options="vimeoOptions"
                @ended="handlePause"
                @pause="handlePause"
                @play="handlePlay"
                @playing="handlePlay"
                @ready="handleIsReady"
            />
        </div>

        <!-- Overlay -->
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
const isSlideActive = ref(props.index == swiperActiveIndex.value);
const isPlayerPlaying = ref(false);
const mouseMovingTimeout = ref<NodeJS.Timeout | null>(null);

const isYoutube = props.video.type === "youtube";
const vimeoOptions = { transparent: false, color: "333333", title: false };

const play = () => {
    try {
        isYoutube
            ? // @ts-ignore - ignore error
              $playerWrapper.value?.player.playVideo()
            : // @ts-ignore - ignore error
              $playerWrapper.value?.play();
    } catch (error) {
        console.error("Error playing video", error);
    }
};

const pause = () => {
    try {
        isYoutube
            ? // @ts-ignore - ignore error
              $playerWrapper.value?.player.pauseVideo()
            : // @ts-ignore - ignore error
              $playerWrapper.value?.pause();
    } catch (error) {
        console.error("Error pausing video", error);
    }
};

const setStoreShouldBePlaying = () => {
    setShouldBePlaying(!isPlayerPlaying.value);
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

const handleIsReady = () => {
    isReady.value = true;
};

const handlePlay = () => {
    setIsPlaying(true);
};

const handlePause = () => {
    setIsPlaying(false);
};

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
    // Youtube player does not emit ready event
    if (!isReady.value && isYoutube) {
        setTimeout(() => {
            handleIsReady();
        }, 1000);
    }

    window.addEventListener("visibilitychange", handlePageLeave);
};

// watch(
//     () => isReady.value,
//     (value) => {
//         // isPlayerPlaying.value =
//         //     value && swiperActiveIndex.value === props.index;
//     }
// );

watch(
    () => isPlaying.value,
    (value) => {
        isPlayerPlaying.value = value && isSlideActive.value;
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
