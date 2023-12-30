<style lang="scss" src="./email.scss"></style>

<template>
    <div class="b-email" data-cursor-hover>
        <JKText
            :class="[
                'email-note',
                {
                    'is-active': isNoteActive || isCopied,
                },
            ]"
            :is-small="true"
            :text="note"
        />
        <cta
            :isButton="true"
            :isText="true"
            :isMedium="true"
            :text="text"
            :onClick="copy"
            :onMouseover="showNote"
            :onMouseleave="hideNote"
        />
    </div>
</template>

<script setup lang="ts">
import { useApp } from "~/store/useApp";
const { isDataLoaded } = storeToRefs(useApp());

const text = ref("hi@jamalkhalili.com");
const note = ref("Copy me");
const isNoteActive = ref(false);
const isCopied = ref(false);

// Simulating the store data for demonstration
const info = ref("info@example.com");

watch(isCopied, (value) => {
    if (value) {
        note.value = "Email copied!";
    } else {
        setTimeout(() => {
            note.value = "Copy me";
        }, 500);
    }
});

watch(info, (value) => {
    text.value = value;
});

const copy = () => {
    if (!isCopied.value) {
        isCopied.value = true;
        navigator.clipboard.writeText(text.value);

        setTimeout(() => {
            isCopied.value = false;
        }, 2500);
    }
};

const showNote = () => {
    isNoteActive.value = true;
};

const hideNote = () => {
    isNoteActive.value = false;
};
</script>