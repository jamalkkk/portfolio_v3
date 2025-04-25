<style lang="scss" src="./tags.scss"></style>

<template>
    <div
        :class="[
            'b-tags w-full pt-2 container',
            isInteractive ? 'is-interactive' : 'mx-auto',
        ]"
    >
        <!-- Tags -->
        <div
            v-if="areItemsSet"
            :class="[
                'tags-list flex gap-x-2 md:gap-x-5 ',
                isInteractive ? 'is-pb-3' : 'flex-wrap justify-center',
            ]"
        >
            <template v-if="isInteractive">
                <Tag :isSelected="isAll" :onClick="() => (isAll = true)" />
                <Tag
                    v-for="(tag, i) in tags"
                    :key="i"
                    :item="tag"
                    :isSelected="selectedTags.includes(tag?.value)"
                    :onClick="() => toggleSelect(i)"
                />
            </template>
            <template v-else>
                <Tag v-for="(tag, i) in projectTags" :key="i" :text="tag" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    isInteractive: {
        type: Boolean,
        default: true,
    },
    projectTags: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
});

import { useApp } from "~/store/useApp";
import { useTags } from "~/store/useTags";

const appStore = useApp();
const tagsStore = useTags();

const { tags } = storeToRefs(appStore);

const { setTags } = tagsStore;
const { activeTags } = storeToRefs(tagsStore);

const isAll = ref(false);
const areItemsSet = ref(true);
const selectedTags = ref<String[]>([]);

const resetSelectedTags = () => {
    selectedTags.value = [];
};

const toggleSelect = (i: number) => {
    const tag = tags.value[i];

    if (selectedTags.value.includes(tag.value)) {
        selectedTags.value.splice(selectedTags.value.indexOf(tag.value), 1);
    } else {
        selectedTags.value.push(tag.value);
    }

    // Make change watchable
    selectedTags.value = [...selectedTags.value];
};

const setUpTags = () => {
    if (!areItemsSet.value) {
        if (props.isInteractive) {
            if (tags.value.length) {
                areItemsSet.value = true;
            }

            if (activeTags.value.length) {
                selectedTags.value = activeTags.value;
            }
        }
    }
};

watch(
    () => isAll.value,
    (value) => {
        if (value) {
            resetSelectedTags();
        }
    }
);

watch(
    () => selectedTags.value,
    (value) => {
        isAll.value = !value.length;
        setTags(value);
    }
);

watch(tags, setUpTags);

onMounted(() => {
    setUpTags();

    // Wait for projects to be loaded
    setTimeout(() => toggleSelect(0), 1000);
});
</script>