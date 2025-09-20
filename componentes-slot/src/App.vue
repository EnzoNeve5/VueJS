<template>
  <div>
    <TheHeader>
      <template v-slot:description>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellat tempore accusamus odio saepe esse rerum possimus, facere corporis, id iusto dolore ad veritatis omnis ipsa explicabo! Totam, debitis mollitia.</p>
      </template>
      <p>This is the main content of the header.</p>
    </TheHeader>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: { TheHeader },
  data() {
    return {
    };
  },
  beforeUpdate() {},
  updated() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {},
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
