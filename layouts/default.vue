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
        <div ref="container" class="layerpage-container">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const isLoaderActive = false;
</script>