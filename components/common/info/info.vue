<style lang="scss" src="./info.scss"></style>

<template>
    <div
        ref="info"
        :class="[
            `b-info has-arrow-${infoArrow}`,
            {
                'is-active': isInfosActive && isPartOfInfos,
            },
        ]"
        :style="{
            animationDelay: getRandomInt(300) + 'ms',
        }"
    >
        <!-- Normal text -->
        <JKText
            v-if="text"
            :isXSmall="true"
            :isLight="true"
            :isInverted="true"
            :isSecondaryFont="true"
            :text="replaceSpace(text)"
        />

        <!-- Hover Text -->
        <div v-if="hoverText" class="info-hover">
            <JKText
                :isXSmall="true"
                :isBold="true"
                :isInverted="true"
                :text="`Wave&nbsp;${Divider}`"
            />

            <JKText
                class="info-text"
                :isXSmall="true"
                :isLight="true"
                :isInverted="true"
                :isSecondaryFont="true"
                :text="replaceSpace(hoverText)"
            />
        </div>

        <!-- Click Text -->
        <div v-if="clickText" class="info-click">
            <JKText
                :isXSmall="true"
                :isBold="true"
                :isInverted="true"
                :text="`Click&nbsp;${Divider}`"
            />

            <JKText
                class="info-text"
                :isXSmall="true"
                :isLight="true"
                :isInverted="true"
                :isSecondaryFont="true"
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
        type: String as PropType<"top" | "right" | "bottom" | "left">,
        default: "bottom",
    },
    arrowTablet: {
        type: String as PropType<"top" | "right" | "bottom" | "left">,
        default: "bottom",
    },
    text: {
        type: String,
        default: "",
    },
    clickText: {
        type: String,
        default: "",
    },
    hoverText: {
        type: String,
        default: "",
    },
});
import { useApp } from "~/store/useApp";

const appStore = useApp();
const { isInfosActive, documentBreakpoint } = appStore;

const infoArrow = computed(() =>
    props.arrowTablet && documentBreakpoint === "md"
        ? props.arrowTablet
        : props.arrow
);

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
