import type { ISbRichtext } from "storyblok-js-client";
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

// Player
export type VideoType = {
  type: string;
  videoId: string;
};

// Project
export type ContentItemType = {
  type: "text" | "image" | "link";
  imageSize: number;
  image: ImageType;
  text: string;
  link: string;

  // For now
  img: string;
};

export type SlideContentType = {
  items: ContentItemType[];
};

export type ProjectSlideType = {
  type: "video" | "image" | "columns";
  columns: SlideContentType[];
  image: ImageType;
  video: VideoType;
  description: string;

  // For now
  img: string;
};

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  image: string;
  slides: ProjectSlideType[];
  tags: string[];
};

// Storyblok
export type ISocialLink = {
  icon: string;
  url: string;
  alt: string;
};

export type SBGlobal = {
  // about
  name: string;
  about: ISbRichtext | null;
  social_media: ISocialLink[] | [];

  // footer
  created_by: string;
};
