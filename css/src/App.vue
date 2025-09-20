<template>
  <div>
    <div class="card">
        Teste
    </div>
    <BaseCard />
    <BaseCard />
  </div>
</template>

<script>
import BaseCard from './components/BaseCard.vue';
export default {
  name: 'App',
  components: { BaseCard },
  data() {
    return {
      
    }
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
