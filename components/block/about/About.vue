<style lang="scss" src="./about.scss"></style>

<template>
    <div v-if="isReady" class="b-about">
        <div class="about-container flex flex-col gap-y-24 px-4">
            <div class="flex flex-col gap-y-4">
                <Headline :text="global?.name" />
                <UtilRichtext :text="global.about || AboutText" />
            </div>
            <div class="flex flex-col gap-y-4">
                <Email />
                <SocialMedias />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";

const { AboutText } = useBackupData();

const appStore = useApp();
const { global } = storeToRefs(appStore);

// @todo: fix logic when coming back from projects
const isReady = ref<boolean>(global.value?.sounds);

watch(
    () => global.value,
    (value) => {
        if (value) {
            isReady.value = true;
        }
    }
);
</script>
