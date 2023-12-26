// store/animation.js

import { defineStore } from "pinia";

export const useAnimation = defineStore("animation", {
  state: () => ({
    isAllAnimationActive: true,
  }),
  actions: {
    setIsAllAnimationActive(value) {
      this.isAllAnimationActive = value;
    },
  },
});
