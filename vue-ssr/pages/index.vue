<template>
  <section class="container">
    <div>
      <h1>Lista de posts</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">titulo: {{ post.title }}</li>
      </ul>
    </div>
  </section>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  asyncData() {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return { posts: response.data }
      })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
