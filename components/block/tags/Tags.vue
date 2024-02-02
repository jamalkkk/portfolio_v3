<style lang="scss" src="./tags.scss"></style>

<template>
    <div
        :class="[
            'b-tags w-100 p-0 container',
            {
                'is-interactive': isInteractive,
            },
        ]"
    >
        <div
            v-if="areItemsSet"
            :class="[
                'tags-list',
                {
                    'is-pb-3': isInteractive,
                },
            ]"
        >
            <!-- <Tag
                v-if="isInteractive"
                tagName="all"
                :isSelected="isAll"
                :onClick="toggleAll"
            />
            <Tag
                v-for="(item, i) in items"
                :key="i"
                :tagName="item.attributes.name"
                :isSelected="selectedTags.includes(item)"
                :onClick="() => toggleSelect(i)"
            /> -->
        </div>
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
const areItemsSet = ref(false);
const items = ref([]);
const selectedTags = ref([]);

const resetSelectedTags = () => {
    selectedTags.value = [];
};

const toggleAll = () => {
    isAll.value = !isAll.value;
};

const toggleSelect = (i: number) => {
    const tag = items.value[i];

    if (selectedTags.value.includes(tag)) {
        selectedTags.value.splice(selectedTags.value.indexOf(tag), 1);
    } else {
        selectedTags.value.push(tag);
    }

    selectedTags.value = [...selectedTags.value];
};

const showProjectTags = () => {
    items.value = [];

    if ((tags.value as any[]).length) {
        props.projectTags.forEach((projectTag, i) => {
            items.value.push(
                tags.value.filter(
                    ({ id }: { id: string }) =>
                        id === (projectTag as { id: string }).id
                )[0]
            );

            if (props.projectTags.length === i + 1) {
                areItemsSet.value = true;
            }
        });
    }
};

const setUpTags = () => {
    if (!areItemsSet.value) {
        if (props.isInteractive) {
            if ((tags.value as any[]).length) {
                items.value = tags.value as typeof items.value;
                areItemsSet.value = true;
            }

            if (activeTags.value.length) {
                selectedTags.value = activeTags.value;
            }
        } else {
            showProjectTags();
        }
    }
};

watchEffect(() => {
    if (isAll.value) {
        resetSelectedTags();
    }
});

watch(selectedTags, (value) => {
    isAll.value = !value.length;
    setTags(value);
});

watch(() => props.projectTags, showProjectTags);

watch(tags, setUpTags);

onMounted(() => {
    setUpTags();
});
</script>