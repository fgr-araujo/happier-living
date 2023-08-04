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
          :key="itemIdx"
          @click="removeItem(itemIdx)">
          {{ item }}
        </li>
      </template>
    </ul>
    <div class="card-commands">
      <button
        type="button"
        class="button"
        @click="addItem">
        Add Item
      </button>
    </div>
  </li>
</template>

<script>
const ITEM_NAME = 'Item #';

export default {
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
      const countItems = this.list.length + 1;
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
    }
  }
}
</script>