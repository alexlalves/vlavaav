import { shallowMount } from '@vue/test-utils';
import ShowColors from '@/components/ShowColors.vue';

describe('InitialInfo', () => {
  def('colors', () => ['white', 'yellow']);

  const wrapper = () => shallowMount(
    ShowColors, {
      propsData: {
        colors: get('colors'),
      },
    },
  );

  it('matches snapshot', () => {
    expect(wrapper().element).toMatchSnapshot();
  });

  describe('numberOfColumns', () => {
    describe('when the number of colors is a perfect square', () => {
      def('colors', () => [
        'white', 'yellow',
        'blue', 'green',
      ]);

      it('retuns the exact amount of columns needed', () => {
        expect(wrapper().vm.numberOfColumns).toEqual(2);
      });
    });

    describe('when the number of colors is bigger than a perfect square', () => {
      def('colors', () => [
        'white', 'yellow',
        'blue', 'green',
        'orange',
      ]);

      it('retuns an extra column', () => {
        expect(wrapper().vm.numberOfColumns).toEqual(3);
      });
    });
  });
});
