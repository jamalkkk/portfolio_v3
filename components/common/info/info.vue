<style lang="scss" src="./info.scss"></style>

<template>
    <div
        ref="info"
        :class="[
            `b-info has-arrow-${arrow}`,
            {
                'is-active': isInfosActive && isPartOfInfos,
            },
        ]"
        :style="{
            animationDelay: getRandomInt(300) + 'ms',
        }"
    >
        <JKText
            v-if="text"
            :isXSmall="true"
            :isLight="true"
            :isInverted="true"
            :text="replaceSpace(text)"
        />
        <div v-if="hoverText" class="info-hover">
            <JKText :isXSmall="true" :isBold="true" :isInverted="true" />
            <JKText
                class="info-text"
                :isXSmall="true"
                :isLight="true"
                :isInverted="true"
                :text="replaceSpace(hoverText)"
            />
        </div>
        <div v-if="clickText" class="info-click">
            <JKText :isXSmall="true" :isBold="true" :isInverted="true" />
            <JKText
                class="info-text"
                :isXSmall="true"
                :isLight="true"
                :isInverted="true"
                :text="replaceSpace(clickText)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const Divider = "•";

const props = defineProps({
    isPartOfInfos: {
        type: Boolean,
        default: true,
    },
    arrow: {
        type: String,
        default: "bottom",
    },
    text: {
        type: String,
        default: "",
    },
    hoverText: {
        type: String,
        default: "",
    },
    clickText: {
        type: String,
        default: "",
    },
});
import { useApp } from "~/store/useApp";

const appStore = useApp();
const { isInfosActive } = appStore;

const styleObject = computed(() => ({
    animationDelay: getRandomInt(300) + "ms",
}));

const replaceSpace = (text: string) => {
    return text.replace(/\s/g, "&nbsp;");
};

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
};
</script>
