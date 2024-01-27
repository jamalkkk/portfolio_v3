// store/index.ts
import { defineStore } from "pinia";

export const useTheme = defineStore("theme", {
  state: () => ({
    isDarkTheme: false, //localStorage?.isDarkTheme === "true",
    isPageReloaded: false, //localStorage?.isPageReloaded === "true",
    primary: "#222",
    negative: "#eee",
  }),
  getters: {
    // isDarkTheme: (state) => state.false, //,
    // isPageReloaded: (state) => state.localStorage?.isPageReloaded === "true",
  },
  actions: {
    toggleIsDarkTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      // localStorage?.isDarkTheme = this.isDarkTheme;
    },
  },
});
