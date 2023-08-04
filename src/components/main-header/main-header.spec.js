import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import MainHeader from './main-header.vue'

describe('MainHeader', () => {
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
