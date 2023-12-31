<template>
    <div>
        <Animation 
            class="b-bike"
            title="bike"
            :shouldBePlaying="isActive"
            :speed="currentSpeed"
            :loop="true"
        />
        <sound 
            title="bikeChain"
            :shouldBePlaying="isActive && isSoundActive"
            :loop="true"
            :volume=".1"
        />
        <sound 
            title="bikeBell"
            type="wav"
            :shouldBePlaying="shouldBellBePlaying"
        />
    </div>
</template>

<script>
export default {
    name: 'Bike',
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
            isActive: false,
            isSpeedingUp: false,
            isSpeedingDown: false,
            shouldBePlaying: false,
            shouldBellBePlaying: false,
            soundPlaying: '',
            currentSpeed: 0,
            maxSpeed: 3,
            speedIncrement: .05,
            speedIncrementTime: 70,
            interval: null,
            hoverTime: 1000,
            hoverTimer: null,
        };
    },
    computed: {
        isSoundActive() {
            return this.$store.state.sounds.isActive;
        },
        isBellPlaying() {
            return this.$store.state.sounds.bikeBell;
        },
    },
    watch: {
        isHovered(value) {
            if (value && !this.shouldBePlaying) {
                this.hoverTimer = setTimeout(() => {
                    this.shouldBePlaying = true;
                }, this.hoverTime);
            } else {
                this.clearHoverTimer();
            }
        },
        isClicked(value) {
            if (value && this.isSoundActive && !this.isBellPlaying) {
                this.shouldBellBePlaying = true;
            }
        },
        isBellPlaying(value) {
            if (!value) {
                this.shouldBellBePlaying = false;
            }
        },
        shouldBePlaying(value) {
            if (value) {
                this.increaseSpeed();
            }  else {
                this.decreaseSpeed();
            }
        },
    },
    methods: {
        setSpeed(value) {
            this.currentSpeed += value;
        },
        resetSpeedInterval(isIncrease, isChanging = true) {
            clearInterval(this.interval);
            this.interval = null;
            this.isSpeedingUp = isIncrease && isChanging;
            this.isSpeedingDown = !isIncrease && isChanging;
        },
        increaseSpeed() {
            if (!this.isSpeedingUp) {
                this.isActive = true;
                this.isSpeedingUp = true;
                this.resetSpeedInterval(true);
            }

            this.interval = setInterval(() => {
                if (this.currentSpeed <= this.maxSpeed) {
                    this.setSpeed(this.speedIncrement);
                } else {
                    this.resetSpeedInterval(false, false)
                }
            }, this.speedIncrementTime);
        },
        decreaseSpeed() {
            if (!this.isSpeedingDown) {
                this.isSpeedingDown = true;
                this.resetSpeedInterval(false);
            }

            this.interval = setInterval(() => {
                if (this.currentSpeed >= 0) {
                    this.setSpeed(-this.speedIncrement);
                } else {
                    this.resetSpeedInterval(false, false);

                    this.isActive = false;
                }
            }, this.speedIncrementTime);
        },
        clearHoverTimer() {
            if (this.hoverTimer) {
                clearTimeout(this.hoverTimer);
                this.hoverTimer = null;
                this.shouldBePlaying = false;
            }
        },
    },
    mounted() {},
}
</script>