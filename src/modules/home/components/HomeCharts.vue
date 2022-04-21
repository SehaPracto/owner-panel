<template>
  <div style="margin: auto auto">
    <a-row>
      <a-col :span="6">
        <HomeStatisticsCard title="Number of users" number="10000" />
      </a-col>
      <a-col :span="6">
        <HomeStatisticsCard title="Number of Doctors" number="200" />
      </a-col>
      <a-col :span="6">
        <HomeStatisticsCard title="Number of HCPs" number="220" />
      </a-col>
      <a-col :span="6">
        <HomeStatisticsCard title="Number of Hospitals" number="12" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import HomeStatisticsCard from "./HomeStatisticsCard.vue";
import axiosProvider from "@/data/providers/axiosProvider";
export default {
  components: {
    HomeStatisticsCard,
  },
  async mounted() {
    const response = await axiosProvider.getRequest("home", "");
    console.log(response);
  },
};
</script>

<style>
</style>