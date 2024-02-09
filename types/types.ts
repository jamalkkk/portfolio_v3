import SwiperCore from "swiper";

// Plugins
export type SwiperType = SwiperCore;

//  Layout
export type Headline = "h1" | "h2" | "h3";

export type ImageType = {
  url: string;
  alt: string;
};

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
export type SlideContentType = {
  type: "text" | "image" | "link";
  imageSize: number;
  image: ImageType;
  text: string;
  link: string;

  // For now
  img: string;
};

export type ProjectSlideType = {
  type: "video" | "image" | "content";
  content: SlideContentType[];
  image: ImageType;
  video: Object;
  description: string;

  // For now
  img: string;
};

export type ProjectType = {
  title: string;
  slides: ProjectSlideType[];
  tags: string[];
};
