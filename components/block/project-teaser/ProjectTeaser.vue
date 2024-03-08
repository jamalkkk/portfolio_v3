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
            :size="project.size"
            :image="image"
            :img="project.image"
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
                            tag="h3"
                            :text="project.title"
                            :isInverted="true"
                        />
                        <JKText
                            :isSmall="true"
                            :isLight="true"
                            :isInverted="true"
                            :isSecondaryFont="true"
                            :text="project.description"
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
const { scrollToProjects } = useCommon();

const { setIsSoundActive, setIsSoundSupposedActive } = soundsStore;
const { setIsUIHidden } = playerStore;
const { shouldProjectLoaderBeActive, setShouldProjectLoaderBeActive } =
    loaderStore;
const { isSoundActive } = storeToRefs(soundsStore);

const props = defineProps({
    project: {
        type: Object,
        default: () => ({}),
    },
});

const router = useRouter();

const isClicked = ref(false);

const route = computed(() => `/project/${props.project.id}`);

const image = computed(
    () =>
        props.project.image &&
        props.project.image.data &&
        props.project.image.data[0]
);

const showProject = () => {
    isClicked.value = true;
    setShouldProjectLoaderBeActive(true);
    setIsUIHidden(false);

    if (isSoundActive.value) {
        setIsSoundSupposedActive(true);
        setIsSoundActive(false);
    }

    setTimeout(() => router.push(route.value), 300);
};
</script>
