<style src="./main-header.css"></style>
<template>
  <header class="main-header">
    <h2 class="name">{{ myName }}</h2>
    <h3 class="date">{{ dateNow }}</h3>
  </header>
</template>

<script>
export default {
  data: () => ({
    myName: 'Fagner Araujo',
    dateNow: ''
  }),
  mounted() {
    const date = new Date();
    const formattedDate = date.toDateString();
    this.dateNow = formattedDate;
  }
}
</script>