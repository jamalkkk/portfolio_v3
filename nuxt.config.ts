// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/styles.scss" as *;'
        }
      }
    }
  },
  
  // plugins: [
  //     "~/plugins/mixins.js",
  //     "~/plugins/common.js",
  // ],
    
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    'nuxt-swiper',
  ],

  buildModules: [
    '@nuxtjs/style-resources',
  ],
})
