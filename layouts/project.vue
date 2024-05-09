<style lang="scss" land="sass" src="./scss/layout.scss"></style>

<template>
    <div class="'b-layout'">
        <div class="layout-container">
            <Header :isHomePage="false" />

            <slot />
        </div>

        <Loader />
    </div>
</template>

<script setup lang="ts">
import { useTheme } from "~/store/useTheme";

const theme = useTheme();
const { isDarkTheme } = storeToRefs(theme);

const { setTheme } = useCommon();

watch(isDarkTheme, (value) => setTheme(value));

onMounted(() => {
    setTheme(isDarkTheme.value);
});
</script>