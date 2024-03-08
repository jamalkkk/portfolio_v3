// store/tags.ts

import { defineStore } from "pinia";

interface TagsState {
  activeTags: any[]; // Adjust the type according to your specific requirements
}

export const useTags = defineStore("tags", {
  state: (): TagsState => ({
    activeTags: [],
  }),
  actions: {
    setTags(value: any[]) {
      // Adjust the type according to your specific requirements
      this.activeTags = [...value];
    },
  },
});
