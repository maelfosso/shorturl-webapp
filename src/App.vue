<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <URLForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShortenedURLList from './components/ShortenedURLList.vue';
import URLForm from './components/URLForm.vue';

@Component({
  components: {
    ShortenedURLList,
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
