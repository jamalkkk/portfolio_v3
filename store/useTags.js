// store/tags.js

import { defineStore } from "pinia";

export const useTags = defineStore("tags", {
  state: () => ({
    activeTags: [],
  }),
  actions: {
    setTags(value) {
      this.activeTags = [...value];
    },
  },
});
