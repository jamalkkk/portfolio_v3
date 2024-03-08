// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/styles.scss" as *;',
        },
      },
    },
  },

  // head: {
  //   title: "Jamal Khalili",
  //   htmlAttrs: {
  //     lang: "en",
  //   },
  //   meta: [
  //     { charset: "utf-8" },
  //     {
  //       name: "viewport",
  //       content: "width=device-width, initial-scale=1",
  //     },
  //     {
  //       hid: "description",
  //       name: "description",
  //       content:
  //         "Jamal Khalili is a Multimedia Artist, with extensive knowledge and experience in creating engaing mixed media. His expertise includes creative development, animation, and illustration.",
  //     },
  //     {
  //       hid: "twitter:card",
  //       name: "twitter:card",
  //       content: "summary_large_image",
  //     },
  //     {
  //       hid: "twitter:site",
  //       name: "twitter:site",
  //       content: "@jamal_khailli",
  //     },
  //     {
  //       hid: "twitter:creator",
  //       name: "twitter:creator",
  //       content: "@jamal_khailli",
  //     },
  //     {
  //       hid: "twitter:title",
  //       name: "twitter:title",
  //       content: "Jamal Khalili - A Multimedia Artist",
  //     },
  //     {
  //       hid: "twitter:description",
  //       name: "twitter:description",
  //       content: "Multimedia artist's projects",
  //     },
  //     {
  //       hid: "og:image",
  //       property: "og:image",
  //       content: "/meta.png",
  //     },
  //     {
  //       hid: "og:image:width",
  //       property: "og:image:width",
  //       content: "1200",
  //     },
  //     {
  //       hid: "og:image:height",
  //       property: "og:image:height",
  //       content: "630",
  //     },
  //     {
  //       hid: "og:image",
  //       property: "og:image",
  //       content: "/meta_256.png",
  //     },
  //     {
  //       hid: "og:image:width",
  //       property: "og:image:width",
  //       content: "256",
  //     },
  //     {
  //       hid: "og:image:height",
  //       property: "og:image:height",
  //       content: "256",
  //     },
  //     {
  //       hid: "og:site_name",
  //       name: "og:site_name",
  //       content: "Jamal Khalili",
  //     },
  //     {
  //       hid: "og:type",
  //       name: "og:type",
  //       content: "website",
  //     },
  //     {
  //       hid: "og:url",
  //       name: "og:url",
  //       content: "https://jamalkhalili.com",
  //     },
  //     {
  //       hid: "og:title",
  //       name: "og:title",
  //       content: "Jamal Khalili - A Multimedia Artist",
  //     },
  //     {
  //       hid: "og:description",
  //       name: "og:description",
  //       content:
  //         "Jamal Khalili is a Multimedia Artist, with extensive knowledge and experience in creating engaing mixed media. His expertise includes creative development, animation, and illustration.",
  //     },
  //     { name: "format-detection", content: "telephone=no" },
  //   ],
  //   link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  // },

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
  ],

  buildModules: ["@nuxtjs/style-resources"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
