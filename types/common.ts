import SwiperCore from "swiper";

// Plugins
export type SwiperType = SwiperCore;

//  Layout
export type Headline = "h1" | "h2" | "h3";

// Data Structure
export type Info = {
  about: String;
  socialMedia: Object;
};

// Animation
export type LottieDataType = "ball" | "bike" | "bird" | "cat" | "Desktop";

export type SoundsType =
  | "ball"
  | "bikeBell"
  | "bikeChain"
  | "bird"
  | "cat"
  | "desktopType"
  | "poster"
  | "lightSwitch"
  | "lightSwing";

export type CatSegmentsType = "sleep" | "blink";

export type DesktopSegmentsType =
  | "type"
  | "coffee"
  | "look"
  | "standup"
  | "standing"
  | "sitdown";

// Project
export type ProjectType = {
  title: string;
  slides: {
    description: string;
    images: string[];
  };
  tags: string[];
};
