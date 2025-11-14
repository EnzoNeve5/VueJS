<template>
  Hello Vue <br>
  <AppButton
    data-vue="John"
    variant="primary"
    @update="getUpdate"
  >
    Save
    <template #icon>Icon</template>
  </AppButton>
</template>

<script>
import AppButton from './components/AppButton.vue'
export default {
  name: 'App',
  components: { AppButton },
  setup() {
    const getUpdate = (data) => {
      console.log('getUpdate', data);
    };

    return {
      getUpdate
    };
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
