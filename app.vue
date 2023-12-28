<template>
    <NuxtLayout name="default">
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";

const { toggleIsUserOnPage } = useApp();
const { setStoreDocumentBreakpoint } = useCommon();

onMounted(() => {
    setStoreDocumentBreakpoint();

    window.addEventListener("visibilitychange", toggleIsUserOnPage);
    window.addEventListener("resize", setStoreDocumentBreakpoint);
});

onUnmounted(() => {
    window.removeEventListener("visibilitychange", toggleIsUserOnPage);
    window.removeEventListener("resize", setStoreDocumentBreakpoint);
});
</script>