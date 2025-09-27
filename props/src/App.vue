<template>
    <div>
      <h1>Preencha o formulário</h1>
      <BaseAlert
        variant='success'
        text='Seu formulário foi enviado com sucesso'
      />
      <BaseAlert
        variant='alert'
        text='Seu formulário foi enviado'
      />
      <BaseAlert
        variant='danger'
        text='Seu formulário foi enviado sem sucesso'
      />
      <BaseAlert
        text='Seu formulário está vazio'
      />
    </div>
</template>

<script>
import BaseAlert from './components/BaseAlert.vue'
export default {
    name: 'App',
    components: { BaseAlert },
    data() {
        return {
          variant: '',
          text: ''
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
    methods: {}
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
