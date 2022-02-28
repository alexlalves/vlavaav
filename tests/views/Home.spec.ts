import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

const push = jest.fn();

describe('Home', () => {
  const wrapper = () => shallowMount(Home, {
    // mocks: {
    //   $router: {
    //     push,
    //   },
    // },
  });

  it('matches snapshot', () => {
    expect(wrapper().element).toMatchSnapshot();
  });
});
