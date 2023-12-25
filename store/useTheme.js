// store/index.ts
import { defineStore } from "pinia";

export const useTheme = defineStore("theme", {
  state: () => ({
    isDarkTheme: false, //ocalStorage?.isDarkTheme === "true",
    isPageReloaded: false, //localStorage?.isPageReloaded === "true",
    primary: "#222",
    negative: "#eee",
  }),
  actions: {
    toggleIsDarkTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      //   localStorage?.isDarkTheme = this.isDarkTheme;
    },
  },
});
