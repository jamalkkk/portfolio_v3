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
        @keydown.esc="escapeModal"
    >
        <div class="modal-container" @click="closeModal">
            <LazyJKImage :img="image" />
            <!-- <LazyJKImage :image="image"  /> -->
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
const { isModalActive, image } = storeToRefs(modalStore);

const isActive = ref(false);

const closeModal = (e: KeyboardEvent | MouseEvent) => {
    if (
        (e as KeyboardEvent).keyCode === 27 ||
        (!e.keyCode && e.target !== image.value)
    ) {
        isActive.value = false;
        setTimeout(() => {
            setIsModalActive(false);
        }, 100);
    }
};

watch(
    () => isModalActive.value,
    (value) => {
        if (value) {
            setTimeout(() => {
                isActive.value = value;
            }, 1);
        }
    }
);

onMounted(() => {
    window.addEventListener("keyup", closeModal);
});

onUnmounted(() => {
    window.removeEventListener("keyup", closeModal);
});
</script>
