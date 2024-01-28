// store/index.ts
import { defineStore } from "pinia";

export const useTheme = defineStore("theme", {
  state: () => ({
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

      // every 2th - 6th click are random color
      if (this.count % 6 > 1) {
        const radnomColor = getRandomColor();

        this.primary = radnomColor;
        this.negative = getContrastColor(radnomColor);
      } else {
        this.primary = this.originalPrimary;
        this.negative = this.originalNegative;
      }

      this.count++;
    },
  },
});

const getRandomColor = () => {
  let color = Math.floor(Math.random() * 16777215).toString(16);

  while (color.length < 6) {
    color += "9"; // in case is shorter thatn 6 hex digits
  }

  return ` #${color}`;
};

const getContrastColor = (hexColor) => {
  let r = parseInt(hexColor.substr(2, 2), 16);
  let g = parseInt(hexColor.substr(4, 2), 16);
  let b = parseInt(hexColor.substr(6, 2), 16);
  let yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#222" : "#eee";
};

// Second random color code
// const getContrastColors = (hexColor) => {
//   let r = parseInt(hexColor.substr(1, 2), 16);
//   let g = parseInt(hexColor.substr(3, 2), 16);
//   let b = parseInt(hexColor.substr(5, 2), 16);

//   let hsl = rgbToHsl(r, g, b);
//   let invertedHue = (hsl[0] + 180) % 360;
//   let rgb = hslToRgb(invertedHue, hsl[1], hsl[2]);

//   return rgbToHex(rgb[0], rgb[1], rgb[2]);
// };

// const rgbToHsl = (r, g, b) => {
//   (r /= 255), (g /= 255), (b /= 255);
//   let max = Math.max(r, g, b),
//     min = Math.min(r, g, b);
//   let h,
//     s,
//     l = (max + min) / 2;

//   if (max === min) {
//     h = s = 0; // achromatic
//   } else {
//     let d = max - min;
//     s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
//     switch (max) {
//       case r:
//         h = (g - b) / d + (g < b ? 6 : 0);
//         break;
//       case g:
//         h = (b - r) / d + 2;
//         break;
//       case b:
//         h = (r - g) / d + 4;
//         break;
//     }
//     h /= 6;
//   }

//   return [h * 360, s * 100, l * 100];
// };

// const hslToRgb = (h, s, l) => {
//   let r, g, b;

//   h /= 360;
//   s /= 100;
//   l /= 100;

//   if (s === 0) {
//     r = g = b = l; // achromatic
//   } else {
//     const hue2rgb = (p, q, t) => {
//       if (t < 0) t += 1;
//       if (t > 1) t -= 1;
//       if (t < 1 / 6) return p + (q - p) * 6 * t;
//       if (t < 1 / 2) return q;
//       if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
//       return p;
//     };

//     const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
//     const p = 2 * l - q;
//     r = hue2rgb(p, q, h + 1 / 3);
//     g = hue2rgb(p, q, h);
//     b = hue2rgb(p, q, h - 1 / 3);
//   }

//   return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
// };

// const rgbToHex = (r, g, b) => {
//   let color = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

//   while (color.length < 6) {
//     color += "9"; // You can choose any character here to pad
//   }

//   return ` #${color}`;
// };
