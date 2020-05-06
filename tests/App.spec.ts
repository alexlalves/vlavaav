import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  def('wrapper', () => shallowMount(App));
  const wrapper = shallowMount(App);

  it('matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('findColors', () => {
    describe('when text with no color is passed', () => {
      it('returns an empty list', () => {
        expect(
          wrapper.vm.findColors('Color: white :('),
        ).toEqual([]);
      });
    });

    describe('when an uppercase color is passed', () => {
      it('returns that color', () => {
        expect(
          wrapper.vm.findColors('Color: #FF00FF'),
        ).toContain('#ff00ff');
      });
    });

    describe('when more than one color is passed', () => {
      describe('when they are unique', () => {
        it('returns those colors', () => {
          const colors = wrapper.vm.findColors('ColorA: #FF00FF #abcde0');

          expect(colors).toContain('#ff00ff');
          expect(colors).toContain('#abcde0');
        });
      });

      describe('when they are duplicated', () => {
        it('returns those colors', () => {
          const colors = wrapper.vm.findColors('ColorA: #FF00FF #ff00ff');
          expect(colors).toEqual(['#ff00ff']);
        });
      });
    });
  });
});
