<style lang="scss" src="./desktop.scss"></style>

<template>
    <div>
        <Animation 
            class="b-desktop"
            title="desktop"
            :shouldBePlaying="shouldBePlaying"
            :isSegmentForced="isSegmentForced"
            :loop="true"
            :speed="speed"
            :segments="segments[activeSegment]"
            :onSegmentComplete="onSegmentComplete"
        />
        <sound 
            title="desktopType"
            type="wav"
            :shouldBePlaying="activeSegment === 'type' && isDesktopSoundActive"
            :loop="true"
            :volume=".1"
        />
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

const SEGMENTS = { 
    type: [1, 360],
    coffee: [361, 599],
    look: [600, 960],
    standup: [961, 1008],
    standing: [1009, 1248],
    sitdown: [1249, 1296],
};

export default {
    name: 'Desktop',
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
            isSegmentForced: true,
            isBeingHovered: false,
            isDesktopSoundActive: false,
            shouldBePlaying: true,
            shouldPlaySegment: '',
            activeSegment: 'default',
            speed: 0,
            orgSpeed: 3,
            standingSpeed: 2,
            segmentTimer: null,
            segments: SEGMENTS,
        };
    },
    computed: {
        isHomeActive() {
            return this.$store.state.isHomeActive;
        },
        isSoundActive() {
            return this.$store.state.sounds.isActive;
        },
        isUserOnPage() {
            return this.$store.state.isUserOnPage;
        },
    },
    watch: {
        isHovered(value) {
            if (value && !this.shouldPlaySegment) {
                this.shouldPlaySegment = 'look';
            }
        },
        isClicked(value) {
            if (value) {
                this.toggleShouldHomeBeActive();
            }
        },
        isHomeActive(value) {
            if (value && this.shouldPlaySegment === 'standing') {
                this.shouldPlaySegment = 'sitdown';
            } else if (!value && this.shouldPlaySegment !== 'standing'){
                this.shouldPlaySegment = 'standup';
            } 
        },
        isSoundActive() {
            this.setIsDesktopSoundBePlaying();
        },
        isUserOnPage() {
            this.setIsDesktopSoundBePlaying();
        },
        activeSegment(value) {
            if (value === 'standing') {
                this.speed = this.standingSpeed;
            } else {
                this.speed = this.orgSpeed;
            }
        },
    },
    methods: {
        onSegmentComplete() {
            this.selectNextSegment();
        },
        selectNextSegment() {
            if (!this.shouldPlaySegment) {
                this.setRandomSegment();
            } else {

                switch(this.shouldPlaySegment) {
                    case 'standup':
                        this.activeSegment = !this.isHomeActive ? this.shouldPlaySegment : 'type';
                        this.shouldPlaySegment = this.isHomeActive ? 'sitdown' : 'standing';
                        break;

                    case 'standing':
                        this.activeSegment = this.shouldPlaySegment;
                        this.shouldPlaySegment = this.isHomeActive ? 'sitdown' : 'standing';
                        break;

                    default:
                        this.activeSegment = this.shouldPlaySegment;
                        this.shouldPlaySegment = '';
                        break;
                }
            }
        },
        setRandomSegment() {
            this.resetSegment(false);
            this.activeSegment = this.getRandomInt(3) === 3 ? 'coffee' : 'type';
            
            this.segmentTimer = setTimeout(() => this.resetSegment(true), 2000);
        },
        resetSegment(value) {
            this.shouldBePlaying = value;
        },
        setIsDesktopSoundBePlaying() {
            this.isDesktopSoundActive = this.isSoundActive && this.isUserOnPage;
        },
        ...mapMutations({
            toggleShouldHomeBeActive: 'toggleShouldHomeBeActive',
        }),
    },
    mounted() {
        this.selectNextSegment();
    }
}
</script>