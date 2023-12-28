// store/app.js

import { defineStore } from "pinia";

export const useApp = defineStore("app", {
  state: () => ({
    isHomeActive: false,
    isMainHomeActive: true,
    isUserOnPage: true,
    isInfosActive: false,
    isInfoInfoActive: false,
    isSmallScreen: false,
    isDataLoaded: false,
    isProjectLoaded: false,
    shouldScrollToProjects: false,
    shouldHomeBeActive: true,
    documentBreakpoint: "sm",
    project: {},
    projects: {},
    tags: {},
    info: {},
  }),
  actions: {
    setData(value) {
      this[value.type] = value.data;
    },
    setProject(value) {
      this.project = value;
      this.isProjectLoaded = !!value.title;
    },
    setIsDataLoaded(value) {
      this.isDataLoaded = value;
    },
    setIsMainHomeActive(value) {
      this.isMainHomeActive = value;
    },
    setIsHomeActive(value) {
      this.isHomeActive = value;
      this.shouldHomeBeActive = value;

      if (!value) {
        this.isInfosActive = false;
      }
    },
    setDocumentBreakpoint(value) {
      this.isSmallScreen = value === "sm";
      this.documentBreakpoint = value;
    },
    setIsInfoInfoActive(value) {
      this.isInfoInfoActive = value;
    },
    setShouldScrollToProjects(value) {
      this.shouldScrollToProjects = value;
    },
    toggleShouldHomeBeActive(value) {
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
