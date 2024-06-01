<style lang="scss" src="./modal.scss"></style>

<template>
    <div
        v-if="isModalActive"
        :class="[
            'b-modal',
            {
                'is-active': isActive,
            },
        ]"
        @keydown="prevImage()"
    >
        <!-- Loader -->
        <div class="modal-loader">
            <icon class="loader-icon" name="loader" :size="3" />
        </div>
        <div class="modal-container" @click="closeModal">
            <LazyJKImage :image="currentImage" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useModal } from "~/store/useModal";
import { useTheme } from "~/store/useTheme";

const modalStore = useModal();
const themeStore = useTheme();

const { negative } = storeToRefs(themeStore);

const { setIsModalActive } = modalStore;
const { isModalActive, image, projectImages } = storeToRefs(modalStore);

const $image = ref<HTMLElement>();

const isActive = ref(false);
const activeImageIndex = ref<number>(-1);
const currentImage = ref<ISbAsset>();

const closeModal = (event: KeyboardEvent | MouseEvent) => {
    if (
        ["Escape"].includes((event as KeyboardEvent).code) ||
        (!(event as KeyboardEvent).code &&
            //@ts-ignore
            (event as MouseEvent).target?.id !== "modal-image")
    ) {
        isActive.value = false;
        setTimeout(() => {
            setIsModalActive(false);
        }, 100);
    }
};

const handleKeyPress = (event: KeyboardEvent) => {
    switch (event.code) {
        case "ArrowRight":
            nextImage();
            break;
        case "ArrowLeft":
            prevImage();
            break;
        case "Escape":
            closeModal(event);
            break;
    }
};

const prevImage = () => {
    setImage(activeImageIndex.value - 1);
};

const nextImage = () => {
    setImage(activeImageIndex.value + 1);
};

const setImage = (index: number) => {
    const length = projectImages.value.length;

    // checks if index is out of bounds
    activeImageIndex.value =
        index >= length ? 0 : index < 0 ? length - 1 : index;

    currentImage.value = projectImages.value[activeImageIndex.value];
};

watch(
    () => isModalActive.value,
    (value) => {
        if (value) {
            setImage(projectImages.value.indexOf(image.value));

            setTimeout(() => {
                isActive.value = value;
            }, 1);
        }
    }
);

onMounted(() => {
    window.addEventListener("keyup", handleKeyPress);
});

onUnmounted(() => {
    window.removeEventListener("keyup", handleKeyPress);
});
</script>
