// store/index.ts
import { defineStore } from "pinia";

interface ThemeState {
  isDarkTheme: boolean;
  isPageReloaded: boolean;
  isThemeSet: boolean;
  originalPrimary: string;
  originalNegative: string;
  primary: string;
  negative: string;
  count: number;
}

export const useTheme = defineStore("theme", {
  state: (): ThemeState => ({
    isDarkTheme: false, //localStorage?.isDarkTheme === "true",
    isPageReloaded: false, //localStorage?.isPageReloaded === "true",
    isThemeSet: false,
    originalPrimary: "#222",
    originalNegative: "#eee",
    primary: "#222",
    negative: "#eee",
    count: 1,
  }),
  actions: {
    toggleIsDarkTheme() {
      const { getRandomColorTheme, saveThemeColorsInStorage } = useCommon();

      this.isDarkTheme = !this.isDarkTheme;

      // every 2nd - 6th click trigger random colors
      const isRandomTheme = this.count % 6 > 1;
      this.primary = isRandomTheme
        ? getRandomColorTheme().primary
        : this.originalPrimary;
      this.negative = isRandomTheme
        ? getRandomColorTheme().negative
        : this.originalNegative;

      this.setThemeColors({ primary: this.primary, negative: this.negative });

      saveThemeColorsInStorage(this.primary, this.negative);

      this.count++;
    },
    setThemeColors(theme: { primary: string; negative: string } | null) {
      if (!theme) return;

      this.primary = theme.primary;
      this.negative = theme.negative;

      this.isThemeSet = true;
    },
  },
});
