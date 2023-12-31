<style lang="scss" src="./bird.scss"></style>

<template>
    <div>
        <Animation 
            class="b-bird"
            title="bird"
            :shouldBePlaying="isAnimating"
            :autoplay="isAnimating"
            :loop="true"
            :speed="1.5"
            :onSegmentComplete="onSegmentComplete"
        />
        <sound
            title="bird"
            type="wav"
            :volume="0.1"
            :shouldBePlaying="isAnimating && isSoundActive"
        />
    </div>
</template>

<script>
export default {
    name: 'Bird',
    props: {
        isHovered: {
            type: Boolean,
            default: false,
        },
        isClicked: {
            type: Boolean,
            default: false,
        },
    },
    data () {
        return {
            isAnimating: false,
            hoverTimer: null,
            hoverTime: 1000,
        };
    },
    computed: {
        isSoundActive() {
            return this.$store.state.sounds.isActive;
        },
    },
    watch: {
         isHovered(value) {
            if (value && !this.isAnimating) {
                this.hoverTimer = setTimeout(() => this.isAnimating = true, this.hoverTime);
            } else {
                this.clearTimer();
            }
        },
    },
    methods: {
        clearTimer() {
            if (this.hoverTimer) {
                clearTimeout(this.hoverTimer);
                this.hoverTimer = null;
            }
        },
        onSegmentComplete() {
            this.isAnimating = false;
        },
    },
}
</script>