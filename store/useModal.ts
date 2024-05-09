// store/image.ts

import { defineStore } from "pinia";

interface ModalState {
  isModalActive: boolean;
  image: ISbAsset;
  projectImages: ISbAsset[]; // List of all images in the project
}

export const useModal = defineStore("modal", {
  state: (): ModalState => ({
    isModalActive: false,
    image: {
      filename: "",
      alt: "",
    },
    projectImages: [],
  }),
  actions: {
    setIsModalActive(value: boolean) {
      if (!value) {
        this.image = {
          filename: "",
          alt: "",
        };
      }

      this.isModalActive = value;
    },
    setImage(value: ISbAsset) {
      this.image = value;
    },
    setProjectImages(value: ISbAsset[]) {
      this.projectImages = value;
    },
  },
});
