// store/image.ts

import { defineStore } from "pinia";

interface ModalState {
  isModalActive: boolean;
  image: string;
  projectImages: string[]; // List of all images in the project
}

export const useModal = defineStore("modal", {
  state: (): ModalState => ({
    isModalActive: false,
    image: {},
    projectImages: [],
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
    setProjectImages(value: string[]) {
      this.projectImages = value;
    },
  },
});
