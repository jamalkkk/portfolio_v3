<style lang="scss" src="./slide-content.scss"></style>

<template>
    <div :class="['b-slide-content container']">
        <div class="slide-content-row row">
            <div
                v-for="(item, i) in items"
                :key="i"
                :class="`slide-content-item col-12 col-md-6 is-${item.type}`"
            >
                <!-- Image -->
                <ImageFrame
                    v-if="item.type === 'image'"
                    class="project-slide-frame"
                    :size="item.imageSize"
                    :img="item.img"
                    :is-thick="true"
                    :is-inverted="true"
                    :on-click="onFrameClick"
                >
                </ImageFrame>

                <!-- Text -->
                <p v-else-if="item.type === 'text'" class="project-slide-text">
                    {{ item.text }}
                </p>

                <!-- CTA -->
                <Cta
                    v-else
                    class="project-slide-cta"
                    :text="item.text"
                    :to="item.link"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SlideContentType } from "~/types/types";

const props = defineProps({
    size: {
        type: Number,
        default: 1,
    },
    items: {
        type: Array as PropType<SlideContentType[]>,
        default: () => [],
    },
    onFrameClick: {
        type: Function,
        default: () => null,
    },
});
</script>
