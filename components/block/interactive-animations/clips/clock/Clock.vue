<style lang="scss" src="./clock.scss"></style>

<template>
    <div class="b-clock">
        <JKSvg 
            class="clock-frame"
            title="clock-frame"
        />
        <div class="clock-hands">
            <JKSvg
                class="clock-hour"
                title="clock-hour"
                :style="{
                    transform: hourTransform,
                }"
            />
            <JKSvg 
                class="clock-minute"
                title="clock-minute"
                :style="{
                    transform: minuteTransform,
                }"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Clock',
    data () {
        return {
            hourTransform: 0,
            minuteTransform: 0,
            interval: null,
        };
    },
    methods: {
        setTime() {
            const now = new Date();
            let orgMinutes = now.getMinutes();
            let orgHours = now.getHours();
            
            let minutes = orgMinutes * (360 / 60) - 90;
            const additionalDegrees = orgMinutes / 60 * 30;

            let hours = orgHours > 12 ? orgHours - 12 : orgHours;
            hours = hours * (360 / 12) + additionalDegrees - 95 ;
            
            this.hourTransform =`rotate(${hours}deg)`;
            this.minuteTransform =` rotate(${minutes}deg)`;
        },
        updateTime() {
            this.setTime();
            this.interval = setInterval(this.setTime, 60000);
        },
    },
    mounted() {
        this.updateTime();
    },
    unmounted() {
        clearInteval(this.interval);
    },
}
</script>