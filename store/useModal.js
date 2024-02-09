// store/image.js

import { defineStore } from "pinia";

export const useModal = defineStore("modal", {
  state: () => ({
    isModalActive: false,
    image: {},
  }),
  actions: {
    setIsActive(value) {
      if (!value) {
        this.image = {};
      }
      this.isModalActive = value;
    },
    setImage(value) {
      this.image = value;
    },
  },
});
