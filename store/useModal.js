// store/image.js

import { defineStore } from "pinia";

export const useModal = defineStore("modal", {
  state: () => ({
    isActive: false,
    image: {},
  }),
  actions: {
    setIsActive(value) {
      if (!value) {
        this.image = {};
      }
      this.isActive = value;
    },
    setImage(value) {
      this.image = value;
    },
  },
});
