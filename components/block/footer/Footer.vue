<style lang="scss" src="./footer.scss"></style>

<template>
    <div class="b-footer position-relative">
        <!-- Email -->
        <Email v-show="hasEmail" class="mt-p" />

        <!-- Bottom -->
        <div class="footer-copyright mt-8">
            <JKLine class="footer-line -top-12 md:-top-4" :is-thick="true" />

            <div
                class="footer-content w-full grid md:grid-cols-3 grid px-20 mx-auto items-end"
            >
                <JKText
                    :isSmall="true"
                    :isLight="true"
                    :isInverted="true"
                    :isSecondaryFont="true"
                    :text="`Copyright &copy; ${
                        new Date().getFullYear() + Copyright
                    }`"
                />

                <JKText
                    :isXSmall="true"
                    :isLight="true"
                    :isInverted="true"
                    :isSecondaryFont="true"
                    text="Built with &#10084; by Jamal Khalili"
                    class="md:text-left md:order-first"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    hasEmail: {
        type: Boolean,
        default: true,
    },
});

const Copyright = " Jamal Khalili";
</script>
