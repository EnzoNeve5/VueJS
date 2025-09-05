<template>
  <div>
    <button @click.once="onClick()">
      Enviar
    </button>
    <br><br>
    <div 
      @mouseover="onMouseover()"
      @mouseout="onMouseout()"
    >
      Mouse over
    </div>
    <br><br>
    <form
      action="https://google.com"
      @submit.prevent="onSubmit"
    >
      <input
        type="text"
        @keyup.enter="onKeyUp"
      >
      <button type="submit">
        Enviar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },

  methods: {
    onClick($evt) {
      console.log('click', $evt);
    },
    onMouseover($evt) {
      console.log('mouse over', $evt);
    },
    onMouseout($evt) {
      console.log('mouse out', $evt);
    },
    onSubmit($evt) {
      console.log('submit', $evt);
    },
    onKeyUp($evt) {
      console.log('onKeyUp', $evt)
    }
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
