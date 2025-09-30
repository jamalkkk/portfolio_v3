// store/tags.ts

import { set } from "nuxt/dist/app/compat/capi";
import { defineStore } from "pinia";

interface TagsState {
  activeTags: any[]; // Adjust the type according to your specific requirements
  isAllActive: boolean;
}

export const useTags = defineStore("tags", {
  state: (): TagsState => ({
    activeTags: [],
    isAllActive: true,
  }),
  actions: {
    setTags(value: any[]) {
      this.activeTags = [...value];
    },
    setIsAllActive(value: boolean) {
      this.isAllActive = value;
    },
  },
});
