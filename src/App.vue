<template>
  <div id="app">
    <div class="logo">
      <h1>Shorten your URL</h1>
    </div>
    <div class="content">
      <URLForm />
      <ShortenedURLList />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShortenedURLList from './components/ShortenedURLList.vue';
import ShortenedURL from './components/ShortenedURL.vue';
import URLForm from './components/URLForm.vue';

@Component({
  components: {
    ShortenedURLList,
    ShortenedURL,
    URLForm,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
}
.logo {
  text-align: center;
}
.content {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
.content > div {
  margin: 1em;
}

@media (max-width: 900px){
  #app {
    margin-top: 5px;
  }
  .content {
    flex-direction: column;
    margin-left: 1em;
    margin-right: 1em;
    width: auto;
  }
}
</style>
