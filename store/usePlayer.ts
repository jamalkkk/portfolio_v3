// store/player.ts

import { defineStore } from "pinia";

interface PlayerState {
  isPlaying: boolean;
  isPlayerMouseMoving: boolean;
  isUIHidden: boolean;
  shouldBePlaying: boolean;
  shouldBePlayingWhenBack: boolean;
  playerActiveIndex: number;
}

export const usePlayer = defineStore("player", {
  state: (): PlayerState => ({
    isPlaying: false,
    isPlayerMouseMoving: false,
    isUIHidden: false,
    shouldBePlaying: false,
    shouldBePlayingWhenBack: false,
    playerActiveIndex: -1,
  }),
  actions: {
    setIsPlaying(value: boolean) {
      this.isPlaying = value;
      this.shouldBePlaying = value;
      this.setIsUIHidden(value && !this.isPlayerMouseMoving);
    },
    setIsPlayerMouseMoving(value: boolean) {
      this.isPlayerMouseMoving = value;
      this.setIsUIHidden(!value && this.isPlaying);
    },
    setShouldBePlaying(value: boolean) {
      this.playerActiveIndex = value ? this.playerActiveIndex : -1;
      this.shouldBePlaying = !this.isPlaying;
    },
    setShouldBePlayingWhenBack(value: boolean) {
      this.shouldBePlayingWhenBack = value;
    },
    setPlayerActiveIndex(value: number = -1) {
      this.playerActiveIndex = value;
    },
    setIsUIHidden(value: boolean) {
      this.isUIHidden = value;
    },
  },
});
