<template>
  <div class="hello">
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ShortenedURLList extends Vue {
  private urls:any[] = [];

  mounted() {
    this.$on('url-submitted', (shortenedURL:any) {
      this.urls.push(shortenedURL);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
