<template>
  <div class="hello">
    <div class="item" v-for="(url, index) in urls" :key="index">
      <a class="header">{{ url.originalURL }}</a>
      <div class="description">{{ url.shortenedURL }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import URL from '../models/url';

@Component
export default class ShortenedURLList extends Vue {
  private urls: URL[] = [];

  mounted() {
    this.$on('url-submitted', (url: URL) => {
      this.urls.push(url);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
