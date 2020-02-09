<template>
    <section class="intro">
        <div class="intro_content">
            <h1 class="intro_title">{{title}}</h1>
            <p class="intro_desc">{{desc}}</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Intro',
        data() {
            return {}
        },
        props: {
            title: String,
            desc: String
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    @import '../styles/mixins';

    .intro {
        display: flex;
        justify-content: center;
        margin-bottom: metrics('supreme');

        &_content {
            max-width: 80%;
        }

        &_title {
            margin-bottom: metrics('supreme');
        }

        &_desc {
            color: var(--appWhite);
        }
    }
</style>
