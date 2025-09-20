<template>
    <header class="header">
        <h1 
            v-if="$slots.title"
            class="title">
            <slot name="title"></slot>
        </h1>
        <div class="description">
            <slot name="description"></slot>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </header>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$el);
            console.log(this.$slots.description);
        }
    }
</script>

<style>
.header {
    height: 80px;
    line-height: 80px;
    text-align: left;
    color: #0a6aff;
    background-color: #fffaaa;
    font-size: 40px;
    font-family: serif;
}
</style>