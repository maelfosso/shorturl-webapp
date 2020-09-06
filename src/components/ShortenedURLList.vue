<template>
  <div class="urls-list">
    <div class="ui large header">Shortened URLs</div>
    <div class="ui error message" v-if="errors">
      <div class="header">
        Errors
      </div>
      <div>{{ errors }}</div>
    </div>
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
  private urls: URL[] = [];

  private errors = '';

  mounted() {
    this.getURLs();

    this.$root.$on('url-submitted', (url: any) => {
      this.urls.push(url);
    });
  }

  public getURLs(): void {
    fetch(`${process.env.VUE_APP_API_URL}/api/v1/urls`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res: Response) => {
      if (res.ok) {
        return res.json();
      }

      throw res;
    }).then((data) => {
      this.urls = data.urls;
    }).catch((err) => {
      this.errors = 'An error occurred. Please, try again later.';
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
