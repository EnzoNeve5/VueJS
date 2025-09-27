<template>
    <div>
      <h1>Preencha o formulário</h1>
      <BaseAlert
        v-if="showAlert"
        variant='success'
        text='Seu formulário foi enviado com sucesso'
        @close="onClose()"
      />
      <BaseAlert
        v-if="showAlert"
        variant='alert'
        text='Seu formulário foi enviado'
        @close="onClose()"
      />
      <BaseAlert
        v-if="showAlert"
        variant='danger'
        text='Seu formulário foi enviado sem sucesso'
        @close="onClose()"
      />
      <BaseAlert
        v-if="showAlert"
        text='Seu formulário está vazio'
        @close="onClose()"
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
          showAlert: true,
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
    methods: {
        onClose() {
          this.showAlert = false;
          console.log('Fechou o alerta');
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
