import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MainHeader from './main-header.vue'

describe('HelloWorld', () => {
  it('should display the name', () => {
    const wrapper = mount(MainHeader);
    const nameCaption = wrapper.find('h2.name');
    expect(nameCaption.exists()).toBeTruthy();
  })
  it('should display the date', () => {
    const wrapper = mount(MainHeader);
    const nameCaption = wrapper.find('h3.date');
    expect(nameCaption.exists()).toBeTruthy();
  })
})
