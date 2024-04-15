<style lang="scss" src="./loader.scss"></style>

<template>
  <div
    v-if="isFaderActive"
    class="b-fader"
    :class="{ 'is-transitioning': isFaderTransitioning }"
  ></div>

  <div
    v-else-if="isLoaderActive"
    :class="[
      'b-loader',
      {
        'is-page-loading': isPageLoading,
        'is-page-loaded': isPageLoaded,
        'is-page-fading-out': isFadingOut,
      },
    ]"
  >
    <Frame class="loader-frame" :is-thick="true" :is-page="true">
      <div class="loader-container">
        <div class="loader-face">
          <JKSvg name="animation_face" />
          <div class="loader-eyes">
            <JKSvg class="loader-eye eye-left" name="animation_eye" />
            <JKSvg class="loader-eye eye-right" name="animation_eye" />
          </div>
        </div>
        <div class="loader-line-wrapper">
          <JKLine class="loader-line" :is-centered="false" />
        </div>
        <div class="loader-content">
          <Cta
            class="loader-button"
            :isButton="true"
            text="Let's go"
            :onClick="hideLoader"
          />
          <JKText
            v-if="!isPageLoaded"
            class="loader-text"
            :isSecondaryFont="true"
            :text="loadingMessage"
          />
        </div>
      </div>
      <JKText
        class="loader-note"
        text="View me on desktop to have the best experience."
        :isXSmall="true"
      />
    </Frame>
  </div>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";
import { useLoader } from "~/store/useLoader";
import { useTheme } from "~/store/useTheme";

const appStore = useApp();
const loaderStore = useLoader();
const themeStore = useTheme();

const { setIsLoaderActive, setIsLoaderTransitioning } = loaderStore;
const { isDataLoaded, isProjectLoaded } = storeToRefs(appStore);
const { isLoaderActive, isLoaderTransitioning } = storeToRefs(loaderStore);
const { isThemeSet } = storeToRefs(themeStore);

const LOAD_TIME = 1000;

const { MDMessages } = useMockData();

const isFaderActive = ref(true);
const isFaderTransitioning = ref(true);

const isPageLoading = ref(true);
const isPageLoaded = ref(false);
const isFadingOut = ref(false);
const hasPageAlreadyLoaded = ref(false);

const isChangingColor = ref(true);

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const loadingMessage = computed(() => {
  const dot = '<span class="loader-dot">.</span>';
  return `${MDMessages[getRandomInt(MDMessages.length - 1)]}${dot}${dot}${dot}`;
});

const isFirstTimeLoader = () => {
  if (localStorage.hasPageAlreadyLoaded) {
    setTimeout(() => {
      hideLoader();
      hasPageAlreadyLoaded.value = true;
    }, 300);
  }
};

const completeLoader = () => {
  setTimeout(
    () => {
      isPageLoaded.value = true;
      isPageLoading.value = false;
      localStorage.hasPageAlreadyLoaded = true;
    },
    hasPageAlreadyLoaded.value ? 0 : LOAD_TIME
  );
};

const hideLoader = () => {
  isFadingOut.value = true;

  setTimeout(() => setIsLoaderActive(false), 500);
};

const hideFader = () => {
  isFaderTransitioning.value = false;
  setTimeout(() => {
    isFaderActive.value = false;
    setIsLoaderTransitioning(false);
  }, 600);
};

const handleKeyStroke = (e: KeyboardEvent) => {
  if ([32, 13].includes(e.keyCode) && isPageLoaded.value) {
    hideLoader();
  }
};

watch(
  () => isDataLoaded.value,
  (value) => {
    if (value) {
      completeLoader();
      isFirstTimeLoader();
    }
  }
);

watch(
  () => isProjectLoaded.value,
  (value) => {
    if (value) {
      isFirstTimeLoader();
    }
  }
);

watch(
  () => isLoaderTransitioning.value,
  (value) => {
    if (value) {
      isFaderActive.value = true;

      setTimeout(() => {
        isFaderTransitioning.value = true;
      }, 1);
    }
  }
);


watch(
  () => isThemeSet.value,
  (value) => {
    if (value) {
      isChangingColor.value = false;
    }
  }
);

onMounted(() => {
  // Show fader only when tranistioning between pages
  isFaderTransitioning.value = isLoaderTransitioning.value;
  isFaderActive.value = isLoaderTransitioning.value;

  if (isLoaderTransitioning.value) {
    hideFader();
  }

  window.addEventListener("keyup", handleKeyStroke);
});

onUnmounted(() => {
  window.removeEventListener("keyup", handleKeyStroke);
});
</script>
