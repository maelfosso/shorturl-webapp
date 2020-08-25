import { shallowMount } from '@vue/test-utils';
import ShortenedURL from '@/components/ShortenedURL.vue';
import URL from '@/models/url';

describe('ShortenedURL.vue', () => {
  test ('renders props.url when passed', () => {
    const url = new URL(
      "https://docs.google.com/document/d/18sw1-5GoPnW_4wTAFsTeNQ-yrLgoFNT9GVHOphpc09I/edit#heading=h.nz77cqmq3oqc",
      "https://pbid.io/uoj8ihoy"
    );
    const wrapper = shallowMount(ShortenedURL, {
      propsData: { url }
    });

    expect(wrapper.props().url).toBe(url);
  });
});
