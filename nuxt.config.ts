// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/scss/styles.scss"],

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "~/assets/scss//variables/*.scss" as *;'
  //       }
  //     }
  //   }
  // },
  
  plugins: [
      "~/plugins/mixins.js",
      "~/plugins/common.js",
      "~/plugins/strapi.js",
  ],

  styleResources: {
      scss: [
          "~/assets/scss/mixins/**/*.scss",
          "~/assets/scss/variables/**/*.scss",
      ],
  },
    
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    'nuxt-swiper'
  ]
})
