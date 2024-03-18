<template>
    <div>
        <ProjectDetails v-if="project?.slides" :project="project" />
    </div>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";
import type { ISbStoryData, IContentTypes } from "storyblok-js-client";
import type { SBProjectDetails } from "~/types/types";

const { getStory } = useStoryblokClient();

const route = useRoute();

let story: ISbStoryData<IContentTypes> | null = await getStory(route.path);

const projectDetails = ref<SBProjectDetails>(story?.content?.body[0]);

console.log("projectDetails", projectDetails.value);

definePageMeta({
    layout: "project",
});

const project = projectDetails.value; //projects.find((project) => project.id === route.params.id);

const setTitle = (title: string) => {
    title = `${title} • ${title}`;
};

onMounted;
</script>
