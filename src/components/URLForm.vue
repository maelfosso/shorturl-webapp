<template>
  <div class="url-creation">
    <form @submit.prevent="onSubmit">
      <div class="ui error message" v-show="errors.length != 0">
        <i class="close icon"></i>
        <div class="header">
          Errors
        </div>
        <ul class="list">
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
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
import URL from '../models/url';

@Component
export default class URLForm extends Vue {
  private url?: string = '';

  private errors: string[] = [];

  public onSubmit(): void {
    if (!this.url) {
      this.errors.push('URL can not be empty!');
    } else {
      this.$root.$emit('url-submitted', new URL(this.url || '', ''));
      this.url = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.url-creation {
  flex-grow: 1;
}
</style>