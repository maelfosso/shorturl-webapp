<template>
  <div class="hello">
    <form>
      <input type="url" name="url" />
      <button type="submit">Shorten</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  private url!: String;
  private errors: String[] = [];
  
  public onSubmit(): void {
    if (!this.url) {
      this.errors.push('URL can not be empty!');
    }

    this.$emit('url-submitted', this.url);
    this.url = "";
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
