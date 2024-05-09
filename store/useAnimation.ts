// store/animation.ts

import { defineStore } from "pinia";

interface AnimationState {
  isAllAnimationActive: boolean;
}

export const useAnimation = defineStore("animation", {
  state: (): AnimationState => ({
    isAllAnimationActive: true,
  }),
  actions: {
    setIsAllAnimationActive(value: boolean) {
      this.isAllAnimationActive = value;
    },
  },
});
