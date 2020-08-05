<template>
  <div class="hello">
    <form @submit.prevent="onSubmit">
      <div class="ui action labeled input">
        <div class="ui label">
          http://
        </div>
        <input type="text" placeholder="mysite.com" id="url" v-model="url">
        <button class="ui button">Shorten</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  private url!: string;

  private errors: string[] = [];

  public onSubmit(): void {
    if (!this.url) {
      this.errors.push('URL can not be empty!');
    }

    this.$emit('url-submitted', this.url);
    this.url = '';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
