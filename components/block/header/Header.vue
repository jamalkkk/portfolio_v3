<style lang="scss" src="./header.scss"></style>

<template>
    <div
        :class="[
            'b-header position-absolute w-100',
            {
                'is-centered': isHomePage,
                'is-main-home-active': isMainHomeActive && isHomePage,
                'are-controls-hidden': isUIHidden,
            },
        ]"
    >
        <Icon
            :isButton="true"
            class="header-logo"
            name="logo"
            :size="2"
            :tabindex="2"
            :onClick="handleLogoClick"
        />
    </div>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";
import { usePlayer } from "~/store/usePlayer";

const appStore = useApp();
const playerStore = usePlayer();

const { scrollToHome, closeProject } = useCommon();

const { toggleShouldHomeBeActive } = appStore;
const { isMainHomeActive } = storeToRefs(appStore);
const { isUIHidden } = storeToRefs(playerStore);

const props = defineProps({
    isHomePage: {
        type: Boolean,
        default: true,
    },
});

const handleLogoClick = () => {
    if (props.isHomePage) {
        if (isMainHomeActive.value) {
            toggleShouldHomeBeActive();
        } else {
            scrollToHome();
        }
    } else {
        closeProject(false);
    }
};
</script>
