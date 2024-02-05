<style lang="scss" src="./footer.scss"></style>

<template>
    <div class="b-footer position-relative">
        <Email v-show="hasEmail" class="mt-p" />
        <div class="footer-copyright mt-8">
            <JKLine class="footer-line" :is-thick="true" />
            <JKText
                :isSmall="true"
                :isLight="true"
                :isInverted="true"
                :text="`Copyright &copy; ${
                    new Date().getFullYear() + Copyright
                }`"
            />
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
