// https://nuxt.com/docs/api/configuration/nuxt-config

const config = {
  IS_PREVIEW: process.env.IS_PREVIEW,
  STORYBLOK_ACCESS_TOCKEN:
    process.env.STORYBLOK_ACCESS_TOCKEN || "H9kIQxFrYDoMhtQ9XOj6FAtt",
};

export default defineNuxtConfig({
  // env: {
  //   STORYBLOK_ACCESS_TOCKEN: process.env.STORYBLOK_ACCESS_TOCKEN || "", // Replace 'default_value' with your default value
  // },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/styles.scss" as *;',
          // additionalData: '@use (from "@rollup/plugin-alias")("~/assets/scss/common.scss" as "~/assets/scss/styles.scss");',
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
        accessToken: config.STORYBLOK_ACCESS_TOCKEN,
      },
    ],
  ],

  buildModules: ["@nuxtjs/style-resources"],

  styleResources: {
    // Globally import your common styles file
    scss: [
      '~/assets/scss/common.scss',
    ],
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
