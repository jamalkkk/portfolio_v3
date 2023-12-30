<style lang="scss" src="./about.scss"></style>

<template>
    <div class="b-about">
        <div class="about-container">
            <headline text="Jamal Khalili" class="mb-5" />
            <div class="about-content mb-5">
                {{ content }}
            </div>
            <email />
            <social-medias />
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
    "Hello, I'm a **Multimedia Artist** - who is passionate about creating compelling and engaging media content.\n\nI possess over 5 years of experience in interactive application development, animation, and illustration, gained through a combination of educational projects and industry work.\n\nHire me, I need to keep my plants alive!"
);

watch(isDataLoaded, (value) => {
    if (value) {
        content.value = info.about;
    }
});
</script>
