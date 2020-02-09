<template>
    <div id="app">
        <Header/>
        <Section>
            <Loader v-if="isLoading"></Loader>
            <div v-else>
                <carousel
                        @page-change="handleActiveSlide"
                        :paginationActiveColor="'grey'"
                        :paginationColor="'white'"
                        :per-page="1"
                        :mouse-drag="false">
                    <slide :style="{background: `radial-gradient(circle, ${randomizeColor()} 0%, black 100%)`}"
                           v-for="(film) in films" :key="film.title">
                        <div class="slide-inner">
                            <h2>{{film.title}}</h2>
                        </div>
                    </slide>
                </carousel>

                <Intro :title="getActiveSlide.title" :desc="getActiveSlide.opening_crawl"/>
            </div>
        </Section>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Loader from './components/Loader.vue';
    import Intro from './components/Intro.vue';
    import {Carousel, Slide} from 'vue-carousel';

    import ApiService from './api/api-service';

    const apiService = new ApiService();

    export default {
        name: 'app',
        components: {
            Header,
            Carousel,
            Slide,
            Loader,
            Intro
        },
        data() {
            return {
                isLoading: true,
                activeSlide: 0,
                films: [{
                    title: null,
                    opening_crawl: null
                }]
            }
        },
        mounted() {
            apiService.films.getFilms()
                .then((resp) => {
                    this.isLoading = false;
                    this.films = resp.data.results;
                })
                .catch(err => console.log(err));
        },
        computed: {
            getActiveSlide() {
                return this.films[this.activeSlide];
            }
        },
        methods: {
            handleActiveSlide(idx) {
                this.activeSlide = idx;
            },
            randomizeColor() {
                return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            }
        }
    }
</script>

<style lang="scss">
    @import './styles/app';
    @import './styles/mixins';

    :root {
        --appBlack: #0e0e0e;
        --appWhite: #ffff;
        --appBlue: #0053ff;
        --greyLight: #919191;
        --headerHeight: 7vh;
        --appFontSm: 20px;
        --appFont: 'Roboto', sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: var(--appBlack);
        margin: 0;
        font-family: var(--appFont);
        font-weight: 400;
    }

    .VueCarousel-slide {
        height: calc(100vh - 30vh);
    }

    .VueCarousel {
        margin-bottom: metrics('supreme');
    }

    .slide-inner {
        align-items: center;
        display: flex;
        justify-content: center;
        height: 100%;
    }

    h1 {
        font-size: 60px;
        color: var(--appWhite);
    }

    h2 {
        font-size: 40px;
        text-shadow: 4px 4px 21px #96909087;
    }

    p {
        font-size: 14px;
        line-height: 28px;
    }
</style>
