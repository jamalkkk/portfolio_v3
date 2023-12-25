<template>
    <div>Home page, {{ primary }}</div>
    <HomePage />
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useTheme } from "~/store/useTheme";
import HomePage from "~/components/block/home-page/HomePage.vue";

const { isDarkTheme, primary } = useTheme();

// import { useStore } from "vuex";

// const store = useStore();

const favicon = "/favicon.ico";

const isDarkThemeCopy = computed(() => isDarkTheme);

definePageMeta({
    layout: "default",
});

// @TODO: Change selected favicon
// import { useHead } from "@nuxtjs/composition-api";

// const head = useHead();
// head.link = [
//     {
//         hid: "icon",
//         rel: "icon",
//         type: "image/x-icon",
//         href: favicon,
//     },
// ];

// watch(isDarkTheme, (value) => {
//     head.link = [
//         {
//             hid: "icon",
//             rel: "icon",
//             type: "image/x-icon",
//             href: value ? "/favicon_dark.ico" : "/favicon.ico",
//         },
//     ];
// });
</script>

