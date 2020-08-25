import { shallowMount } from '@vue/test-utils';
import ShortenedURLList from '@/components/ShortenedURLList.vue';
import ShortenedURL from '@/components/ShortenedURL.vue';
import URL from '@/models/url';

describe('ShortenedURLList.vue', () => {
  test ('renders props.url when passed', () => {
    const url = new URL(
      "https://docs.google.com/document/d/18sw1-5GoPnW_4wTAFsTeNQ-yrLgoFNT9GVHOphpc09I/edit#heading=h.nz77cqmq3oqc",
      "https://pbid.io/uoj8ihoy"
    );
    const wrapper = shallowMount(ShortenedURLList, {});

    const shortenedURL = wrapper.findComponent(ShortenedURL);
    expect(shortenedURL.exists()).toBe(true);
    
    const title = wrapper.find('.ui.large.header')
    expect(title.text()).toBe('Shortened URLs');
  });
});
