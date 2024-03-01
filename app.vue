<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";
import { useTheme } from "~/store/useTheme";

const { toggleIsUserOnPage } = useApp();
const { init, setTheme } = useCommon();

const theme = useTheme();
const { isDarkTheme } = storeToRefs(theme);

watch(isDarkTheme, (value) => {
    // setTheme(value);
});

onMounted(() => {
    init();
    // setTheme(isDarkTheme.value);

    window.addEventListener("visibilitychange", toggleIsUserOnPage);
});

onUnmounted(() => {
    window.removeEventListener("visibilitychange", toggleIsUserOnPage);
});
</script>