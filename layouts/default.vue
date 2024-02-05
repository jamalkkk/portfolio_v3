<style lang="scss" land="sass" src="./scss/layout.scss"></style>

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
            <Header :isHomePage="true" />

            <slot />
            <Footer />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";
import { useLoader } from "~/store/useLoader";
import { useTheme } from "~/store/useTheme";

const { isDataLoaded, setIsMainHomeActive } = useApp();
const { isLoaderActive } = useLoader();
const theme = useTheme();
const { isDarkTheme } = storeToRefs(theme);

const $container = ref<HTMLElement>();

const setProperty = (key: string, value: string) => {
    console.log("key, value", key, value);
    document.documentElement.style.setProperty(key, value);
};

const setTheme = (isDark: boolean = false) => {
    const primary = isDark ? "negative" : "primary";
    const negative = !isDark ? "negative" : "primary";

    setProperty("--primary", theme[primary]);
    setProperty("--negative", theme[negative]);
    setProperty("--primary-transparent", `${theme[primary]}a`);
    setProperty("--negative-transparent", `${theme[negative]}a`);

    document.body.classList.add(`is-${isDark ? "dark" : "light"}-theme`);
    document.body.classList.remove(`is-${isDark ? "light" : "dark"}-theme`);
};

const handleScroll = () => {
    const top = $container.value?.scrollTop || 0;
    setIsMainHomeActive(top < 100);
};

const initialiseEventListeners = () => {
    $container.value?.addEventListener("scroll", handleScroll);
};

watch(isDarkTheme, (value) => {
    setTheme(value);
});

onMounted(() => {
    setTheme(isDarkTheme.value);
    initialiseEventListeners();
});

onUnmounted(() => {
    $container.value?.removeEventListener("scroll", handleScroll);
});
</script>