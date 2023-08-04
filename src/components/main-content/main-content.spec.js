import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MainContent from './main-content.vue'

const mockedCards = [
  {
    name: 'Card 1',
    placeholder: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    count: 0,
  },
  {
    name: 'Card 2',
    placeholder: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    count: 0,
  },
];

describe('MainContent', () => {
  it('should display cards', async () => {
    const wrapper = mount(MainContent);
    const countCards = mockedCards.length;
    await wrapper.setData({ cards: mockedCards })
    const cards = wrapper.findAll('.card-item');

    expect(cards.length).toEqual(countCards)
  })
  it('should update count', async () => {
    const wrapper = mount(MainContent);
    await wrapper.setData({ cards: mockedCards })

    const count = 5;
    const cardItemIdx1 = 0;
    const cardItemIdx2 = 1;
    const countTotal = 10;

    await wrapper.vm.updateCount(count, cardItemIdx1);
    await wrapper.vm.updateCount(count, cardItemIdx2);
    const counterItems = wrapper.vm.counterItems;

    expect(counterItems).toEqual(countTotal);
  })
})
