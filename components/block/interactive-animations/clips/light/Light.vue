<style lang="scss" src="./light.scss"></style>

<template>
    <div>
        <JKSvg
            :class="[
                'b-light',
                {
                    'is-swinging': isSwinging,
                },
            ]"
            :style="{ animationDuration: swingTime + 'ms' }"
            title="light"
        />
        <sound
            title="lightSwitch"
            type="wav"
            :shouldBePlaying="isSwinging && isSoundActive"
            :volume="0.2"
        />
        <sound
            title="lightSwing"
            type="wav"
            :shouldBePlaying="isSwinging && isSoundActive"
            :volume="0.3"
        />
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: "Light",
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
    data() {
        return {
            isSwinging: false,
            swingTime: 4000,
        };
    },
    computed: {
        isSoundActive() {
            return this.$store.state.sounds.isActive;
        },
    },
    watch: {
        isClicked(value) {
            if (value && !this.isSwinging) {
                this.moveLight();
                this.toggleIsDarktTheme();
            }
        },
    },
    methods: {
        moveLight() {
            this.isSwinging = true;
            setTimeout(() => (this.isSwinging = false), this.swingTime);
        },
        ...mapMutations({
            toggleIsDarktTheme: 'theme/toggleIsDarktTheme',
        }),
    },
};
</script>