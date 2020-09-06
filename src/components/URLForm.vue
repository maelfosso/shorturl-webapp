<template>
  <div class="url-creation">
    <div class="ui large header">Enter the url</div>
    <form @submit.prevent="onSubmit" class="ui form" :class="{ error : errors }">
      <div class="ui error message" v-if="errors">
        <div class="header">
          Errors
        </div>
        <div>{{ errors }}</div>
      </div>
      <div class="ui action input">
        <input type="text" placeholder="http(s)://mysite.com/path-name/..." id="url"
          v-model="url" @focus="cleanErrors" v-on:keyup.enter="onSubmit"/>
        <button class="ui button mini" :disabled="url.length === 0">Shorten</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class URLForm extends Vue {
  private url?: string = '';

  private errors = '';

  public onSubmit(): void {
    if (this.url === '') {
      this.errors = 'URL can not be empty!';
    } else if (!/^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/.test(this.url || '')) {
      this.errors = 'Your URL is invalid!';
    } else {
      this.postURL();
    }
  }

  public cleanErrors(): void {
    this.errors = '';
  }

  public postURL(): void {
    fetch(`${process.env.VUE_APP_API_URL}/api/v1/urls`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        originalURL: this.url,
      }),
    }).then((res: Response) => {
      if (res.ok) {
        return res.json();
      }

      throw res;
    }).then((data) => {
      this.$root.$emit('url-submitted', data.url as URL);
      this.url = '';
    })
      .catch((err) => {
        console.log(err);
        if (err.status === 406) {
          this.errors = 'URL already shortens';
        } else if (err.status === 422) {
          this.errors = 'Invalid original URL';
        } else {
          this.errors = 'An error occurered. Try later';
        }
      });
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
