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
            <LazyJKImage
                ref="$image"
                :img="image"
                id="modal-image"
                class="opacity-0 transition duration-500"
                :class="{ 'opacity-100': isActive }"
            />
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

const $image = ref<HTMLElement>();

const isActive = ref(false);

const closeModal = (event: KeyboardEvent | MouseEvent) => {
    if (
        ["Escape", "ArrowLeft", "ArrowRight"].includes(
            (event as KeyboardEvent).code
        ) ||
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

watch(
    () => isModalActive.value,
    (value) => {
        console.log(value);

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
