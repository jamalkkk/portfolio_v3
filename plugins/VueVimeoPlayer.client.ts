// https://www.npmjs.com/package/vue-vimeo-player

import { vueVimeoPlayer } from "vue-vimeo-player";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Vimeo", vueVimeoPlayer);
});
