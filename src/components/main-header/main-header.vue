<style src="./main-header.css"></style>
<template>
  <header class="main-header">
    <div class="container">
      <h2 class="name">{{ myName }}</h2>
      <h3 class="date">{{ dateNow }}</h3>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    myName: 'Fagner Araujo',
    dateNow: ''
  }),
  mounted() {
    this.setDate();
  },
  methods: {
    setDate() {
      const date = new Date();
      const formattedDate = date.toDateString();
      const formattedTime = date.toLocaleTimeString();
      this.dateNow = `${formattedDate} ${formattedTime}`;
    }
  }
}
</script>