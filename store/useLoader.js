// store/loader.js

import { defineStore } from "pinia";

export const useLoader = defineStore("loader", {
  state: () => ({
    isLoaderActive: true,
    shouldProjectLoaderBeActive: false,
  }),
  actions: {
    setIsLoaderActive(value) {
      this.isLoaderActive = value;
    },
    setShouldProjectLoaderBeActive(value) {
      this.shouldProjectLoaderBeActive = value;
    },
  },
});
