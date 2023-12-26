// store/player.js

import { defineStore } from "pinia";

export const usePlayer = defineStore("player", {
  state: () => ({
    isPlaying: false,
    isPlayerMouseMoving: false,
    isUIHidden: false,
    shouldBePlaying: false,
    shouldBePlayingWhenBack: false,
    activeIndex: -1,
  }),
  actions: {
    setIsPlaying(value) {
      this.isPlaying = value;
      this.shouldBePlaying = value;
      this.isUIHidden = value && !this.isPlayerMouseMoving;
    },
    setIsPlayerMouseMoving(value) {
      this.isPlayerMouseMoving = value;
      this.isUIHidden = !value && this.isPlaying;
    },
    setShouldBePlaying(value) {
      this.activeIndex = value;
      this.shouldBePlaying = !this.isPlaying;
    },
    setShouldBePlayingWhenBack(value) {
      this.shouldBePlayingWhenBack = value;
    },
    setActiveIndex(value = -1) {
      this.activeIndex = value;
    },
    setIsUIHidden(value) {
      this.isUIHidden = value;
    },
  },
});
