<template>
  <main-header class="header"/>
  <main-content class="content" />
</template>

<script>
import MainHeader from './components/main-header/main-header.vue';
import MainContent from './components/main-content/main-content.vue';

export default {
  components: {
    MainHeader,
    MainContent,
  }
}
</script>

<style>
.header {
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #DDD;
}
</style>