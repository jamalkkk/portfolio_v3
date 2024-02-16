<style lang="scss" src="./slide-content.scss"></style>

<template>
    <div
        :class="[
            'b-slide-content flex flex-col justify-center md:flex-row gap-8 ',
        ]"
    >
        <div
            v-for="(column, i) in columns"
            :key="i"
            class="flex flex-col gap-8 justify-center md:w-1/2"
        >
            <div
                v-for="(item, j) in column.items"
                :key="j"
                :class="[`slide-content-item is-${item.type}`]"
            >
                <!-- Image -->
                <ImageFrame
                    v-if="item.type === 'image'"
                    :size="item.imageSize"
                    :img="item.img"
                    :isThick="true"
                    :isInverted="true"
                    :isWidthFull="true"
                    :onClick="onFrameClick"
                    class="slide-content-image"
                >
                </ImageFrame>

                <!-- Text -->
                <p
                    v-else-if="item.type === 'text'"
                    class="text-2xl md:text-x3l"
                >
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
    columns: {
        type: Array as PropType<SlideContentType[]>,
        default: () => [],
    },
    onFrameClick: {
        type: Function,
        default: () => null,
    },
});
</script>
