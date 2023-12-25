<template>
    <!-- <home-page /> -->
    <div>Home page, {{ primary }}</div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useTheme } from "~/store/useTheme";

const { isDarkTheme, primary } = useTheme();

// import { useStore } from "vuex";

// const store = useStore();

const favicon = "/favicon.ico";

const isDarkThemeCopy = computed(() => isDarkTheme);

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

