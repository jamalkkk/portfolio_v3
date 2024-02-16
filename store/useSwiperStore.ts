// store/swiper.ts

import { defineStore } from "pinia";

interface SwiperState {
  isSpaceBarPressed: boolean;
  swiperActiveIndex: number;
  videoSlideIndices: number[];
}

export const useSwiperStore = defineStore("swiper-store", {
  state: (): SwiperState => ({
    swiperActiveIndex: 0,
    videoSlideIndices: [],
    isSpaceBarPressed: false,
  }),
  actions: {
    addVideoSlideIndex(value: number) {
      if (!this.videoSlideIndices.includes(value)) {
        this.videoSlideIndices.push(value);
      }
    },
    resetVideoSlideIndices() {
      this.videoSlideIndices = [];
    },
    setActiveIndex(value: number) {
      this.swiperActiveIndex = value;
    },
    setIsSpaceBarPressed(value: boolean) {
      this.isSpaceBarPressed = value;
    },
  },
});
