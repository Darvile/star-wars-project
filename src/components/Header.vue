<template>
    <div>
        <header class="header">
            <Burger @menuStatus="handleNav"></Burger>
            <a class="logo" href="/">Star Wars Project</a>

            <nav ref="nav" class="nav">
                <ul class="nav_list" ref="navList">
                    <li :key="navItem.name" v-for="(navItem, idx) in navItems" :ref="`navItem-${idx}`" class="nav_item">
                        <a href="/">{{navItem.name}}</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
    import {TimelineLite, Power1} from 'gsap';
    import Burger from './Burger.vue';

    const timeline = new TimelineLite();

    export default {
        name: 'Header',
        components: {
            Burger
        },
        data() {
            return {
                nav: null,
                navList: null,
                navItems: [
                    {
                        name: 'Characters',
                        link: '/characters'
                    },
                    {
                        name: 'Films',
                        link: '/films'
                    },
                    {
                        name: 'Planets',
                        link: '/planets'
                    }
                ]
            }
        },
        mounted() {
            this.nav = this.$refs.nav;
            this.navList = this.$refs.navList;

            timeline.set(this.nav, {
                yPercent: -100,
            });
        },


        methods: {
            handleNav(e) {
                if (e) {
                    timeline.to(this.nav, .5, {
                        yPercent: 0,
                    });

                    timeline.staggerTo(".nav_item", .5, {opacity: 1, ease: Power1.inOut}, .1);
                } else {
                    timeline.staggerTo(".nav_item", .5, {opacity: 0, ease: Power1.inOut}, .1);

                    timeline.to(this.nav, .5, {
                        yPercent: -100,
                        delay: 0
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $color: black;

    .header {
        height: var(--headerHeight);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;

        a {
            color: var(--appWhite);
        }
    }

    .nav {
        align-items: center;
        background-color: var(--appBlue);
        display: flex;
        height: 100vh;
        left: 0;
        right: 0;
        font-size: 40px;
        padding: 30px;
        position: fixed;
        z-index: 1;

        &_item {
            opacity: 0;

            &:not(last-child) {
                margin-bottom: 40px;
            }
        }
    }

    .logo {
        font-size: 20px;
        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        z-index: 2;
    }
</style>
