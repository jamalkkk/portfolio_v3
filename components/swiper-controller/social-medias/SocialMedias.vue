<style lang="scss" src="./social-medias.scss"></style>

<template>
    <div class="b-social-medias">
        <icon
            v-for="(sm, i) in socials"
            :key="i"
            class="social-medias-icon"
            :name="sm.name"
            :to="sm.link"
        />
    </div>
</template>
<script setup lang="ts">
import { useApp } from "~/store/useApp";
import { useLoader } from "~/store/useLoader";
import { useSounds } from "~/store/useSounds";

const appStore = useApp();

const { info } = storeToRefs(appStore);

const socials = computed(() => {
    const { socialMedia } = info.value;
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