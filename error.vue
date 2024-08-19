<style lang="scss">
.b-error {
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100dvh;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: $color-negative;

    a {
        width: fit-content;
        margin: 0 auto;
    }
}
</style>

<template>
    <div class="b-error">
        <h1>Oops, you seem lost!</h1>
        <Cta text="Let's go home" to="/" target="_parent" />
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
    error: Object as () => NuxtError,
});
</script>