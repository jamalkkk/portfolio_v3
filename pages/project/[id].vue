<template>
  <div>
    <ProjectDetails v-if="project?.slides" :project="project" />
  </div>
</template>

<script setup lang="ts">
import type { ISbStoryData, IContentTypes } from "storyblok-js-client";
import type { SBProjectDetails } from "~/types/types";

const { getStory } = useStoryblokClient();
const route = useRoute();

let story: ISbStoryData<IContentTypes> | null = await getStory(route.path);

const project = ref<SBProjectDetails>(story?.content?.body[0]);

definePageMeta({
  layout: "project",
});
</script>
