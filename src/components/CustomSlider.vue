<template>
    <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
        <slide>
            Slide 1 Content
        </slide>
        <slide>
            Slide 2 Content
        </slide>
    </carousel>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: 'Custom Slider',
        data() {
            return {
                active: false
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>

</style>
