<style lang="scss" src="./social-medias.scss"></style>

<template>
    <div class="b-social-medias">
        <icon
            v-for="(social, i) in socials"
            :key="i"
            class="social-medias-icon"
            :name="social.icon"
            :to="social.url"
        />
    </div>
</template>
<script setup lang="ts">
import { useApp } from "~/store/useApp";

const appStore = useApp();

const { global } = storeToRefs(appStore);

const socials = computed(() => {
    const { social_media: socialMedia } = global.value;

    return (
        socialMedia || [
            {
                name: "instagram",
                link: "https://www.instagram.com/jamal_khalili",
            },
            {
                name: "youtube",
                link: "https://www.youtube.com/channel/UChm8LQZO9eO3ZtiPhJR9BOg",
            },
            {
                name: "linkedin",
                link: "https://www.linkedin.com/in/jamalkhalili/",
            },
        ]
    );
});
</script>