// https://www.npmjs.com/package/vue-vimeo-player

import VueVideoWrapper from "vue-video-wrapper";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Video", VueVideoWrapper);
});
