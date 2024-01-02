<template>
    <div v-if="svg" v-html="svg"></div>
</template>

<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        default: "info",
    },
});

// Auto-load svgs
const svgs = Object.fromEntries(
    Object.entries(
        import.meta.glob("~/assets/img/svg/*.svg", { as: "raw" })
    ).map(([key, value]) => {
        const filename = key.split("/").pop()!.split(".").shift();
        return [filename, value];
    })
);

// Lazily load the svg
const svg = props.name && (await svgs?.[props.name]?.());
</script>
