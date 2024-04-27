import type { ISbRichtext } from "storyblok-js-client";
import SwiperCore from "swiper";

// Plugins
export type SwiperType = SwiperCore;

//  Layout
export type Headline = "h1" | "h2" | "h3";

export type ImageType = {
  component: "image";
  image: ISbAsset;
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
export type ColumnTextType = {
  component: "column-text";
  text: ISbRichtext;
};

export type ColumnImageType = {
  component: "column-image";
  image: ISbAsset;
};


export type ColumnsType = {
  component: "columns";
  columns: {
    items: (ColumnTextType | ColumnImageType)[];
  }[];
};

// Player
export type VideoType = {
  component: "video";
  type: string;
  id: string;
};

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  image: string;
  slides: (VideoType | ImageType | ColumnsType)[];
  tags: string[];
};

/*
  Storyblok
*/
export type ISocialLink = {
  icon: string;
  url: string;
  alt: string;
};

export type IInfo = {
  name: string;
  normal: string;
  hover: string;
  click: string;
  arrow: "top" | "right" | "bottom" | "left";
};

export type ISound = {
  name: string;
  audio: ISbAsset;
};

export type SBGlobal = {
  //  general
  name: string;

  // about
  about: ISbRichtext | null;
  social_media: ISocialLink[] | [];

  // animation
  infos: IInfo[];
  sounds: ISound[];

  // footer
  created_by: string;
};

export type SBTag = {
  dimension_value: string | null;
  id: number;
  name: string;
  value: string;
};

export type SBProjectDetails = {
  component: "project-details";
  title: string;
  description_short: string;
  slides: IColumns; // | IImage | IVideo;
  tags: string;

  slug?: string;
};

// Project
export type IColumns = {
  component: "columns";
  // items: {

  // }
};

