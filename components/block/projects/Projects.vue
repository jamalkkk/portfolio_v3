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
                class="projects-list-row grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1"
                v-if="filteredProjects.length"
            >
                <li
                    v-for="(project, i) in filteredProjects"
                    :key="i"
                    :class="`projects-list-teaser col-span-1`"
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
import { useTags } from "~/store/useTags";

const tagsStore = useTags();

const { activeTags } = storeToRefs(tagsStore);
const appStore = useApp();
const { scrollToHome } = useCommon();

type ProjectType = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
};

const { isMainHomeActive, projects, documentBreakpoint } =
    storeToRefs(appStore);

// const orgProjects = ref();
const allProjects = ref<ProjectType[]>(projects.value);
const filteredProjects = ref<ProjectType[]>(projects.value);
// const columns = ref(4);

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

//                 console.log("size", size);

//                 allProjects.value.push({ id, size, ...attributes });
//             }
//         );
//     }

//     console.log(allProjects.value);

//     filteredProjects.value = allProjects.value;
//     console.log("filtered projects", filteredProjects.value);
// };

const resetProjects = (value = activeTags.value) => {
    if (value.length) {
        const filteredProjectsArr: ProjectType[] = [];

        allProjects.value.forEach((project) => {
            if (activeTags.value.some((tag) => project.tags.includes(tag))) {
                filteredProjectsArr.push(project);
            }
        });

        filteredProjects.value = filteredProjectsArr;
    } else {
        filteredProjects.value = allProjects.value;
    }
};

// const shuffleProjects = (list: any[], isActive = true) => {
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
    // if (projects.value.length) {
    //     orgProjects.value = projects.value;
    // setAllProjects(false);
    // }
});

// watch(documentBreakpoint, () => {
//     orgProjects.value = projects.value;
//     setColumns();
//     resetProjects();
// });

watch(
    () => activeTags.value,
    () => {
        resetProjects();
    }
);

// onBeforeUnmount(() => {
//     orgProjects.value = [];
//     allProjects.value = [];
//     filteredProjects.value = [];
// });
</script>
