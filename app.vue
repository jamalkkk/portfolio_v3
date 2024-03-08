<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";
import { useTheme } from "~/store/useTheme";

const { toggleIsUserOnPage } = useApp();
const { init } = useCommon();
const route = useRoute();

const theme = useTheme();
const { isDarkTheme, negative } = storeToRefs(theme);

const description = ref(
    "Jamal Khalili is a Multimedia Artist, with extensive knowledge and experience in creating engaing mixed media. His expertise includes creative development, animation, and illustration."
);

const title = ref(
    `Jamal Khalili — ${
        route.path.includes("project") ? "Project" : "Multimedia Artist"
    }`
);

// This will be reactive when you change title/description above
useHead({
    title: title,
    meta: [
        {
            name: "description",
            content: description,
        },
        {
            charset: "utf-8",
        },
        { name: "format-detection", content: "telephone=no" },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
        },
    ],
    link: [
        {
            rel: "icon",
            type: "image/x-icon",
            href: `/favicon_${
                negative.value === "#222" ? "dark" : "light"
            }.ico`,
        },
    ],
    htmlAttrs: {
        lang: "en",
    },
});

watch(
    () => isDarkTheme.value,
    () => {
        useHead({
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: `/favicon_${
                        negative.value === "#222" ? "dark" : "light"
                    }.ico`,
                },
            ],
        });
    }
);

watchEffect(() => {
    title.value = `Jamal Khalili — ${
        route.path.includes("project") ? "Project" : "Multimedia Artist"
    }`;

    useHead({
        title: title,
    });
});

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: "/meta.png",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: "An illustration of the Mutlimedia Artist Jamal Khalili",
    ogUrl: "https://jamalkhalili.com",
    ogType: "website",
    ogSiteName: "Jamal Khalili",
    twitterCard: "summary_large_image",
});

onMounted(() => {
    init();
    window.addEventListener("visibilitychange", toggleIsUserOnPage);
});

onUnmounted(() => {
    window.removeEventListener("visibilitychange", toggleIsUserOnPage);
});
</script>
