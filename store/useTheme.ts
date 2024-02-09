// store/index.ts
import { defineStore } from "pinia";

interface ThemeState {
  isDarkTheme: boolean;
  isPageReloaded: boolean;
  isRandomTheme: boolean;
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
    isRandomTheme: false,
    originalPrimary: "#222",
    originalNegative: "#eee",
    primary: "#222",
    negative: "#eee",
    count: 1,
  }),
  actions: {
    toggleIsDarkTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      // localStorage?.isDarkTheme = this.isDarkTheme;

      // every 2nd - 6th click trigger random colors
      if (this.count % 6 > 1) {
        const randomColor = getRandomColor();

        this.primary = randomColor;
        this.negative = getContrastColor(randomColor);
      } else {
        this.primary = this.originalPrimary;
        this.negative = this.originalNegative;
      }

      this.count++;
    },
  },
});

const getRandomColor = (): string => {
  let color = Math.floor(Math.random() * 16777215).toString(16);

  while (color.length < 6) {
    color += "9"; // in case it is shorter than 6 hex digits
  }

  return `#${color}`;
};

const getContrastColor = (hexColor: string): string => {
  let r = parseInt(hexColor.substr(2, 2), 16);
  let g = parseInt(hexColor.substr(4, 2), 16);
  let b = parseInt(hexColor.substr(6, 2), 16);
  let yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#222" : "#eee";
};
