<style lang="scss" src="./slide-content.scss"></style>

<template>
    <div :class="['b-slide-content container', {
        'has-multiple-rows': rows.length > 1,
    }]">
        <div 
            class="slide-content-row row"
        >
            <div 
                v-for="(item, j) in items"
                :key="j"
                :class="`slide-content-item col-12 col-md-${item.size} is-${item.type}`"
            >
                <image-frame
                    v-if="item.type === 'image'"
                    class="project-slide-frame"
                    :size="item.imageSize"
                    :image="item.image.data"
                    :is-thick="true"
                    :is-inverted="true"
                    :on-click="onFrameClick"
                >
                </image-frame>
                <p 
                    v-else-if="item.type === 'text'"
                    class="project-slide-text"
                >
                    {{ item.text }}
                </p>
                <cta
                    v-else
                    class="project-slide-cta"
                    :text="item.text"
                    :to="item.link"
                />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ContentItem',
    props: {
        size: {
            type: Number,
            default: 1,
        },
        content: {
            type: Array,
            default: function () {
                return [];
            },
        },
        onFrameClick: { 
            type: Function,
            default () {
                return null;
            }
        },
    },
    data() {
      return {
          rows: [],
          items: [],
      };
    },
    computed: {
        isProjectLoaded() {
            return this.$store.state.isProjectLoaded;
        },
        colSize(index) {
            if (index) {
                return '';
            }

            return `-${(this.rows.size % 2 ? 4 : 3) * this.rows.size}`;
        },
    },
    methods: {
        filterItems() {
            const items = [];

            this.content.forEach((item, i) => {
                const size = (item.size % 2 ? 4 : 3) * item.size;

                items[i] = {
                    ...item,
                    size,
                }
            });

            this.items = items;
        }
    },
    mounted() {
        this.filterItems();
    }
}
</script>