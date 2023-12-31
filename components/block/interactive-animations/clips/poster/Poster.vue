<template>
    <sound 
        title="poster"
        :should-be-playing="shouldBePlaying"
        :volume=".1"
    />
</template>

<script>
export default {
    name: 'Poster',
    props: {
         isClicked: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            shouldBePlaying: false,
        };
    },
    computed: {
        isSoundActive() {
            return this.$store.state.sounds.isActive;
        },
        isPosterPlaying() {
            return this.$store.state.sounds.poster;
        },
    },
    watch: {
        isClicked(value) {
            if (value && this.isSoundActive && !this.isPosterPlaying) {
                this.shouldBePlaying = true;
            }
        },
        isPosterPlaying(value) {
            if (!value) {
                this.shouldBePlaying = false;
            }
        },
    },
    methods: {

    },
}
</script>