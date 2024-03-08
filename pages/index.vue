<template>
    <HomePage />
</template>

<script setup lang="ts">
import { useTheme } from "~/store/useTheme";
const { isDarkTheme, primary } = useTheme();

const favicon = "/favicon.ico";

const isDarkThemeCopy = computed(() => isDarkTheme);

definePageMeta({
    layout: "default",
});
</script>

