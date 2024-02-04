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
        <div class="projects-list container">
            <ul
                class="projects-list-row grid grid-cols-4"
                v-if="filteredProjects.length"
            >
                <li
                    v-for="(project, i) in filteredProjects"
                    :key="i"
                    :class="`projects-list-teaser col-span-${project.size} p-0`"
                >
                    <LazyProjectTeaser :project="project" />
                </li>
            </ul>
            <JKText
                v-else
                class="projects-message row"
                text="... Oops, someone stole the projects - come back another time once I've got them!"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";

const appStore = useApp();
const { scrollToHome } = useCommon();

const { isMainHomeActive, projects, documentBreakpoint } =
    storeToRefs(appStore);

// const STRAPI_URL = process.env.strapiUrl;

// const orgProjects = ref([]);
// const allProjects = ref([]);
const filteredProjects = ref(projects.value);
const columns = ref(4);

// const isMainHomeActive = computed(() => $store.state.isMainHomeActive);
// const selectedTags = computed(() => $store.state.activeTags.items);
// const projects = computed(() => $store.state.projects);

// const setAllProjects = (hasShuffle = true) => {
//     let size;
//     let remaining = columns.value;
//     allProjects.value = [];

//     if (orgProjects.value?.length) {
//         shuffleProjects(orgProjects.value, hasShuffle).forEach(
//             ({ attributes, id }) => {
//                 size =
//                     remaining > 1
//                         ? Math.floor(((Math.random() * 3) % 2) + 1)
//                         : 1;
//                 remaining -= size;
//                 remaining = remaining || columns.value;

//                 allProjects.value.push({ id, size, ...attributes });
//             }
//         );
//     }

//     filteredProjects.value = allProjects.value;
// };

// const resetProjects = (value = selectedTags.value) => {
//     if (value.length) {
//         const filteredProjectsArr = [];

//         allProjects.value.forEach((project) => {
//             if (
//                 selectedTags.value.some(({ id }) =>
//                     project.tags.data?.some(
//                         (projectTag) => id === projectTag.id
//                     )
//                 )
//             ) {
//                 filteredProjectsArr.push(project);
//             }
//         });

//         filteredProjects.value = filteredProjectsArr;
//     } else {
//         filteredProjects.value = allProjects.value;
//     }
// };

const setColumns = () => {
    columns.value = documentBreakpoint.value === "md" ? 3 : 4;
};

// const shuffleProjects = (list, isActive = true) => {
//     if (isActive) {
//         for (let i = list.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             const temp = list[i];
//             list[i] = list[j];
//             list[j] = temp;
//         }
//     }

//     return list;
// };

// const { setData, setIsDataLoaded } = mapMutations([
//     "setData",
//     "setIsDataLoaded",
// ]);

onMounted(() => {
    setColumns();

    // if (projects.value.length) {
    //     orgProjects.value = projects.value;
    //     setAllProjects(false);
    // }
});

// watch(documentBreakpoint, () => {
//     orgProjects.value = projects.value;
//     setColumns();
//     resetProjects();
// });

// watch(selectedTags, () => {
//     resetProjects();
// });

// onBeforeUnmount(() => {
//     orgProjects.value = [];
//     allProjects.value = [];
//     filteredProjects.value = [];
// });
</script>
