import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CardItem from './card-item.vue'

describe('CardItem', () => {
  it('should add new item', async () => {
    const wrapper = mount(CardItem);
    await wrapper.vm.addItem();
    expect(wrapper.vm.list.length).toEqual(1);
  })
  it('should add remove item', async () => {
    const wrapper = mount(CardItem);
    await wrapper.vm.addItem();
    await wrapper.vm.removeItem(0)
    expect(wrapper.vm.list.length).toEqual(0);
  })
  it('should emit count', async () => {
    const emitCount = [[1]];
    const wrapper = mount(CardItem);
    await wrapper.vm.addItem();
    expect(wrapper.emitted()).toHaveProperty('update-count')
    expect(wrapper.emitted()['update-count']).toEqual(emitCount)
  })
  it('should show placeholder when the list is empty', async () => {
    const wrapper = mount(CardItem);
    await wrapper.vm.addItem();
    await wrapper.vm.removeItem();
    const placeholderCaption = wrapper.find('.card-placeholder')
    const itemCaption = wrapper.find('.item')
    expect(placeholderCaption.exists()).toBeTruthy();
    expect(itemCaption.exists()).toBeFalsy();
  })
  it('should hide the placeholder when the list is not empty', async () => {
    const wrapper = mount(CardItem);
    await wrapper.vm.addItem();
    const placeholderCaption = wrapper.find('.card-placeholder')
    const itemCaption = wrapper.find('.item')
    expect(placeholderCaption.exists()).toBeFalsy();
    expect(itemCaption.exists()).toBeTruthy();
  })
})
