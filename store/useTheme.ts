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
    isDarkTheme: false,
    isPageReloaded: false,
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

      const { primary, negative } = getRandomColorTheme();

      this.primary = isRandomTheme ? primary : this.originalPrimary;
      this.negative = isRandomTheme ? negative : this.originalNegative;

      this.count++;

      const storageTheme = {
        isDarkTheme: this.isDarkTheme,
        primary: this.primary,
        negative: this.negative,
        count: this.count.toString(),
      };

      this.setThemeColors(storageTheme);

      saveThemeColorsInStorage(storageTheme);
    },
    setThemeColors(
      theme: {
        isDarkTheme: boolean;
        primary: string;
        negative: string;
        count: string;
      } | null
    ) {
      if (!theme) return;

      this.isDarkTheme = theme.isDarkTheme;
      this.primary = theme.primary;
      this.negative = theme.negative;
      this.count = theme.count?.length ? parseInt(theme.count) : 0;

      this.isThemeSet = true;
    },
  },
});
