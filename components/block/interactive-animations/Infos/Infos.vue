<style lang="scss" src="./infos.scss"></style>

<template>
    <div v-if="isInfosActive && !isSmallScreen" class="b-infos">
        <info
            class="infos-poster"
            arrow="top"
            :clickText="InfosPlacholder.poster.click"
        />
        <info
            class="infos-light"
            arrow="top"
            :clickText="InfosPlacholder.light.click"
        />
        <info
            class="infos-cat"
            arrow="bottom"
            :clickText="InfosPlacholder.cat.click"
            :hoverText="InfosPlacholder.cat.hover"
        />
        <info
            class="infos-ball"
            arrow="top"
            :clickText="InfosPlacholder.ball.click"
            :hoverText="InfosPlacholder.ball.hover"
        />
        <info
            class="infos-bird"
            arrow="right"
            :hoverText="InfosPlacholder.bird.hover"
        />
        <info
            class="infos-clock"
            :arrow="documentBreakpoint === 'md' ? 'bottom' : 'left'"
            :text="InfosPlacholder.clock.none"
        />
        <info
            class="infos-desktop"
            arrow="top"
            :clickText="InfosPlacholder.desktop.click"
            :hoverText="InfosPlacholder.desktop.hover"
        />
        <info
            class="infos-laptop"
            arrow="top"
            :clickText="InfosPlacholder.laptop.click"
            :hoverText="InfosPlacholder.laptop.hover"
        />
        <info
            class="infos-headphones"
            arrow="right"
            :clickText="InfosPlacholder.headphones.click"
            :hoverText="InfosPlacholder.headphones.hover"
        />
        <info
            class="infos-books"
            arrow="top"
            :clickText="InfosPlacholder.books.click"
            :hoverText="InfosPlacholder.books.hover"
        />
        <info
            class="infos-bike"
            arrow="top"
            :clickText="InfosPlacholder.bike.click"
            :hoverText="InfosPlacholder.bike.hover"
        />
    </div>
</template>

<script setup lang="ts">
const InfosPlacholder = [
    {
        light: {
            click: "Switch dark theme",
        },
    },
    {
        poster: {
            click: "Rick's catchphrase",
        },
    },
    {
        cat: {
            click: "Cat meows",
            hover: "Cat Blinks",
        },
    },
    {
        ball: {
            hover: "Roll ball",
            click: "Bounce ball",
        },
    },
    {
        bird: {
            hover: "Call bird",
            type: "hover",
        },
    },
    {
        clock: {
            none: "Shows real time",
        },
    },
    {
        desktop: {
            hover: "Get attention",
        },
    },
    {
        bike: {
            hover: "Spin wheels",
            click: "Ring bell",
        },
    },
];

import { useApp } from "~/store/useApp";

const appStore = useApp();
const { isInfosActive, isSmallScreen } = appStore;
</script>
