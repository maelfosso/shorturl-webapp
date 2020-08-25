import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import ShortenedURLList from '@/components/ShortenedURLList.vue';
import URLForm from '@/components/URLForm.vue';

describe('App.vue', () => {
  it ('has data', () => {
    const wrapper = shallowMount(App, {});
    
    const shortenedURLList = wrapper.findComponent(ShortenedURLList);
    const urlForm = wrapper.findComponent(URLForm);
    expect(shortenedURLList.exists()).toBe(true);
    expect(urlForm.exists()).toBe(true);
  });
});

