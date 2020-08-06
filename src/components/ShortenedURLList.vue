<template>
  <div class="urls-list">
    <ShortenedURL v-for="(url, index) in urls" :key="index" :url="url"></ShortenedURL>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShortenedURL from './ShortenedURL.vue';
import URL from '../models/url';

@Component({
  components: {
    ShortenedURL,
  },
})
export default class ShortenedURLList extends Vue {
  private urls: URL[] = [
    new URL('gogle.com.ur', 'reach.fexdefe'),
  ];

  mounted() {
    this.$root.$on('url-submitted', (url: URL) => {
      this.urls.push(url);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.urls-list {
  flex: 1;
}
</style>
