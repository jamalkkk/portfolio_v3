// store/sounds.js

import { defineStore } from "pinia";

export const useSounds = defineStore("sounds", {
  state: () => ({
    isSoundActive: false,
    isSoundSupposedActive: false,
    activeSounds: ["backgroun"],
    ball: false,
    bikeBell: false,
    bikeChain: false,
    background: false,
    cat: false,
    poster: false,
  }),
  getters: {
    isCurrentPlaying: (state, clip) => {
      return state[clip];
    },
  },
  actions: {
    setIsSoundActive(value) {
      this.isSoundActive = value;
      localStorage.isSoundActive = value;
    },
    setIsSoundSupposedActive(value) {
      this.isSupposedActive = value;
    },
    setIsSoundPlaying({ title, value }) {
      this[title] = value;
    },
    setActiveSounds(value, isActive = true) {
      if (isActive) {
        this.activeSounds.push(value);
      } else {
        this.activeSounds = this.activeSounds.filter((item) => item !== value);
      }
    },
  },
});
