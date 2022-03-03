import { shallowMount } from '@vue/test-utils';
import ShowColors from '@/components/ShowColors.vue';

describe('ShowColors', () => {
  def('colors', () => 'FFF,FF0');

  const wrapper = () => shallowMount(
    ShowColors, {
      propsData: {
        commaSeparatedColors: get('colors'),
      },
      stubs: ['router-link'],
    },
  );

  it('matches snapshot', () => {
    expect(wrapper().element).toMatchSnapshot();
  });
});
