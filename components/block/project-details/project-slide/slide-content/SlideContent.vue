<style lang="scss" src="./slide-content.scss"></style>

<template>
  <div class="b-slide-content flex flex-col justify-center lg:flex-row gap-3 lg:gap-16">
    <div
      v-for="(column, i) in blok.columns"
      :key="i"
      class="flex flex-col gap-4 lg:gap-8 justify-center lg:w-1/2 lg:overflow-y-scroll"
    >
      <div
        v-for="(item, j) in column.items"
        :key="j"
        :class="[`slide-content-item is-${item.type}`]"
      >
        <!-- Image -->
        <ImageFrame
          v-if="item.image"
          :size="2"
          :image="item"
          :isThick="true"
          :isInverted="true"
          :isWidthFull="true"
          :onClick="onFrameClick"
          class="slide-content-image"
        >
        </ImageFrame>


        <UtilRichtext v-else :text="item.text" />


        <!-- CTA -->
        <!-- <Cta
          v-else
          class="project-slide-cta"
          :text="item.text"
          :to="item.link"
        /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ColumnsType } from "~/types/types";
import { useApp } from "~/store/useApp";


const appStore = useApp();
const { global } = storeToRefs(appStore);

const props = defineProps({
  size: {
    type: Number,
    default: 1,
  },
  blok: {
    type: Object as PropType<ColumnsType>,
    default: () => {},
  },
  onFrameClick: {
    type: Function,
    default: () => null,
  },
});


</script>
