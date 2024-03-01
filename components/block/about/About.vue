<style lang="scss" src="./about.scss"></style>

<template>
    <div class="b-about">
        <div class="about-container flex flex-col gap-y-24 px-4">
            <div class="flex flex-col gap-y-4">
                <Headline text="Jamal Khalili" />
                <p class="about-content" v-html="content"></p>
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

const { info } = useApp();
const { isDataLoaded } = storeToRefs(useApp());

// @TODO: Fixed info's type
export type Info = {
    about: String;
};
const content = ref<string>(
    "Hello, I'm a Multimedia Artist — who is passionate about creating compelling and engaging media content.\n\nI possess over 5 years of experience in interactive application development, animation, and illustration, gained through a combination of educational projects and industry work.</br></br>Hire me, I need to keep my plants alive!"
);

watch(isDataLoaded, (value) => {
    if (value) {
        content.value = info.about;
    }
});
</script>
