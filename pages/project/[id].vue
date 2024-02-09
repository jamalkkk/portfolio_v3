<template>
    <div>
        <h1>Project Details</h1>
        <p>Project ID: {{ route.params.id }}</p>
    </div>
</template>

<script setup lang="ts">
import { useTheme } from "~/store/useTheme";
const { isDarkTheme, primary } = useTheme();
import { useApp } from "~/store/useApp";
import { usePlayer } from "~/store/usePlayer";
import { useSwiperStore } from "~/store/useSwiperStore";
import { useModal } from "~/store/useModal";

const appStore = useApp();
const playerStore = usePlayer();
const swiperStore = useSwiperStore();
const modalStore = useModal();

const { closeProject } = useCommon();

const { project, isDataLoaded } = appStore;
const route = useRoute();

definePageMeta({
    layout: "project",
});

let title = "Jamal Khalili";
let description = "";
let favicon = "/favicon.ico";

// const fetchProject = async () => {
//   try {
//     commit('resetProject') // Reset the project to initial state before fetching new data.

//     const query = qs.stringify(
//       {
//         populate: [
//           'slides',
//           'tags',
//           'slides.video',
//           'slides.content',
//           'slides.content.image'
//         ]
//       },
//       {
//         encodeValuesOnly: true
//       }
//     )

//     const url = `${STRAPI_URL}/projects/${router.params.id}?${query}`

//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json'
//       }
//     })

//     if (!response.ok) {
//       throw new Error('Network response was not ok')
//     }

//     const { data } = await response.json()

//     commit('setProject', data.attributes)
//     setTitle(data.attributes?.title)
//   } catch (error) {
//     console.error('Error fetching project data:', error)
//   }
// }

const setTitle = (title: string) => {
    title = `${title} • ${title}`;
};

// const isDarkTheme = () => {
//     const isDarkTheme = state.theme.isDarkTheme;
//     favicon = isDarkTheme ? "/favicon_dark.ico" : "/favicon.ico";

//     return isDarkTheme;
// };

onMounted(() => {
    console.log("isDataLoaded", isDataLoaded);
});
</script>
