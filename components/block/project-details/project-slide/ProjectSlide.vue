<style lang="scss" src="./project-slide.scss"></style>

<template>
    <swiper-slide 
        :class="['b-project-slide', {
            'has-padding': !isVideo,
            'is-modal-active': isModalActive,
        }]"
    >
        <player 
            v-if="isVideo"
            :video="slide.video"
            :index="index"
        />
        <div 
            v-else-if="isImage"
            class="project-slide-image"
        >
            <image-frame
                class="project-slide-frame"
                :image="slide.image"
                :on-click="showModal"
                :is-thick="true"
                :is-inverted="true"
            />
        </div>
        <slide-content 
            v-else
            :content="slide.content"
            :on-frame-click="showModal"
        />

    </swiper-slide>

</template>

<script>
import { SwiperSlide } from 'vue-awesome-swiper';
import { mapMutations } from 'vuex';

import 'swiper/css/swiper.css';

export default {
    name: 'ProjectDetails',
    components: { SwiperSlide },
    props: {
        index: {
            type: Number,
            default: 0,
        },
        slide: {
            type: Object,
            default: function () {
                return {
                    title: '',
                };
            },
        },        
    },
    computed: {
        isVideo() {
            if (this.slide.type === 'video') {
                this.addVideoSlideIndex(this.index);
                return true;
            }

            return false;
        },
        isImage() {
            return this.slide.type === 'image';
        },
        isModalActive() {
            return this.$store.state.modal.isActive;
        },
        contentRows() {
            let rows = [];

            if (this.slide.type === 'content') {
                rows = this.slide.content.slice(0, 2);
            }

            return rows;
        },
    },
    methods: {
        showModal(image) {
            this.setModalImage(image);
            this.setIsModalActive(true);
        },
        ...mapMutations({
            addVideoSlideIndex: 'swiper/addVideoSlideIndex',
            setIsModalActive: 'modal/setIsActive',
            setModalImage: 'modal/setImage',
        }),
    },
}
</script>