import { shallowMount, createWrapper } from '@vue/test-utils';
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
    await input.setValue('');

    expect((input.element as HTMLInputElement).value).toBe('');
    expect(wrapper.vm.$data.url).toBe('');

    await form.trigger("submit.prevent");

    expect(wrapper.vm.$data.errors).toBeTruthy();
    expect(wrapper.vm.$data.errors).toContain("URL can not be empty");
    expect(wrapper.find('.error').exists()).toBeTruthy();

    expect(wrapper.find('button').attributes().disabled).toBeTruthy();
  });

  it('displays errors if url is not a valid URL', async () => {
    const wrapper = shallowMount(URLForm, {});
    const form = wrapper.find('form');
    const input = wrapper.find('input#url');
    await input.setValue('gothere...');

    expect((input.element as HTMLInputElement).value).toBe('gothere...');
    expect(wrapper.vm.$data.url).toBe('gothere...');

    await form.trigger("submit.prevent");

    expect(wrapper.vm.$data.errors).toBeTruthy();
    expect(wrapper.vm.$data.errors).toContain("URL is invalid");
    expect(wrapper.find('.error').exists()).toBeTruthy();
  });

  it('submit form if url is valid', async () => {
    const wrapper = shallowMount(URLForm, {});
    const form = wrapper.find('form');
    const input = wrapper.find('input#url');
    
    await input.setValue('https://microk8s.io/docs/troubleshooting');

    expect((input.element as HTMLInputElement).value).toBe('https://microk8s.io/docs/troubleshooting');
    expect(wrapper.vm.$data.url).toBe('https://microk8s.io/docs/troubleshooting');

    await form.trigger("submit.prevent");

    expect(wrapper.vm.$data.errors).toBeFalsy();
    expect(wrapper.find('.error').exists()).toBeFalsy();
    
    const rootWrapper = createWrapper(wrapper.vm.$root)
    expect(rootWrapper.emitted('url-submitted')).toHaveLength(1);
  });

});
