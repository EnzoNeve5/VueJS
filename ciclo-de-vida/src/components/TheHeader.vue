<template>
    <header class="the-header">
        Header
    </header>
</template>

<script>
    export default {
        mounted() {
            window.addEventListener('resize', this.resize);
        },
        beforeUnmount() {
            console.log('App beforeUnmount');
            window.removeEventListener('resize', this.resize);
        },
        unmounted() {
            console.log('App unmounted');
        },

        methods: {
            resize($ent) {
                console.log($ent);
            }
        }   
    }
</script>

<style>
    .the-header {
        background: #521a83;
        color: #a8ab99;
        font-size: 2.5em;
    }
</style>