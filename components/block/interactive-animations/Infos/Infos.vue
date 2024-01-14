<style lang="scss" src="./infos.scss"></style>

<template>
    <div v-if="isInfosActive && !isSmallScreen" class="b-infos">
        <!-- <info
            class="infos-poster"
            arrow="top"
            :clickText="InfosPlacholder.poster?.click"
        />
        <info
            class="infos-light"
            arrow="top"
            :clickText="InfosPlacholder.light?.click"
        />
        <info
            class="infos-cat"
            arrow="bottom"
            :clickText="InfosPlacholder.cat?.click"
            :hoverText="InfosPlacholder.cat?.hover"
        />
        <info
            class="infos-ball"
            arrow="top"
            :clickText="InfosPlacholder.ball?.click"
            :hoverText="InfosPlacholder.ball?.hover"
        />
        <info
            class="infos-bird"
            arrow="right"
            :hoverText="InfosPlacholder.bird?.hover"
        />
        <info
            class="infos-clock"
            :arrow="documentBreakpoint === 'md' ? 'bottom' : 'left'"
            :text="InfosPlacholder.clock?.none"
        />
        <info
            class="infos-desktop"
            arrow="top"
            :clickText="InfosPlacholder.desktop?.click"
            :hoverText="InfosPlacholder.desktop?.hover"
        />
        <info
            class="infos-laptop"
            arrow="top"
            :clickText="InfosPlacholder.laptop?.click"
            :hoverText="InfosPlacholder.laptop?.hover"
        />
        <info
            class="infos-headphones"
            arrow="right"
            :clickText="InfosPlacholder.headphones?.click"
            :hoverText="InfosPlacholder.headphones?.hover"
        />
        <info
            class="infos-books"
            arrow="top"
            :clickText="InfosPlacholder.books?.click"
            :hoverText="InfosPlacholder.books?.hover"
        />
        <info
            class="infos-bike"
            arrow="top"
            :clickText="InfosPlacholder.bike?.click"
            :hoverText="InfosPlacholder.bike?.hover"
        /> -->

        <Info
            v-for="(info, i) in InfosList"
            :key="i"
            :class="`infos-${info.name}`"
            :arrow="info.arrow"
            :text="info.text"
            :arrowTablet="info.arrowTablet"
            :clickText="info.click"
            :hoverText="info.hover"
        />
    </div>
</template>



<script setup lang="ts">
type InfoType = {
    name: string;
    arrow: "top" | "right" | "bottom" | "left";
    arrowTablet?: "top" | "right" | "bottom" | "left";
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
        text: "Shows real time",
    },
    {
        name: "desktop",
        arrow: "top",
        hover: "Get attention",
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

const appStore = useApp();
const { isInfosActive, isSmallScreen } = storeToRefs(appStore);

watch(isInfosActive, (value) => {
    console.log("isInfosActive 2", value);
    console.log("isInfosActive 2", value);
    console.log("isInfosActive 2", value);
});
</script>
