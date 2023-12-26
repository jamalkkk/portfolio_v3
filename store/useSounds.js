// store/sounds.js

import { defineStore } from "pinia";

export const useSounds = defineStore("sounds", {
  state: () => ({
    isActive: false,
    isSupposedActive: false,
    ball: false,
    bikeBell: false,
    bikeChain: false,
    background: false,
    cat: false,
    poster: false,
  }),
  actions: {
    setIsActive(value) {
      this.isActive = value;
      localStorage.isSoundActive = value;
    },
    setIsSupposedActive(value) {
      this.isSupposedActive = value;
    },
    setIsSoundPlaying({ title, value }) {
      this[title] = value;
    },
  },
});
