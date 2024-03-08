import StoryblokClient, { ISbStoryData } from "storyblok-js-client";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // env: {
  //   STORYBLOK_ACCESS_TOCKEN: process.env.STORYBLOK_ACCESS_TOCKEN || "", // Replace 'default_value' with your default value
  // },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/styles.scss" as *;',
        },
      },
    },
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          path: "/about",
          components: {
            default: resolve(__dirname, "pages"), // or routes[index].component
          },
        },
        {
          path: "/projects",
          components: {
            default: resolve(__dirname, "pages"), // or routes[index].component
          },
        }
      );
    },
  },

  build: {
    vendor: ["vue-vimeo-player", "vue-video-wrapper"],
  },

  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-swiper",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Averia+Libre": [300, 400, 700],
          "Maven Pro": [400, 500],
        },
      },
    ],
    [
      "@storyblok/nuxt",
      {
        accessToken: "H9kIQxFrYDoMhtQ9XOj6FAtt",
      },
    ],
  ],

  buildModules: ["@nuxtjs/style-resources"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
