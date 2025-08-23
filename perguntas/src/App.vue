<template>
  <div>
    <div>
      Responda algumas perguntas <br>
    </div>

    <br><br>

    <div>
      <label>Nome</label> <br>
      <input
        v-model="name"
        type="text"
      > <br>
      {{ name }}
    </div>

    <br><br>

    <div>
      <label>Esportes</label> <br>
      <select v-model="sports">
        <option value="">Escolha</option>
        <option value="Futebol">Futebol</option>
        <option value="Skate">Skate</option>
        <option value="Tênis">Tênis</option>
      </select> <br>
      {{ sports }}
    </div>

    <br><br>

    <div>
      <label>Newsletter</label> <br>
      <input
        v-model="newsletter"
        type="radio"
        value="Sim"
      > Sim
      <input
        v-model="newsletter"
        type="radio"
        value="Não"
      > Não <br>
      {{ newsletter }}
    </div>

    <br><br>

    <div>
      <label>Contrato</label> <br>
      <input
        v-model="contract"
        type="checkbox"
      > Aceita nossos termos... <br>
      {{ contract }}
    </div>

    <br><br>

    <div>
      <label>Cores que você mais gosta</label> <br>
      <input
        v-model="colors"
        type="checkbox"
        value="Azul"
      > Azul
      <input
        v-model="colors"
        type="checkbox"
        value="Amarelo"
      > Amarelo <br>
      {{ colors }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: 'Jon Snow',
      sports: 'Tênis',
      newsletter: 'Não',
      contract: true,
      colors: [],
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
