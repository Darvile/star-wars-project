<template>
    <button @click.prevent="handleBurger" :class="[active ? 'active' : '', 'bger']">
        <span class="bger_title">Toggle menu</span>
        <div class="bger_line bger_line--top"></div>
        <div class="bger_line bger_line--bottom"></div>
    </button>
</template>

<script>
    export default {
        name: 'Burger',
        data() {
            return {
                active: false
            }
        },
        methods: {
            handleBurger() {
                this.active = !this.active;
                this.$emit('menuStatus', this.active);
                this.$emit('myEvent')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bger {
        outline: 0;
        border: 0;
        padding: 0;
        font: inherit;
        color: inherit;
        background-color: transparent;
        border-radius: 0;
        cursor: pointer;
        height: 28px;
        top: 6px;
        right: 4vw;
        position: fixed;
        width: 2.5vw;
        z-index: 10;
        transition: top 1.25s cubic-bezier(.19, 1, .22, 1);

        @media screen and (min-width: 900px) {
            top: 5px;
        }

        &_title {
            position: absolute;
            opacity: 0;
            pointer-events: none;
        }

        &_line {
            background-color: var(--appWhite);
            position: absolute;
            height: 2px;
            width: 3.5vw;
            transition: transform .75s cubic-bezier(.19, 1, .22, 1), background .3s ease, -webkit-transform .75s cubic-bezier(.19, 1, .22, 1);
        }

        &_line--top {
            transform: translate3d(0, -6px, 0);
            .active & {
                transform: translateZ(0) rotate(45deg) scaleX(.9);
            }
        }

        &_line--bottom {
            transform: translate3d(0, 7px, 0);
            .active & {
                transform: translateZ(0) rotate(-45deg) scaleX(.9);
            }
        }

    }
</style>
