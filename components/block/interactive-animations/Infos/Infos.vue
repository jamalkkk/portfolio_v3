<style lang="scss" src="./infos.scss"></style>

<template>
  <div v-if="isInfosActive && !isSmallScreen" class="b-infos">
    <template v-for="(info, i) in infosList" :key="i">
      <Info
        v-if="info.name"
        :class="`infos-${info.name}`"
        :arrow="info.arrow"
        :text="info.normal"
        :arrowTablet="info.arrow_tablet"
        :clickText="info.click"
        :hoverText="info.hover"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
type PositionType = "top" | "right" | "bottom" | "left";

type InfoType = {
  name: string;
  arrow: PositionType;
  arrowTablet?: PositionType;
  click?: string;
  hover?: string;
  text?: string;
};

const InfosList: InfoType[] = [
  {
    name: "light",
    arrow: "top",
    click: "Switch dark theme",
  },
  {
    name: "poster",
    arrow: "top",
    click: "Rick's catchphrase",
  },
  {
    name: "cat",
    arrow: "bottom",
    click: "Cat meows",
    hover: "Cat blinks",
  },
  {
    name: "ball",
    arrow: "top",
    click: "Bounce ball",
    hover: "Roll ball",
  },
  {
    name: "ball",
    arrow: "top",
    click: "Bounce ball",
    hover: "Roll ball",
  },
  {
    name: "bird",
    arrow: "right",
    hover: "Call bird",
  },
  {
    name: "clock",
    arrow: "left",
    arrowTablet: "bottom",
    text: "Current time",
  },
  {
    name: "desktop",
    arrow: "top",
    hover: "Get attention",
    click: "About me",
  },
  {
    name: "bike",
    arrow: "top",
    hover: "Spin wheels",
    click: "Ring bell",
  },
  {
    name: "headphones",
    arrow: "right",
    click: "Un/mute sounds",
  },
  {
    name: "books",
    arrow: "top",
    click: "Show info",
  },
  {
    name: "laptop",
    arrow: "top",
    click: "Show projects",
  },
];
import { useApp } from "~/store/useApp";
import type {
  SBGlobal,
} from "~/types/types";
const appStore = useApp();
const { isInfosActive, isSmallScreen, global } = storeToRefs(appStore);

const infosList = computed(() => {
  const { infos } = global.value as SBGlobal;

  return infos || InfosList;
});
</script>
