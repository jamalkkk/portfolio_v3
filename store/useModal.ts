// store/image.ts

import { defineStore } from "pinia";

interface ModalState {
  isModalActive: boolean;
  image: Record<string, any>; // Adjust this type according to the structure of your image object
}

export const useModal = defineStore("modal", {
  state: (): ModalState => ({
    isModalActive: false,
    image: {},
  }),
  actions: {
    setIsModalActive(value: boolean) {
      if (!value) {
        this.image = {};
      }

      this.isModalActive = value;
    },
    setImage(value: Record<string, any>) {
      this.image = value;
    },
  },
});
