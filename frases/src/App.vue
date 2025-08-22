<template>
  <h1 class="title">Frases:</h1>
  <div>
    <h1 :class="{ 'subtitle': true, 'subtitle-home': isHome }">
      Exemplos
    </h1>
    <p :class="pClass">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint voluptatibus magnam animi error temporibus maiores excepturi nihil fuga odio pariatur dolore aliquam impedit, fugit ut autem. Alias, doloribus quas!
    </p>
    <p :style="styleClass">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias dicta ducimus voluptas nam hic delectus expedita ab laboriosam? Omnis ipsum assumenda doloremque ab similique sequi, doloribus perspiciatis nemo asperiores accusamus!
    </p>
    <div 
      v-for="(obj, index) in todos"
      v-bind:key="obj.id"
      class="todos-item"
    >
        <img 
          v-if="obj.imgSrc"
          :src="obj.imgSrc"
        >
        {{ index }} - {{ obj.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isHome: true,
      classVar: 'subtitle',
      styleClass: { color: 'salmon', backgroundColor: 'beige', 'font-size': '10px'},
      pClass: ['text', 'text-home'],
      todos: [
            {
              "userId": 1,
              "id": 1,
              "title": "delectus aut autem",
              "completed": false,
              "imgSrc": 'https://placehold.co/100x100',
            },
            {
              "userId": 1,
              "id": 2,
              "title": "quis ut nam facilis et officia qui",
              "completed": false,
              "imgSrc": 'https://placehold.co/150x150',
            },
            {
              "userId": 1,
              "id": 3,
              "title": "fugiat veniam minus",
              "completed": false,
              "imgSrc": 'https://placehold.co/200x200',
            },
            {
              "userId": 1,
              "id": 4,
              "title": "et porro tempora",
              "completed": true,
              "imgSrc": 'https://placehold.co/250x250',
            },
            {
              "userId": 1,
              "id": 5,
              "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
              "completed": false,
              "imgSrc": 'https://placehold.co/300x300',
            },
            {
              "userId": 1,
              "id": 6,
              "title": "lorem ipsum, amet consectetur",
              "completed": false
            },
            {
              "userId": 1,
              "id": 7,
              "title": "laboriosam, amet consectetur mollitia et adipisci illum",
              "completed": false
            },
            {
              "userId": 1,
              "id": 8,
              "title": "mollitia et enim quasi",
              "completed": true
            },
            {
              "userId": 1,
              "id": 9,
              "title": "sint voluptatibus magnam animi error",
              "completed": false
            },
            {
              "userId": 1,
              "id": 10,
              "title": "voluptas nam hic delectus expedita assumenda doloremque ab",
              "completed": true
            },
          ]
    }
  }
}
</script>

<style>
.title {
  font-size: 60px;
}
.subtitle {
  font-size: 20px;
  color: #67748b;
}
.subtitle-home {
  font-size: 40px;
  color: #2c3e50;
}
.text {
  color: gray;
}
.text-home {
  color: rgb(60, 255, 0);
}
.todos-item {
  background: #00f;
  margin: 0 0 10px 0;
  padding: 3px 9px;
  color: #ff0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
</style>