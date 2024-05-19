<style lang="scss" src="./project-teaser.scss"></style>

<template>
    <div class="b-project-teaser" @click="showProject">
        <ImageFrame
            :class="[
                'project-teaser-frame',
                {
                    'is-clicked': isClicked,
                },
            ]"
            :size="400"
            :isOnlyWdith="false"
            :image="{ component: 'image', image: project.teaser }"
            :enlargeOnHover="true"
            :isThick="true"
            :isInverted="true"
            :shouldShowImmediately="true"
        >
            <template #content>
                <div class="project-teaser-wrapper">
                    <div
                        class="project-teaser-background absolute inset-0"
                    ></div>
                    <div class="project-teaser-content">
                        <Headline
                            tag="h2"
                            :text="project.title"
                            :isInverted="true"
                        />
                    </div>
                </div>
            </template>
        </ImageFrame>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useLoader } from "~/store/useLoader";
import { useSounds } from "~/store/useSounds";
import { usePlayer } from "~/store/usePlayer";

const soundsStore = useSounds();
const playerStore = usePlayer();
const loaderStore = useLoader();

const { setIsSoundActive, setIsSoundSupposedActive } = soundsStore;
const { setIsUIHidden } = playerStore;
const { setIsLoaderTransitioning } = loaderStore;
const { isSoundActive } = storeToRefs(soundsStore);

const props = defineProps({
    project: {
        type: Object,
        default: () => ({}),
    },
});

const router = useRouter();

const isClicked = ref(false);

const showProject = () => {
    isClicked.value = true;
    setIsUIHidden(false);

    if (isSoundActive.value) {
        setIsSoundSupposedActive(true);
        setIsSoundActive(false);
    }

    setIsLoaderTransitioning(true);

    setTimeout(() => {
        router.push(`/${props.project.slug}`);
    }, 500);
};
</script>
