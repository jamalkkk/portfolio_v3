import Vue from "vue";
import { mapMutations } from "vuex";

const common = {
    computed: {
        isSoundSupposedActive() {
            return this.$store.state.sounds.isSupposedActive;
        },
    },
    methods: {
        scrollToHome() {
            const container = document.querySelector(".layerpage-container");
            container.scrollTo({ top: 0, behavior: "smooth" });
        },
        scrollToProjects() {
            const container = document.querySelector(".layerpage-container");
            container.scrollTo({
                top: document.documentElement.clientHeight,
                behavior: "smooth",
            });
        },
        closeProject(scrollToProjects = true) {
            this.setShouldProjectLoaderBeActive(true);

            if (scrollToProjects) {
                this.setShouldScrollToProjects(true);
            }

            setTimeout(() => {
                this.$router.push("/");
                this.setProject({});

                if (this.isSoundSupposedActive) {
                    setTimeout(() => this.setIsSoundActive(true), 500);
                    this.setIsSoundSupposedActive(false);
                }
                this.resetVideoSlideIndices();
            }, 300);
        },
        ...mapMutations({
            setProject: "setProject",
            setShouldScrollToProjects: "setShouldScrollToProjects",
            setShouldProjectLoaderBeActive:
                "loader/setShouldProjectLoaderBeActive",
            setIsSoundActive: "sounds/setIsActive",
            setIsSoundSupposedActive: "sounds/setIsSupposedActive",
            resetVideoSlideIndices: "swiper/resetVideoSlideIndices",
        }),
    },
};

Vue.mixin(common);
