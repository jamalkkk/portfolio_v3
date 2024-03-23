<style lang="scss" src="./loader.scss"></style>

<template>
    <div
        v-if="isLoaderActive || isProjectLoaderActive || isPageTransitioning"
        :class="[
            'b-loader',
            {
                'is-project-loader': isProjectLoaderActive,
                'is-page-loading': isPageLoading && !isProjectLoaderActive,
                'is-page-loaded': isPageLoaded && !isProjectLoaderActive,
                'is-page-fading-out': isFadingOut && !isProjectLoaderActive,
                'is-fading-in': isProjectFadingIn,
                'is-loaded': isProjectLoaderLoaded,
                'is-fading-out': isProjectFadingOut,
                'is-transitioning': isPageTransitioning,
                'is-active': isPageTransitioning && isTransitioningActive,
            },
        ]"
    >
        <Frame
            v-if="!isPageTransitioning"
            class="loader-frame"
            :is-thick="true"
            :is-page="true"
        >
            <div v-if="!isProjectLoaderActive" class="loader-container">
                <div class="loader-face">
                    <JKSvg name="animation_face" />
                    <div class="loader-eyes">
                        <JKSvg
                            class="loader-eye eye-left"
                            name="animation_eye"
                        />
                        <JKSvg
                            class="loader-eye eye-right"
                            name="animation_eye"
                        />
                    </div>
                </div>
                <div class="loader-line-wrapper">
                    <JKLine class="loader-line" :is-centered="false" />
                </div>
                <div class="loader-content">
                    <cta
                        v-if="!hasStorePageAlreadyLoaded"
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

const appStore = useApp();
const loaderStore = useLoader();

const { setIsLoaderActive, setShouldProjectLoaderBeActive } = loaderStore;
const { isDataLoaded, isProjectLoaded } = storeToRefs(appStore);
const { isLoaderActive, isLoaderTransitioning, shouldProjectLoaderBeActive } =
    storeToRefs(loaderStore);

const LOAD_TIME = 1000;

const { MDMessages } = useMockData();

const isPageLoading = ref(true);
const isPageLoaded = ref(false);
const isFadingOut = ref(false);
const hasPageAlreadyLoaded = ref(false);
const isProjectLoaderActive = ref(false);
const isProjectFadingIn = ref(false);
const isProjectLoaderLoaded = ref(false);
const isProjectFadingOut = ref(false);

const isPageTransitioning = ref(false);
const isTransitioningActive = ref(false);

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
};

const loadingMessage = computed(() => {
    const dot = '<span class="loader-dot">.</span>';
    return `${
        MDMessages[getRandomInt(MDMessages.length - 1)]
    }${dot}${dot}${dot}`;
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

const showProjectLoader = () => {
    isProjectLoaderActive.value = true;
    setTimeout(() => (isProjectFadingIn.value = true), 1);
};

const hideProjectLoader = () => {
    setTimeout(() => (isProjectFadingOut.value = true), 1);
    setTimeout(() => {
        resetProjectLoader();
    }, 300);
};

const handleKeyStroke = (e: KeyboardEvent) => {
    if ([32, 13].includes(e.keyCode) && isPageLoaded.value) {
        hideLoader();
    }
};

const resetProjectLoader = () => {
    isProjectLoaderActive.value = false;
    isProjectLoaderLoaded.value = false;
    isProjectFadingOut.value = false;
    setShouldProjectLoaderBeActive(false);
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
        //@TODO: Polish off transitiion logic

        if (value) {
            isPageTransitioning.value = true;
            setTimeout(() => {
                isTransitioningActive.value = true;
            }, 1);
        } else {
            isTransitioningActive.value = false;
            setTimeout(() => {
                isPageTransitioning.value = false;
            }, 300);
        }
    }
);

watch(
    () => shouldProjectLoaderBeActive.value,
    (value) => {
        if (value) {
            showProjectLoader();
        }
    }
);

onMounted(() => {
    if (shouldProjectLoaderBeActive.value) {
        hideProjectLoader();
    }

    window.addEventListener("keyup", handleKeyStroke);

    //@TODO: Remove after CMS is fixed
    setTimeout(() => {
        hideLoader();
        hasPageAlreadyLoaded.value = true;
    }, LOAD_TIME);
});

onUnmounted(() => {
    window.removeEventListener("keyup", handleKeyStroke);
});
</script>
