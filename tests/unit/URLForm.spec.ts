import { shallowMount } from '@vue/test-utils';
import URLForm from '@/components/URLForm.vue';

describe('URLForm.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(URLForm, {});
    const form = wrapper.find('form');
    const input = wrapper.find('input');
    const btn = wrapper.find('button');

    expect(form.exists()).toBeTruthy();
    expect(form.html()).toContain('input');
    expect(form.html()).toContain('button')
    expect(input.exists()).toBeTruthy();
    expect(btn.exists()).toBeTruthy();
    expect(wrapper.find('#url').exists()).toBeTruthy();
  });

  it('displays errors if url is empty', async () => {
    const wrapper = shallowMount(URLForm, {});
    const form = wrapper.find('form');
    const input = wrapper.find('input#url');
    console.log(input.html());
    await input.setValue('');

    expect((input.element as HTMLInputElement).value).toBe('');
    expect(wrapper.vm.$data.url).toBe('');

    await form.trigger("submit.prevent");

    expect(wrapper.vm.$data.errors.length).toBeGreaterThan(0);
    expect(wrapper.find('.error').exists()).toBeTruthy();
  });
});
