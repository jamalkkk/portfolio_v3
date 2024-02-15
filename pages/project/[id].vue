<template>
    <div>
        <ProjectDetails :project="project" />
    </div>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";
import type { ProjectType } from "~/types/types";

const appStore = useApp();

const { projects } = appStore;

const route = useRoute();

definePageMeta({
    layout: "project",
});

let title = "Jamal Khalili";
let description = "";
let favicon = "/favicon.ico";

const project = projects.find((project) => project.id === route.params.id);

const setTitle = (title: string) => {
    title = `${title} • ${title}`;
};
</script>
