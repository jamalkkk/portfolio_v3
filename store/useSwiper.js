// store/swiper.js

import { defineStore } from "pinia";

export const useSwiper = defineStore("swiper", {
  state: () => ({
    activeIndex: 0,
    videoSlideIndices: [],
    isSpaceBarPressed: false,
  }),
  actions: {
    addVideoSlideIndex(value) {
      if (!this.videoSlideIndices.includes(value)) {
        this.videoSlideIndices.push(value);
      }
    },
    resetVideoSlideIndices() {
      this.videoSlideIndices = [];
    },
    setActiveIndex(value) {
      this.activeIndex = value;
    },
    setIsSpaceBarPressed(value) {
      this.isSpaceBarPressed = value;
    },
  },
});
