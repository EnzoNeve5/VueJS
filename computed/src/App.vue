<template>
  <div>
    {{ fullName }} <br> <br>

    <h1>Todos em aberto</h1>
    <div
      v-for="todo in uncompletedTodos"
      :key="todo.id"
    >
      {{ todo.title }}
    </div>

    <h2>Todos completas</h2>
    <div
      v-for="todo in completedTodos"
      :key="todo.id"
    >
      {{ todo.title }}
    </div>

    <br><br><br>
    <h3>Todos</h3>
    <div
      v-for="todo in todos"
      :key="todo.id"
    >
      <input
        v-model="todo.completed"
        type="checkbox"
      >
      {{ todo.title }}
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        first_name: 'Enzo',
        last_name: 'Neves',
      },
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ]
    }
  },
  computed: {
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`
    },
    uncompletedTodos() {
      return this.todos.filter(todo => !todo.completed);
    },
    completedTodos() {
      return this.todos.filter(todo => todo.completed);
    }
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: blue;
  background-color: aqua;
  margin-top: 30px;
}
</style>
