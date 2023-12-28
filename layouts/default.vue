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
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";

const { setIsMainHomeActive } = useApp();

const $container = ref<HTMLElement>();

const isLoaderActive = false;

const handleScroll = () => {
    const top = $container.value?.scrollTop || 0;

    setIsMainHomeActive(top < 100);
};

const initialiseEventListeners = () => {
    $container.value?.addEventListener("scroll", handleScroll);
};

onMounted(() => {
    initialiseEventListeners();
});

onUnmounted(() => {
    $container.value?.removeEventListener("scroll", handleScroll);
});
</script>