// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/styles.scss" as *;'
        }
      }
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
      
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-swiper',
  ],

  buildModules: [
    '@nuxtjs/style-resources',
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})
