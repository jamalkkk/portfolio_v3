// store/loader.ts

import { defineStore } from "pinia";

interface LoaderState {
  isLoaderActive: boolean;
  shouldProjectLoaderBeActive: boolean;
}

export const useLoader = defineStore("loader", {
  state: (): LoaderState => ({
    isLoaderActive: true,
    shouldProjectLoaderBeActive: false,
  }),
  actions: {
    setIsLoaderActive(value: boolean) {
      this.isLoaderActive = value;
    },
    setShouldProjectLoaderBeActive(value: boolean) {
      this.shouldProjectLoaderBeActive = value;
    },
  },
});
