import { shallowMount } from '@vue/test-utils';
import ShowColors from '@/components/ShowColors.vue';

describe('InitialInfo', () => {
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

  describe('numberOfColumns', () => {
    describe('when the number of colors is almost a perfect square', () => {
      def('colors', () => [
        'white', 'yellow',
        'blue',
      ].join(','));

      it('leaves space for the copy link', () => {
        expect(wrapper().vm.numberOfColumns).toEqual(2);
      });
    });

    describe('when the number of colors is bigger than a perfect square - 1', () => {
      def('colors', () => [
        'white', 'yellow',
        'blue', 'green',
      ].join(','));

      it('retuns an extra column', () => {
        expect(wrapper().vm.numberOfColumns).toEqual(3);
      });
    });
  });
});
