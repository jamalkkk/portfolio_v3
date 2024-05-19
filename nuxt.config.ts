// https://nuxt.com/docs/api/configuration/nuxt-config

const config = {
  IS_PREVIEW: process.env.IS_PREVIEW,
  STORYBLOK_ACCESS_TOCKEN: process.env.STORYBLOK_ACCESS_TOCKEN,
};

export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/_imports.scss";',
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
    "nuxt-swiper",
    "@pinia/nuxt",
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
    "@nuxt/image",
  ],

  buildModules: ["@nuxtjs/style-resources"],

  nitro: {
    compressPublicAssets: true,
  },

  pwa: {
    manifest: {
      name: "Jamal Khalili — Multimedia Artist",
      short_name: "Jamal Khalili",
      description: "Mixed media works of the Mutlimedia Artist Jamal Khalili",
      lang: "en",
      useWebmanifestExtension: false,
      background_color: "#aaaaaa",
      theme_color: "#222222",
      icons: ["meta.png", "meta_256.png"],
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  image: {
    // Options
  },
});
