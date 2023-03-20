import { shallowMount } from '@vue/test-utils';

import UIButton from './ui-button.component.vue';

describe('UIButton', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(UIButton, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
