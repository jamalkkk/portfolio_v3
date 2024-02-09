// store/player.ts

import { defineStore } from "pinia";

interface PlayerState {
  isPlaying: boolean;
  isPlayerMouseMoving: boolean;
  isUIHidden: boolean;
  shouldBePlaying: boolean;
  shouldBePlayingWhenBack: boolean;
  activeIndex: number;
}

export const usePlayer = defineStore("player", {
  state: (): PlayerState => ({
    isPlaying: false,
    isPlayerMouseMoving: false,
    isUIHidden: false,
    shouldBePlaying: false,
    shouldBePlayingWhenBack: false,
    activeIndex: -1,
  }),
  actions: {
    setIsPlaying(value: boolean) {
      this.isPlaying = value;
      this.shouldBePlaying = value;
      this.isUIHidden = value && !this.isPlayerMouseMoving;
    },
    setIsPlayerMouseMoving(value: boolean) {
      this.isPlayerMouseMoving = value;
      this.isUIHidden = !value && this.isPlaying;
    },
    setShouldBePlaying(value: boolean) {
      this.activeIndex = value ? this.activeIndex : -1;
      this.shouldBePlaying = !this.isPlaying;
    },
    setShouldBePlayingWhenBack(value: boolean) {
      this.shouldBePlayingWhenBack = value;
    },
    setActiveIndex(value: number = -1) {
      this.activeIndex = value;
    },
    setIsUIHidden(value: boolean) {
      this.isUIHidden = value;
    },
  },
});
