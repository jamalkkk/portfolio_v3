<style lang="scss" src="./layerpage.scss"></style>

<template>
    <div
        :class="[
            'b-layerpage',
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

