// store/loader.ts

import { defineStore } from "pinia";

interface LoaderState {
  isLoaderActive: boolean;
  isLoaderTransitioning: boolean;
  shouldProjectLoaderBeActive: boolean;
}

export const useLoader = defineStore("loader", {
  state: (): LoaderState => ({
    isLoaderActive: true,
    isLoaderTransitioning: false,
    shouldProjectLoaderBeActive: false,
  }),
  actions: {
    setIsLoaderActive(value: boolean) {
      this.isLoaderActive = value;
    },
    setIsLoaderTransitioning(value: boolean) {
      this.isLoaderTransitioning = value;
    },
    setShouldProjectLoaderBeActive(value: boolean) {
      this.shouldProjectLoaderBeActive = value;
    },
  },
});
