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
                <div class="ia-clips">
                    <Bird
                        class="ia-clip"
                        :is-hovered="hoveredClip === 'bird'"
                    />
                </div>
                <JKSvg
                    class="ia-scene"
                    :title="`scene${isSmallScreen ? '-sm' : ''}`"
                />
                <div class="ia-clips">
                    <component
                        v-for="(clip, i) in clips"
                        :is="clip.name"
                        :key="i"
                        class="ia-clip"
                        :is-hovered="hoveredClip === clip.name"
                        :is-clicked="clickedClip === clip.name"
                    />
                </div>
                <div class="ia-listeners">
                    <div
                        v-for="(listener, i) in listeners"
                        :key="i"
                        :class="[
                            `ia-listener listener-${listener.name}`,
                            {
                                'has-hover': listener.hasHover,
                            },
                        ]"
                        @mouseenter="() => handleMouseEnter(listener.name)"
                        @mouseleave="handleMouseLeave"
                        @click="() => handleClick(listener)"
                    />
                </div>
                <Infos class="ia-infos" />
                <sound
                    title="background"
                    :shouldBePlaying="shouldBGSoundBePlaying"
                    :volume="0.03"
                    :loop="true"
                    :restart="false"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, computed, watch } from "vue";
import { useStore } from "vuex";

const Clips = [
    {
        name: "ball",
        hasSound: true,
        hasHover: true,
    },
    {
        name: "bike",
        hasSound: true,
        hasHover: true,
    },
    {
        name: "cat",
        hasSound: true,
        hasHover: true,
    },
    {
        name: "clock",
        hasSound: false,
        hasHover: false,
    },
    {
        name: "poster",
        hasSound: true,
        hasHover: false,
    },
    {
        name: "light",
        hasSound: false,
        hasHover: false,
    },
    {
        name: "desktop",
        hasSound: false,
        hasHover: true,
    },
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

import { useApp } from "~/store/useApp";
import { useLoader } from "~/store/useLoader";
import { useSound } from "~/store/useSound";

const appStore = useApp();
const loaderStore = useLoader();
const soundStore = useSound();
const { scrollToProjects } = useCommon();

const {
    isHomeActive,
    isUserOnPage,
    isInfosActive,
    isInfoInfoActive,
    isSmallScreen,
    toggleIsInfosActive,
    setIsInfoInfoActive,
} = appStore;
const { isLoaderActive } = loaderStore;
const { isSoundActive, setIsActive } = soundStore;

const shouldBGSoundBePlaying = ref(false);
const hoveredClip = ref("");
const clickedClip = ref("");
const isSoundSupposedActive = isSupposedActive;

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

function handleClick({ name, hasSound }) {
    switch (name) {
        case "laptop":
            scrollToProjects();
            break;

        case "headphones":
            toggleSound();
            break;

        case "books":
            toggleIsInfosActive();
            break;

        default:
            clickedClip.value = name;
            break;
    }

    if (hasSound && !isSoundActive.value && !isInfoInfoActive.value) {
        setIsInfoInfoActive(true);
    }
}

const handleMouseEnter = (listener) => (hoveredClip.value = listener);

const handleMouseLeave = () => (hoveredClip.value = "");

const setShouldBGSoundBePlaying = () =>
    (shouldBGSoundBePlaying.value = isSoundActive.value && isUserOnPage.value);

const toggleSound = () => setIsActive(!isSoundActive.value);

onMounted(() => {
    setShouldBGSoundBePlaying();
});
</script>


<script>
import { mapMutations } from "vuex";

const Clips = [
    {
        name: "ball",
        hasSound: true,
        hasHover: true,
    },
    {
        name: "bike",
        hasSound: true,
        hasHover: true,
    },
    {
        name: "cat",
        hasSound: true,
        hasHover: true,
    },
    {
        name: "clock",
        hasSound: false,
        hasHover: false,
    },
    {
        name: "poster",
        hasSound: true,
        hasHover: false,
    },
    {
        name: "light",
        hasSound: false,
        hasHover: false,
    },
    {
        name: "desktop",
        hasSound: false,
        hasHover: true,
    },
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

export default {
    name: "InteractiveAnimations",
    components: { Clips, Listeners },
    data() {
        return {
            shouldBGSoundBePlaying: false,
            hoveredClip: "",
            clickedClip: "",
            clips: Clips,
            listeners: Listeners,
        };
    },
    computed: {
        isHomeActive() {
            return this.$store.state.isHomeActive;
        },
        isUserOnPage() {
            return this.$store.state.isUserOnPage;
        },
        isInfosActive() {
            return this.$store.state.isInfosActive;
        },
        isInfoInfoActive() {
            return this.$store.state.isInfoInfoActive;
        },
        isLoaderActive() {
            return this.$store.state.loader.isLoaderActive;
        },
        isSoundActive() {
            return this.$store.state.sounds.isActive;
        },
        isSoundSupposedActive() {
            return this.$store.state.sounds.isSupposedActive;
        },
        isSmallScreen() {
            return this.$store.state.isSmallScreen;
        },
    },
    watch: {
        isInfoInfoActive(value) {
            if (value) {
                setTimeout(() => this.setIsInfoInfoActive(false), 4000);
            }
        },
        isSoundActive() {
            this.setShouldBGSoundBePlaying();
        },
        isUserOnPage() {
            this.setShouldBGSoundBePlaying();
        },
        clickedClip(value) {
            if (value) {
                setTimeout(() => (this.clickedClip = ""), 1);
            }
        },
    },
    methods: {
        handleClick({ name, hasSound }) {
            switch (name) {
                case "laptop":
                    this.scrollToProjects();
                    break;

                case "headphones":
                    this.toggleSound();
                    break;

                case "books":
                    this.toggleIsInfosActive();
                    break;

                default:
                    this.clickedClip = name;
                    break;
            }

            if (hasSound && !this.isSoundActive && !this.isInfoInfoActive) {
                this.setIsInfoInfoActive(true);
            }
        },
        handleMouseEnter(listener) {
            this.hoveredClip = listener;
        },
        handleMouseLeave() {
            this.hoveredClip = "";
        },
        setShouldBGSoundBePlaying() {
            this.shouldBGSoundBePlaying =
                this.isSoundActive && this.isUserOnPage;
        },
        toggleSound() {
            this.setIsSoundActive(!this.isSoundActive);
        },
        ...mapMutations({
            setIsInfoInfoActive: "setIsInfoInfoActive",
            toggleIsInfosActive: "toggleIsInfosActive",
            setIsSoundActive: "sounds/setIsActive",
        }),
    },
    mounted() {
        this.setShouldBGSoundBePlaying();
    },
};
</script>