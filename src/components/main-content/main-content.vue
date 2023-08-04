<style src="./main-content.css"></style>
<template>
  <section class="main-content">
    <div class="counter">Item Counter: {{ counterItems }}</div>
    <ul class="card-container">
      <template
        v-for="(cardItem, cardItemIdx) in cards"
        :key="cardItemIdx">
        <card-item
          class="card-item"
          :card-name="cardItem.name"
          :card-placeholder="cardItem.placeholder"
          @update-count="(count) => updateCount(count, cardItemIdx)"/>
      </template>
    </ul>
  </section>
</template>

<script>
import CardItem from '../card-item/card-item.vue';

export default {
  components: {
    CardItem
  },
  data: () => ({
    cards: [
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
    ]
  }),
  computed: {
    counterItems() {
      const countTotal = this.cards.reduce((acc, curr) => acc + curr.count, 0);
      return countTotal;
    }
  },
  methods: {
    updateCount(count, cardItemIdx) {
      this.cards[cardItemIdx].count = count;
    }
  }
}
</script>