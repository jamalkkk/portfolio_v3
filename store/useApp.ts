// store/app.ts

import { defineStore } from "pinia";
const { MDTags, MDProjects } = useMockData();

import type { ProjectType, SBGlobal, SBTags } from "~/types/types";

interface AppState {
  isHomeActive: boolean;
  isMainHomeActive: boolean;
  isUserOnPage: boolean;
  isInfosActive: boolean;
  isInfoInfoActive: boolean;
  isSmallScreen: boolean;
  isDataLoaded: boolean;
  isProjectLoaded: boolean;
  shouldScrollToProjects: boolean;
  shouldHomeBeActive: boolean;
  documentBreakpoint: string;
  info: any; // Define appropriate type for info
  project: ProjectType; // Define appropriate type for project
  projects: ProjectType[]; // Define appropriate type for projects
  tags: SBTags[]; // Define appropriate type for tags
  global: SBGlobal;
}

export const useApp = defineStore("app", {
  state: (): AppState => ({
    isHomeActive: false,
    isMainHomeActive: true,
    isUserOnPage: true,
    isInfosActive: false,
    isInfoInfoActive: false,
    isSmallScreen: false,
    isDataLoaded: true,
    isProjectLoaded: false,
    shouldScrollToProjects: false,
    shouldHomeBeActive: true,
    documentBreakpoint: "sm",
    info: {},
    project: MDProjects[0],
    projects: MDProjects,
    tags: MDTags,
    global: {
      name: "",
      about: null,
      social_media: [],
      created_by: "",
    },
  }),
  actions: {
    setGlobal(value: SBGlobal) {
      this.global = value;
    },
    setTags(value: SBTags[]) {
      this.tags = value;

      console.log("tags", this.tags);
    },
    setProject(value: any) {
      this.project = value;
      this.isProjectLoaded = !!value.title;
    },
    setIsDataLoaded(value: boolean) {
      this.isDataLoaded = value;
    },
    setIsMainHomeActive(value: boolean) {
      this.isMainHomeActive = value;
    },
    setIsHomeActive(value: boolean) {
      this.isHomeActive = value;
      this.shouldHomeBeActive = value;

      if (!value) {
        this.isInfosActive = false;
      }
    },
    setDocumentBreakpoint(value: string) {
      this.isSmallScreen = value === "sm";
      this.documentBreakpoint = value;
    },
    setIsInfoInfoActive(value: boolean) {
      this.isInfoInfoActive = value;
    },
    setShouldScrollToProjects(value: boolean) {
      this.shouldScrollToProjects = value;
    },
    toggleShouldHomeBeActive() {
      this.shouldHomeBeActive = !this.isHomeActive;
    },
    toggleIsUserOnPage() {
      this.isUserOnPage = !document.hidden;
    },
    toggleIsInfosActive() {
      if (!this.isInfosActive && !this.isHomeActive) {
        this.isHomeActive = true;
      }

      this.isInfosActive = !this.isInfosActive;
    },
  },
});
