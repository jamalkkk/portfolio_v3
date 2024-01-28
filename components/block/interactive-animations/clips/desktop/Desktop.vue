<template>
    <div>
        <Animation
            title="desktop"
            :shouldBePlaying="true"
            :isSegmentForced="true"
            :autoplay="false"
            :loop="true"
            :speed="speed"
            :segments="Segments[activeSegment]"
            :onSegmentComplete="onSegmentComplete"
            class="absolute top-0 right-0 w-full h-full"
        />
        <Sound
            title="desktopType"
            :shouldBePlaying="activeSegment === 'type' && isDesktopSoundActive"
            :loop="true"
            :volume="0.1"
        />
    </div>
</template>


<script setup lang="ts">
import { useApp } from "~/store/useApp";
import { useSounds } from "~/store/useSounds";

const appStore = useApp();
const soundsStore = useSounds();
const { toggleShouldHomeBeActive } = appStore;
const { isHomeActive, isUserOnPage } = storeToRefs(appStore);
const { isSoundActive, activeSounds } = storeToRefs(soundsStore);

const props = defineProps({
    isHovered: {
        type: Boolean,
        default: false,
    },
    isClicked: {
        type: Boolean,
        default: false,
    },
});

const Segments = {
    type: [1, 360],
    coffee: [361, 599],
    look: [600, 960],
    standup: [961, 1008],
    standing: [1009, 1248],
    sitdown: [1249, 1296],
};

const StartSpeed = 10000; // run the first animation very fast
const NormalSpeed = 3;
const StandingSpeed = 3;

const isBeingHovered = ref(false);
const isDesktopSoundActive = ref(false);
const shouldBePlaying = ref(true);
const shouldPlaySegment = ref("type");
const activeSegment = ref("type");
const speed = ref(StartSpeed);

const segmentTimer = ref<NodeJS.Timeout | undefined>(undefined);

const setIsDesktopSoundBePlaying = () => {
    isDesktopSoundActive.value = isSoundActive.value && isUserOnPage.value;
};

const selectNextSegment = () => {
    if (!shouldPlaySegment.value) {
        setRandomSegment();
    } else {
        switch (shouldPlaySegment.value) {
            case "standup":
                activeSegment.value = !isHomeActive.value
                    ? shouldPlaySegment.value
                    : "type";
                shouldPlaySegment.value = isHomeActive.value
                    ? "sitdown"
                    : "standing";
                break;

            case "standing":
                activeSegment.value = shouldPlaySegment.value;
                shouldPlaySegment.value = isHomeActive.value
                    ? "sitdown"
                    : "standing";
                break;

            default:
                activeSegment.value = shouldPlaySegment.value;
                shouldPlaySegment.value = "";
                break;
        }
    }
};

const onSegmentComplete = () => {
    selectNextSegment();
};

const resetSegment = (value: boolean) => {
    shouldBePlaying.value = value;
};

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const setRandomSegment = () => {
    resetSegment(false);

    activeSegment.value = getRandomInt(3) === 2 ? "coffee" : "type";
    segmentTimer.value = setTimeout(() => resetSegment(true), 2000);
};

watch(
    () => props.isHovered,
    (value) => {
        if (value && !shouldPlaySegment.value) {
            shouldPlaySegment.value = "look";
        }
    }
);

watch(
    () => props.isClicked,
    (value) => {
        if (value) {
            toggleShouldHomeBeActive();
        }
    }
);

watch(isSoundActive, setIsDesktopSoundBePlaying);

watch(isUserOnPage, setIsDesktopSoundBePlaying);

watch(isHomeActive, (value) => {
    if (value && shouldPlaySegment.value === "standing") {
        shouldPlaySegment.value = "sitdown";
    } else if (!value && shouldPlaySegment.value !== "standing") {
        shouldPlaySegment.value = "standup";
    }
});

watch(activeSegment, (value) => {
    speed.value = value === "standing" ? StandingSpeed : NormalSpeed;
});

onMounted(() => {
    selectNextSegment();
});

onUnmounted(() => {
    if (segmentTimer.value) {
        clearTimeout(segmentTimer.value);
    }
});
</script>
