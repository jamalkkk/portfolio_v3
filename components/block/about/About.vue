<style lang="scss" src="./about.scss"></style>

<template>
    <div class="b-about">
        <div class="about-container flex flex-col gap-y-24 px-4">
            <div class="flex flex-col gap-y-4">
                <Headline :text="settings.name" />
                <p class="about-content" v-html="content"></p>
                <p>{{ settings.text }}</p>
            </div>
            <div class="flex flex-col gap-y-4">
                <Email />
                <SocialMedias />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";

const appStore = useApp();
const { settings } = storeToRefs(appStore);

// @TODO: Fixed info's type
export type Info = {
    about: String;
};
const content = ref<string>(
    "Hello, I'm a Multimedia Artist — who is passionate about creating compelling and engaging media content.\n\nI possess over 5 years of experience in interactive application development, animation, and illustration, gained through a combination of educational projects and industry work.</br></br>Hire me, I need to keep my plants alive!"
);

watch(
    () => settings.value,
    (value) => {
        if (value) {
            console.log("got it", value);
        }
    }
);
</script>
