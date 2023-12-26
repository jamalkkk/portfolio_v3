// store/tags.js

import { defineStore } from "pinia";

export const useTags = defineStore("tags", {
  state: () => ({
    items: [],
  }),
  actions: {
    setTags(value) {
      this.items = [...value];
    },
  },
});
