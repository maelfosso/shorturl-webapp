<template>
  <div class="urls-list">
    <div class="ui large header">Shortened URLs</div>
    <div class="ui list">
      <ShortenedURL v-for="(url, index) in urls" :key="index" :url="url"></ShortenedURL>
    </div>
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
    // new URL('gogle.com.ur', 'reach.fexdefe'),
  ];

  mounted() {
    this.getURLs();

    this.$root.$on('url-submitted', (url: any) => {
      this.urls.push(url);
    });
  }

  public getURLs(): void {
    fetch('http://localhost:4000/api/v1/urls', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res: Response) => res.json()).then((data: any) => {
      this.urls = data.urls;
    }).catch((err: any) => {
      console.log('FETCH ERROR : ', err);
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
