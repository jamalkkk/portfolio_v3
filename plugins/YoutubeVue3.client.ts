// https://www.npmjs.com/package/youtube-vue3

import { YoutubeVue3 } from "youtube-vue3";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Youtube", YoutubeVue3);
});
