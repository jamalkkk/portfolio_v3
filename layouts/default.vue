<style lang="scss" src="./scss/layout.scss"></style>

<template>
    <div
        :class="[
            'b-layout',
            {
                'is-loader-active': isLoaderActive,
            },
        ]"
    >
        <div ref="$container" class="layout-container">
            <Header />

            <slot />
            <Footer />
        </div>

        <Loader />
    </div>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";
import { useLoader } from "~/store/useLoader";
import { useTheme } from "~/store/useTheme";

const { setIsMainHomeActive } = useApp();
const loaderStore = useLoader();
const { setIsLoaderTransitioning } = loaderStore;
const theme = useTheme();
const { isLoaderActive, isLoaderTransitioning } = storeToRefs(loaderStore);
const { isDarkTheme } = storeToRefs(theme);

const { setTheme } = useCommon();

const $container = ref<HTMLElement>();

const handleScroll = () => {
    const top = $container.value?.scrollTop || 0;
    setIsMainHomeActive(top < 100);
};

const initialiseEventListeners = () => {
    $container.value?.addEventListener("scroll", handleScroll);
};

watch(isDarkTheme, (value) => setTheme(value));

onMounted(() => {
    setTheme(isDarkTheme.value);
    initialiseEventListeners();

    setTimeout(() => {
        setIsLoaderTransitioning(false);
    }, 300);
});

onUnmounted(() => {
    $container.value?.removeEventListener("scroll", handleScroll);
});
</script>