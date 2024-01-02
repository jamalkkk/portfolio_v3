<style lang="scss" src="./interactive-animations.scss"></style>

<template>
    <div
        :class="[
            'b-interactive-animations',
            {
                'is-centered': isHomeActive,
            },
        ]"
    >
        <div class="ia-wrapper">
            <div class="ia-container">
                <!-- Bird -->
                <div class="ia-clips">
                    <Bird :isHovered="hoveredClip === 'bird'" class="ia-clip" />
                </div>

                <!-- Background Scene -->
                <JKSvg
                    :name="`animation_scene${isSmallScreen ? '-sm' : ''}`"
                    class="ia-scene"
                />

                <div class="ia-clips">
                    <component
                        v-for="(clip, i) in Clips"
                        :is="clip.name"
                        :key="i"
                        class="ia-clip"
                        :isHovered="hoveredClip === clip.name"
                        :isClicked="clickedClip === clip.name"
                    />
                    <Ball
                        :isHovered="hoveredClip === 'ball'"
                        :isClicked="clickedClip === 'ball'"
                        class="ia-clip"
                    />
                    <Bike
                        :isHovered="hoveredClip === 'bike'"
                        :isClicked="clickedClip === 'bike'"
                        class="ia-clip"
                    />
                </div>
                <!--  <div class="ia-listeners">
                    <div
                        v-for="(listener, i) in listeners"
                        :key="i"
                        :class="[
                            `ia-listener listener-${listener.name}`,
                            {
                                'has-hover': listener.hasHover,
                            },
                        ]"
                        @mouseenter="handleMouseEnter(listener.name)"
                        @mouseleave="handleMouseLeave"
                        @click="handleClick(listener)"
                    />
                </div>
                <Infos class="ia-infos" />
                <sound
                    title="background"
                    :shouldBePlaying="shouldBGSoundBePlaying"
                    :volume="0.03"
                    :loop="true"
                    :restart="false"
                /> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const Clips = [
    {
        name: "Ball",
        hasSound: true,
        hasHover: true,
    },
    // {
    //     name: "bike",
    //     hasSound: true,
    //     hasHover: true,
    // },
    // {
    //     name: "cat",
    //     hasSound: true,
    //     hasHover: true,
    // },
    // {
    //     name: "clock",
    //     hasSound: false,
    //     hasHover: false,
    // },
    // {
    //     name: "poster",
    //     hasSound: true,
    //     hasHover: false,
    // },
    // {
    //     name: "light",
    //     hasSound: false,
    //     hasHover: false,
    // },
    // {
    //     name: "desktop",
    //     hasSound: false,
    //     hasHover: true,
    // },
];
const Listeners = [
    {
        name: "bird",
        hasHover: true,
    },
    {
        name: "laptop",
    },
    {
        name: "headphones",
    },
    {
        name: "books",
    },
    ...Clips,
];

// export type ListenerName =
//     | "ball"
//     | "bike"
//     | "bird"
//     | "books"
//     | "cat"
//     | "clock"
//     | "desktop"
//     | "headphones"
//     | "laptop"
//     | "light"
//     | "poster";

export type ListenerType = {
    name: string;
    hasSound?: boolean;
    hasHover?: boolean;
};

import { useApp } from "~/store/useApp";
import { useLoader } from "~/store/useLoader";
import { useSounds } from "~/store/useSounds";

const appStore = useApp();
const loaderStore = useLoader();
const soundsStore = useSounds();
const { scrollToProjects } = useCommon();

const {
    isHomeActive,
    isInfosActive,
    isSmallScreen,
    toggleIsInfosActive,
    setIsInfoInfoActive,
} = appStore;
const { isLoaderActive } = loaderStore;
const { setIsSoundActive } = soundsStore;

const { isUserOnPage, isInfoInfoActive } = storeToRefs(appStore);
const { isSoundActive } = storeToRefs(soundsStore);

const shouldBGSoundBePlaying = ref(false);
const hoveredClip = ref("");
const clickedClip = ref("");

watch([isInfoInfoActive, isSoundActive, isUserOnPage], () => {
    setShouldBGSoundBePlaying();
});

watch(isInfoInfoActive, (value) => {
    if (value) {
        setTimeout(() => setIsInfoInfoActive(false), 4000);
    }
});

watch(clickedClip, (value) => {
    if (value) {
        setTimeout(() => (clickedClip.value = ""), 1);
    }
});

function handleClick({ name, hasSound }: ListenerType) {
    switch (name) {
        // Listeners without animation
        case "laptop":
            scrollToProjects();
            break;

        case "headphones":
            toggleSound();
            break;

        case "books":
            toggleIsInfosActive();
            break;

        // Rest of listeners
        default:
            clickedClip.value = name;
            break;
    }

    if (hasSound && !isSoundActive.value && !isInfoInfoActive.value) {
        setIsInfoInfoActive(true);
    }
}

const handleMouseEnter = (listener: ListenerType) =>
    (hoveredClip.value = listener.name);

const handleMouseLeave = () => (hoveredClip.value = "");

const setShouldBGSoundBePlaying = () =>
    (shouldBGSoundBePlaying.value = isSoundActive.value && isUserOnPage.value);

const toggleSound = () => setIsSoundActive(!isSoundActive.value);

onMounted(() => {
    setShouldBGSoundBePlaying();
});
</script>
