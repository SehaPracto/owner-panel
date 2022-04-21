<template>
  <div style="margin: auto auto">
    <a-row>
      <a-col :span="6"> <HomeStatisticsCard title="hello" /> </a-col>
      <a-col :span="6"> <HomeStatisticsCard title="hello" /> </a-col>
      <a-col :span="6"> <HomeStatisticsCard title="hello" /> </a-col>
      <a-col :span="6"> <HomeStatisticsCard title="hello" /> </a-col>
    </a-row>
  </div>
</template>

<script>
import HomeStatisticsCard from "./HomeStatisticsCard.vue";
export default {
  components: {
    HomeStatisticsCard,
  },
};
</script>

<style>
</style>