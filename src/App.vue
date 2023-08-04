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
