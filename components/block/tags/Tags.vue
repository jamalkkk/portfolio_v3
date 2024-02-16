<style lang="scss" src="./tags.scss"></style>

<template>
    <div
        :class="[
            'b-tags w-full pt-2 container',
            {
                'is-interactive': isInteractive,
            },
        ]"
    >
        <!-- Tags -->
        <div
            v-if="areItemsSet"
            :class="[
                'tags-list flex gap-2 ',
                isInteractive ? 'is-pb-3' : 'flex-wrap',
            ]"
        >
            <Tag
                v-if="isInteractive"
                name="all"
                :isSelected="isAll"
                :onClick="() => (isAll = true)"
            />
            <Tag
                v-for="(tag, i) in tags"
                :key="i"
                :name="tag"
                :isSelected="selectedTags.includes(tag)"
                :onClick="() => toggleSelect(i)"
            />
        </div>

        <!-- Line -->
        <JKLine v-if="isInteractive" class="tags-line" :isSingle="true" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    isInteractive: {
        type: Boolean,
        default: true,
    },
    projectTags: {
        type: Array,
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

const isAll = ref(true);
const areItemsSet = ref(true);
const myTags = ref<String[]>([]);
const selectedTags = ref<String[]>([]);

const resetSelectedTags = () => {
    selectedTags.value = [];
};

const toggleSelect = (i: number) => {
    const tag = tags.value[i];

    if (selectedTags.value.includes(tag)) {
        selectedTags.value.splice(selectedTags.value.indexOf(tag), 1);
    } else {
        selectedTags.value.push(tag);
    }

    // Make change watchable
    selectedTags.value = [...selectedTags.value];
};

// const showProjectTags = () => {
//     items.value = [];

//     if ((tags.value as any[]).length) {
//         props.projectTags.forEach((projectTag, i) => {
//             items.value.push(
//                 tags.value.filter(
//                     ({ id }: { id: string }) =>
//                         id === (projectTag as { id: string }).id
//                 )[0] as (typeof tags.value)[0]
//             );

//             if (props.projectTags.length === i + 1) {
//                 areItemsSet.value = true;
//             }
//         });
//     }
// };

const setUpTags = () => {
    if (!areItemsSet.value) {
        if (props.isInteractive) {
            if (tags.value.length) {
                // myTags.value = tags.value;
                areItemsSet.value = true;
            }

            if (activeTags.value.length) {
                selectedTags.value = activeTags.value;
            }
        } else {
            // showProjectTags();
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

// watch(() => props.projectTags, showProjectTags);

watch(tags, setUpTags);

onMounted(() => {
    setUpTags();
});
</script>