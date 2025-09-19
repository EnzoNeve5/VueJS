<template>
  <div>
    <TheHeader v-if="showHeader"/>
    <h1>Lifecycle Hooks</h1><br>
    <input
      v-model="name"
      type="text"
    >
    <h2>{{ name }}</h2><br>
    <button @click="showHeader = !showHeader">
      Toggle Header
    </button>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
export default {
  name: 'App',
  components: { TheHeader },
  data() {
    return {
      name: 'Enzo Neves',
      showHeader: true,
    }
  },

  beforeUpdate() {
    console.log('App beforeUpdate', this.name);
  },
  updated() {
    console.log('App updated', this.name);
  },
  beforeCreate() {
    console.log('App beforeCreate');
    console.log('Estado: ', this.name);
    console.log('DOM: ', this.$el);
  },
  created() {
    console.log('App created');
    console.log('Estado: ', this.name);
    console.log('DOM: ', this.$el);
  },
  beforeMount() {
    console.log('App beforeMount');
    console.log('Estado: ', this.name);
    console.log('DOM: ', this.$el);
  },
  mounted() {
    console.log('App mounted');
    console.log('Estado: ', this.name);
    console.log('DOM: ', this.$el);
  },

  watch: {

  },

  computed: {

  },

  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
