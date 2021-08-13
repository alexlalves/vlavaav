import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

const push = jest.fn();

describe('Home', () => {
  const wrapper = () => shallowMount(Home, {
    mocks: {
      $router: {
        push,
      },
    },
  });

  it('matches snapshot', () => {
    expect(wrapper().element).toMatchSnapshot();
  });

  describe('findColors', () => {
    describe('when text with no color is passed', () => {
      it('returns an empty list', () => {
        expect(
          wrapper().vm.findColors('Color: white :('),
        ).toEqual('');
      });
    });

    describe('when an uppercase color is passed', () => {
      it('returns that color', () => {
        expect(
          wrapper().vm.findColors('Color: #FF00FF'),
        ).toMatch('ff00ff');
      });
    });

    describe('when more than one color is passed', () => {
      describe('when they are unique', () => {
        it('returns those colors', () => {
          const colors = wrapper().vm.findColors('ColorA: #FF00FF #abcde0');

          expect(colors).toMatch('ff00ff');
          expect(colors).toMatch('abcde0');
        });
      });

      describe('when they are duplicated', () => {
        it('returns those colors', () => {
          const colors = wrapper().vm.findColors('ColorA: #FF00FF #ff00ff');
          expect(colors).toEqual('ff00ff');
        });
      });
    });
  });

  describe('when pasting colors', () => {
    beforeEach(() => {
      wrapper().vm.onAppPaste(
        { clipboardData: { getData: () => '#ff00ff' } } as unknown as ClipboardEvent,
      );
    });

    it('accesses the Palette view with the correct colors', () => {
      expect(push).toBeCalledWith({
        name: 'Palette', params: { colors: 'ff00ff' },
      });
    });
  });
});
