<style lang="scss" src="./projects.scss"></style>

<template>
    <div id="projects" class="b-projects w-100 mx-auto" keep-alive>
        <div
            :class="[
                'projects-return',
                {
                    'is-active': !isMainHomeActive,
                },
            ]"
        >
            <Icon
                class="projects-return-button"
                :is-button="true"
                name="return"
                rotate="top"
                :onClick="scrollToHome"
            />
        </div>

        <Tags class="mb-5" />
        <div class="projects-list">
            <ul
                class="projects-list-row grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1"
                v-if="filteredProjects.length"
            >
                <li
                    v-for="(project, i) in filteredProjects"
                    :key="i"
                    class="projects-list-teaser col-span-1"
                >
                    <LazyProjectTeaser :project="project" />
                </li>
            </ul>
            <JKText
                v-else
                class="projects-message row"
                text="... Oops! Well, that's embarrasing."
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";
import { useTags } from "~/store/useTags";
import type { ISbStoryData } from "storyblok-js-client";
import type { SBProjectDetails } from "~/types/types";

const tagsStore = useTags();

const { activeTags } = storeToRefs(tagsStore);
const appStore = useApp();
const { getProjectStory } = useStoryblokClient();
const { scrollToHome } = useCommon();

const { setProjects } = appStore;
const { isMainHomeActive, projects } = storeToRefs(appStore);

const allProjects = ref<SBProjectDetails[]>([]);
const filteredProjects = ref<SBProjectDetails[]>([]);

const sortProjects = (projects: SBProjectDetails[]) =>
    [...projects].sort((a, b) => parseInt(b.priority) - parseInt(a.priority));

const filterProjectsByTags = (
    projects: SBProjectDetails[],
    tags: string[]
): SBProjectDetails[] => {
    return projects.filter((project) =>
        tags.some((tag) => project.tags.includes(tag))
    );
};
const getStoryblokData = async () => {
    let projects: ISbStoryData<SBProjectDetails>[] | null =
        await getProjectStory("/", {
            startsWith: "project/",
        });

    if (projects && projects?.length) {
        allProjects.value = projects.map((project: any) => {
            const content = project?.content?.body[0];
            content.slug = project?.full_slug;
            return content;
        });

        const filtered = filterProjectsByTags(allProjects.value, ["featured"]);
        filteredProjects.value = sortProjects(filtered);
        setProjects(filteredProjects.value);
    }
};

const resetProjects = (value = activeTags.value) => {
    filteredProjects.value = value.length
        ? sortProjects(filterProjectsByTags(allProjects.value, value))
        : sortProjects(allProjects.value);
};

watch(
    () => activeTags.value,
    () => resetProjects()
);

onMounted(() => {
    if (projects.value?.length) {
        allProjects.value = projects.value;
        filteredProjects.value = projects.value;

        // Show only featured at start
        resetProjects(["featured"]);
    } else {
        getStoryblokData();
    }
});
</script>
