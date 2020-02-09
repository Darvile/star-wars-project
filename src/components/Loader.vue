<template functional>
    <span class="loader">Loading ...</span>
</template>

<script>
    export default {
        name: 'Loader',
        props: {
            loading: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .loader {
        align-items: center;
        bottom: 0;
        color: var(--appWhite);
        display: flex;
        font-size: var(--appFontSm);
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        text-align: center;
    }
</style>
