<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2><img class="catec" src="../assets/logo.png">lá, Mundo!</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style>
h1 {
  font-family: sans-serif;
  color: blue;
  text-align: center;
}
h2 {
  font-family: sans-serif;
  color: brown;
  text-align: center;
  font-size: 200px;
}
div.hello {
  background-color: beige;
}
</style>
