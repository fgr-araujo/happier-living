<style src="./card-item.css"></style>
<template>
  <li class="card-item">
    <div class="card-header">
      <div class="photo"></div>
      <span class="name">{{ cardName }}</span>
    </div>
    <ul
      class="card-list">
      <li
        class="card-placeholder"
        v-if="!showList">{{ cardPlaceholder }}
      </li>
      <template v-if="showList">
        <li
          class="item"
          v-for="(item, itemIdx) in list"
          :key="itemIdx">
          <button
            type="button"
            class="buttonitem"
            @click="removeItem(itemIdx)">
            {{ item }}
          </button>
        </li>
      </template>
    </ul>
    <div class="card-commands">
      <button
        type="button"
        class="button button__add"
        @click="addItem">
        Add Item
      </button>
      <button
        class="button button__remove"
        @click="removeCard">
        <remove-item-icon class="icon"></remove-item-icon>
      </button>
    </div>
  </li>
</template>

<script>
import RemoveItemIcon from '../icons/remove-item.vue';
const ITEM_NAME = 'Item #';

export default {
  components: {
    RemoveItemIcon
  },
  props: {
    cardName: {
      default: ''
    },
    cardPlaceholder: {
      default: ''
    }
  },
  data: () => ({
    list: []
  }),
  computed: {
    showList() { return this.list.length }
  },
  methods: {
    addItem() {
      const lastItem = this.list.slice(-1);
      let itemCount = 0;
      if (lastItem.length) {
        const lastItemSplitted = lastItem[0].split('#');
        itemCount = +lastItemSplitted[1];
      }
      const countItems = itemCount + 1;
      this.list.push(`${ITEM_NAME}${countItems}`);
      this.updateCount();
    },
    removeItem(itemIdx) {
      this.list.splice(itemIdx, 1);
      this.updateCount();
    },
    updateCount() {
      const countItems = this.list.length;
      this.$emit('update-count', countItems)
    },
    removeCard() {
      this.$emit('remove-card')
    }
  }
}
</script>