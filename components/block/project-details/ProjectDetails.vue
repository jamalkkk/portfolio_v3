<style lang="scss" src="./project-details.scss"></style>

<template>
    <div 
        :class="['b-project-details', {
            'is-player-slide': isPlayerSlide,
            'is-modal-active': isModalActive,
            'are-controls-hidden': isUIHidden,
        }]"
    >
         <Frame 
            :is-thick="true"
            :is-page="true"
        >
            <headline 
                class="project-details-title"
                :text="project.title"
                :is-main="true"
            />
            <icon
                class="project-details-close"
                name="close"
                :is-button="true"
                :on-click="closeProject"
                
            />
            <icon
                class="project-details-prev swiper-button-prev"
                :is-button="true"
                name="return"
                rotate="left"
            />
            <icon
                class="project-details-next swiper-button-next"
                :is-button="true"
                name="return"
            />
            <div class="project-details-tags">
                <tags 
                    :is-interactive="false"
                    :project-tags="project.tags"
                />
            </div>
            <swiper 
                ref="mySwiper" 
                class="project-details-swiper"
                :options="swiperOptions"
            >
                <lazy-project-slide
                    v-for="(slide, i) in project.slides"
                    :key="i"
                    :index="i"
                    :slide="slide"
                />
                <div 
                    v-show="hasSwiper"
                    class="project-details-pagination swiper-pagination"
                    slot="pagination"
                />
            </swiper>
        </Frame>
        <modal/>
    </div>
</template>

<script>
import { Swiper, directive } from 'vue-awesome-swiper';
import { mapMutations } from 'vuex';

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css';

export default {
    name: 'ProjectDetails',
    components: { Swiper},
    props: {
        id: {
            type: String,
            default: 'true',
        },
    },
    data() {
        return {
            isPlayerSlide: false,
            hasSwiper: true,
            swiperOptions: {
                slidesPerView: "auto",
                allowTouchMove: false,
                grabCursor: false,
                parallax: true,
                pagination: {
                    el: '.swiper-pagination',
                    bulletActiveClass: 'is-active',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="${className} project-details-bullet">${require(`~/assets/img/svg/bullet${className.includes('active') ? '-active' : ''}.svg?raw`)}</span>`;
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                keyboard: {
                    enabled: true,
                },
            },
        };
    },
    directives: {
        swiper: directive,
    },
    computed: {
        isUIHidden() {
            return this.$store.state.player.isUIHidden;
        },
        isModalActive() {
            return this.$store.state.modal.isActive;
        },
        isSmallScreen() {
            return this.$store.state.isSmallScreen;
        },
        shouldProjectLoaderBeActive() {
            return this.$store.state.loader.shouldProjectLoaderBeActive;
        }, 
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
        project() {
            const project = this.$store.state.project;
            this.hasSwiper = project.slides?.length > 1;

            return project;
        },
        activeIndex() {
            return this.$store.state.swiper.activeIndex;
        },
        videoSlideIndices() {
            return this.$store.state.swiper.videoSlideIndices;
        },
    },
    watch: {
       isModalActive() {
            if (this.isModalActive) {
                this.swiper.keyboard.disable();
            } else {
                this.swiper.keyboard.enable();
            }
        },
        isSmallScreen() {
            this.setAllowTouchMove();
        },
        activeIndex(value) {
            this.isPlayerSlide = this.videoSlideIndices.includes(value);
        },
        project(value) {
            this.hasSwiper = value.slides?.length > 1;
        },
    },
    methods: {
        initialiseEvents(that) {
            this.swiper.on('slideChange', () => that.setStoreActiveIndex(that));
            this.swiper.on('keyPress', (keyCode) => that.handleKeyPress(keyCode));
        },
        setStoreActiveIndex(that) {
            that.setActiveIndex(that.swiper.activeIndex);
        },
        setStoreIsSpaceBarPressed(that, keyCode) {
            if (keyCode === 32) {
                that.setIsSpaceBarPressed(true);
            }
        },
        setAllowTouchMove() {
            this.swiper.allowTouchMove = this.isSmallScreen;
        },
        handleKeyPress(keyCode) {
            if (keyCode === 32) {
                that.setIsSpaceBarPressed(true);
            } else if (keyCode === 27) {
                this.closeProject();
            }
        },
        ...mapMutations({
            setShouldProjectLoaderBeActive: 'loader/setShouldProjectLoaderBeActive',
            setShouldScrollToProjects: 'setShouldScrollToProjects',
            setActiveIndex: 'swiper/setActiveIndex',
            setIsSpaceBarPressed: 'swiper/setIsSpaceBarPressed',
            toggleShoudlBePlaying: 'player/toggleShoudlBePlaying',
        }),
    },
    destroyed() {
         this.swiper.off('slideChange', this.setStoreActiveIndex(this));
         this.swiper.off('keyPress', (keyCode) => this.handleKeyPress(keyCode));
    },
    mounted() {
        this.initialiseEvents(this);
        this.setAllowTouchMove();
    },
}
</script>