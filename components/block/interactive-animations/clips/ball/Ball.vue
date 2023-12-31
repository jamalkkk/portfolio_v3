<style lang="scss" src="./ball.scss"></style>

<template>
    <div>
        <Animation 
            class="b-ball"
            title="ball"
            :isSegmentForced="true"
            :loop="false"
            :segments="segments[activeSegment]"
            :onComplete="onComplete"
        />
        <sound 
            title="ball"
            :shouldBePlaying="activeSegment === 'bounce' && isSoundActive"
        />
    </div>
</template>

<script>
const SEGMENTS = { 
    roll: [1, 192],
    bounce: [193, 288],
};

export default {
    name: 'Ball',
    components: {
        SEGMENTS,
    },
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
            activeSegment: '',
            segments: SEGMENTS,
            hoverTimer: null,
        };
    },    
    computed: {
        isSoundActive() {
            return this.$store.state.sounds.isActive;
        },
    },
    watch: {
        segment(value) {
            this.isAnimating = !!value.length;
        },
        isHovered(value) {
            if (value && !this.isAnimating) {
                this.hoverTimer = setTimeout(() => {
                    if (!this.isAnimating) {
                        this.activeSegment = 'roll';
                    }
                }, 1000);
            } else {
                this.clearTimer();
            }
        },
        isClicked(value) {
            if (value && !this.isAnimating) {
                this.clearTimer();
                this.activeSegment = 'bounce';
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
        onComplete() {
            this.activeSegment = '';
        },
    },
}
</script>