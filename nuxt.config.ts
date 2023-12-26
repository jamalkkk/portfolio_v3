// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // css: ["assets/css/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/styles.scss" as *;'
        }
      }
    }
  },
  
  plugins: [
      "~/plugins/mixins.js",
      "~/plugins/common.js",
  ],

  // styleResources: {
  //     scss: [
  //       "~assets/scss/variables/*.scss",
  //       "~assets/scss/mixins/*.scss",
  //       "~assets/scss/_basics.scss",
  //     ],
  // },
    
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    'nuxt-swiper',
    // '@nuxtjs/style-resources',
  ],

  buildModules: [
    '@nuxtjs/style-resources',
  ],
})
