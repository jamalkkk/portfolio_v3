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
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useLoader } from "~/store/useLoader";

const { isLoaderActive } = useLoader();
</script>