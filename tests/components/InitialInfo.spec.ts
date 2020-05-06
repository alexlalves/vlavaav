import { shallowMount } from '@vue/test-utils';
import InitialInfo from '@/components/InitialInfo.vue';

describe('InitialInfo', () => {
  def('wrapper', () => shallowMount(InitialInfo));
  const wrapper = shallowMount(InitialInfo);

  it('matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
