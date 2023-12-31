<style lang="scss" src="./cat.scss"></style>

<template>
    <div>
        <Animation 
            class="b-cat"
            title="cat"
            :shouldBePlaying="true"
            :isSegmentForce="true"
            :autoplay="false"
            :loop="true"
            :speed="3"
            :segments="segments[activeSegment]"
            :onSegmentComplete="onSegmentComplete"
        />
        <sound 
            title="cat"
            type="wav"
            :shouldBePlaying="shouldPlaySound"
        />
    </div>
</template>

<script>
const SEGMENTS = { 
    blink: [1, 216],
    sleep: [217, 384],
};

export default {
    name: 'Cat',
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
            shouldPlayBlink: false,
            shouldPlaySound: false,
            activeSegment: 'sleep',
            segments: SEGMENTS,
        };
    },
    computed: {
        isSoundActive() {
            return this.$store.state.sounds.isActive;
        },
        isCatPlaying() {
            return this.$store.state.sounds.cat;
        },
    },
    watch: {
        isHovered(value) {
            this.shouldPlayBlink = value;

            if (value) {
                this.activeSegment = 'blink';
            } 
        },
        isClicked(value) {
            if (value && this.isSoundActive && !this.isCatPlaying) {
                this.shouldPlaySound = true;
            }
        },
        isCatPlaying(value) {
            if (!value) {
                this.shouldPlaySound = false;
            } 
        },
    },
    methods: {
        onSegmentComplete() {
            if (!this.shouldPlayBlink) {
                this.activeSegment = 'sleep';
            } 
        }
    },
}
</script>