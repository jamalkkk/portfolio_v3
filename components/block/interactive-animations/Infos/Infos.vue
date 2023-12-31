<style lang="scss" src="./infos.scss"></style>

<template>
    <div v-if="isActive && !isSmallScreen && isDataLoaded" class="b-infos">
        <info
            class="infos-poster"
            arrow="top"
            :clickText="infoList.poster.click"
        />
        <info
            class="infos-light"
            arrow="top"
            :clickText="infoList.light.click"
        />
        <info
            class="infos-cat"
            arrow="bottom"
            :clickText="infoList.cat.click"
            :hoverText="infoList.cat.hover"
        />
        <info
            class="infos-ball"
            arrow="top"
            :clickText="infoList.ball.click"
            :hoverText="infoList.ball.hover"
        />
        <info
            class="infos-bird"
            arrow="right"
            :hoverText="infoList.bird.hover"
        />
        <info
            class="infos-clock"
            :arrow="documentBreakpoint === 'md' ? 'bottom' : 'left'"
            :text="infoList.clock.none"
        />
        <info
            class="infos-desktop"
            arrow="top"
            :clickText="infoList.desktop.click"
            :hoverText="infoList.desktop.hover"
        />
        <info
            class="infos-laptop"
            arrow="top"
            :clickText="infoList.laptop.click"
            :hoverText="infoList.laptop.hover"
        />
        <info
            class="infos-headphones"
            arrow="right"
            :clickText="infoList.headphones.click"
            :hoverText="infoList.headphones.hover"
        />
        <info
            class="infos-books"
            arrow="top"
            :clickText="infoList.books.click"
            :hoverText="infoList.books.hover"
        />
        <info
            class="infos-bike"
            arrow="top"
            :clickText="infoList.bike.click"
            :hoverText="infoList.bike.hover"
        />
    </div>
</template>

<script>
const InfosPlacholder = [
    {
        light: {
            click: "Switch dark theme",
        },
    },
    {
        poster: {
            click: "Rick's catchphrase",
        },
    },
    {
        cat: {
            click: "Cat meows",
            hover: "Cat Blinks",
        },
    },
    {
        ball: {
            hover: "Roll ball",
            click: "Bounce ball",
        },
    },
    {
        bird: {
            hover: "Call bird",
            type: "hover",
        },
    },
    {
        clock: {
            none: "Shows real time",
        },
    },
    {
        desktop: {
            hover: "Get attention",
        },
    },
    {
        bike: {
            hover: "Spin wheels",
            click: "Ring bell",
        },
    },
];

export default {
    name: "Infos",
    components: {
        InfosPlacholder,
    },
    data() {
        return {
            isVisible: false,
            infoList: InfosPlacholder,
        };
    },
    computed: {
        isActive() {
            return this.$store.state.isInfosActive;
        },
        isSmallScreen() {
            return this.$store.state.isSmallScreen;
        },
        isDataLoaded() {
            return this.$store.state.isDataLoaded;
        },
        documentBreakpoint() {
            return this.$store.state.documentBreakpoint;
        },
        infos() {
            const { infos } = this.$store.state.info;
            return infos || InfosPlacholder;
        },
    },
    watch: {
        isActive(value) {
            this.isVisible = value;
        },
        isDataLoaded() {
            this.setInfoList();
        },
    },
    methods: {
        setInfoList() {
            this.infos.forEach(({ name, action }) => {
                this.infoList[name] = {};
                action?.forEach(({ type, text }) => {
                    this.infoList[name][type] = text;
                });
            });
        },
    },
};
</script>