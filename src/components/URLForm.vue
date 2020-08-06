<template>
  <div class="url-creation">
    <div class="ui large header">Enter the url</div>
    <form @submit.prevent="onSubmit">
      <div class="ui error message" v-if="errors.length > 0">
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
        <input type="text" placeholder="mysite.com" id="url" v-model="url" @focus="cleanErrors" v-on:keyup.enter="onSubmit">
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
    if (this.url == '') {
      this.errors.push('URL can not be empty!');
    } else {
      this.$root.$emit('url-submitted', new URL(this.url || '', ''));
      this.url = '';
    }
  }

  public cleanErrors(): void {
    this.errors = [];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.url-creation {
  flex: 1;
}

@media only screen and (max-width: 400px) {
  .url-creation .label {
    display: none;
  }
  .url-creation input {
    border-top-left-radius: 0.285714rem !important;
    border-bottom-left-radius: 0.285714rem !important;
    border-left-color: rgba(34, 36, 38, 0.15) !important;
  }
}

@media only screen and (max-width: 900px){
  .url-creation {
    margin-bottom: 1rem;
  }
  .url-creation .input {
    width: 100%;
  }
}
</style>
