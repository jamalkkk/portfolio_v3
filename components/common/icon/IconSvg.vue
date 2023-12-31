<template>
    <span v-if="svg" class="h-[1em] w-[1em]" v-html="svg" />
</template>

<script setup lang="ts">
const props = defineProps({
    name: { type: String, default: "instagram" },
});

// Auto-load icons
const svgs = Object.fromEntries(
    Object.entries(
        import.meta.glob("~/assets/img/svg/*.svg", { as: "raw" })
    ).map(([key, value]) => {
        const filename = key.split("/").pop()!.split(".").shift();
        return [filename, value];
    })
);

// Lazily load the icon
const svg = props.name && (await svgs?.[props.name]?.());
</script>
