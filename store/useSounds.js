// store/sounds.js

import { defineStore } from "pinia";

export const useSounds = defineStore("sounds", {
  state: () => ({
    isSoundActive: false,
    isSoundSupposedActive: false,
    ball: false,
    bikeBell: false,
    bikeChain: false,
    background: false,
    cat: false,
    poster: false,
  }),
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
  },
});
