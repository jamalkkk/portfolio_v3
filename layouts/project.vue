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
        <div class="layout-container">
            <Header :isHomePage="false" />

            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useLoader } from "~/store/useLoader";
import { useTheme } from "~/store/useTheme";

const theme = useTheme();
const { isDarkTheme } = storeToRefs(theme);
const { isLoaderActive } = useLoader();

const { setTheme } = useCommon();

watch(isDarkTheme, (value) => setTheme(value));

onMounted(() => {
    setTheme(isDarkTheme.value);
});
</script>