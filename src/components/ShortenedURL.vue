<template>
  <div class="item">
    <div class="header">{{ url.originalURL }}</div>
    <div>{{ url.shortenURL }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import URL from '../models/url';

@Component
export default class ShortenedURL extends Vue {
  @Prop() private url?: URL;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
