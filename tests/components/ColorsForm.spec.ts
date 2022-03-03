import { shallowMount } from '@vue/test-utils';
import ColorsForm from '@/components/ColorsForm.vue';

const push = jest.fn();

describe('ColorsForm', () => {
  def('wrapper', () => shallowMount(ColorsForm, {
    mocks: {
      $router: {
        push,
      },
    },
  }));

  afterEach(() => {
    push.mockClear();
  });

  it('matches snapshot', () => {
    expect(get('wrapper').element).toMatchSnapshot();
  });

  describe('findColors', () => {
    describe('when text with no color is passed', () => {
      it('returns an empty list', () => {
        expect(
          get('wrapper').vm.findColors('Color: white :('),
        ).toEqual('');
      });
    });

    describe('when an uppercase color is passed', () => {
      it('returns that color', () => {
        expect(
          get('wrapper').vm.findColors('Color: #FF00FF'),
        ).toMatch('ff00ff');
      });
    });

    describe('when more than one color is passed', () => {
      describe('when they are unique', () => {
        it('returns those colors', () => {
          const colors = get('wrapper').vm.findColors('ColorA: #FF00FF #abcde0');

          expect(colors).toMatch('ff00ff');
          expect(colors).toMatch('abcde0');
        });
      });

      describe('when they are duplicated', () => {
        it('returns only one of the duplicated color', () => {
          const colors = get('wrapper').vm.findColors('ColorA: #FF00FF #ff00ff');
          expect(colors).toEqual('ff00ff');
        });
      });
    });
  });

  describe('when submitting colors', () => {
    beforeEach(() => {
      get('wrapper').setData({
        pastedInfo: get('userInput'),
        samplePalette: '#ff00ff',
      });
      get('wrapper').vm.formSubmit();
    });

    describe('when no user input has been provided', () => {
      def('userInput', () => '');

      it('accesses the Palette view with the default colors', () => {
        expect(push).toBeCalledWith({
          name: 'Palette', params: { colors: 'ff00ff' },
        });
      });
    });

    describe('when user input has no colors provided', () => {
      def('userInput', () => 'Just a normal sentence');

      it('shows an error message', () => {
        expect(get('wrapper').vm.$data.pastedInfo).not.toBeFalsy();
        expect(push).not.toBeCalled();
      });
    });

    describe('when user input provides colors', () => {
      def('userInput', () => 'A color: #abcdef');

      it('accesses the Palette view with the provided colors', () => {
        expect(push).toBeCalledWith({
          name: 'Palette', params: { colors: 'abcdef' },
        });
      });
    });
  });
});
