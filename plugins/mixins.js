import Vue from 'vue';
import Breakpoints from '~/assets/scss/variables/_breakpoints.scss';

const mixin = {
    methods: {
        getRandomInt(max, min = 0) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        },
        getDocumentWidth() {
            return document.documentElement.clientWidth;
        },
        getBreakpoint(size) {
            return parseInt(Breakpoints[size]);
        },
    },
};

Vue.mixin(mixin);
