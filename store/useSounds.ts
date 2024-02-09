// store/sounds.ts

import { defineStore } from "pinia";

interface SoundsState {
  isSoundActive: boolean;
  isSoundSupposedActive: boolean;
  activeSounds: string[];
  ball: boolean;
  bikeBell: boolean;
  bikeChain: boolean;
  background: boolean;
  cat: boolean;
  poster: boolean;
}

export const useSounds = defineStore("sounds", {
  state: (): SoundsState => ({
    isSoundActive: false,
    isSoundSupposedActive: false,
    activeSounds: ["background"],
    ball: false,
    bikeBell: false,
    bikeChain: false,
    background: false,
    cat: false,
    poster: false,
  }),
  actions: {
    setIsSoundActive(value: boolean) {
      this.isSoundActive = value;
      localStorage.isSoundActive = value;
    },
    setIsSoundSupposedActive(value: boolean) {
      this.isSoundSupposedActive = value;
    },
    setIsSoundPlaying({ title, value }: { title: string; value: boolean }) {
      this["title"] = value;
    },
    setActiveSounds(value: string, isActive: boolean = true) {
      if (isActive) {
        this.activeSounds.push(value);
      } else {
        this.activeSounds = this.activeSounds.filter((item) => item !== value);
      }
    },
  },
});
