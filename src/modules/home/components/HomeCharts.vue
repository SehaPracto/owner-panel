<template>
  <Loader v-if="isLoading" />
  <div style="margin: auto auto" v-else>
    <a-row>
      <a-col :span="6">
        <HomeStatisticsCard title="Number of users" :number="noUser" />
      </a-col>
      <a-col :span="6">
        <HomeStatisticsCard title="Number of Doctors" :number="noDoctor" />
      </a-col>
      <a-col :span="6">
        <HomeStatisticsCard title="Number of HCPs" :number="noHcp" />
      </a-col>
      <a-col :span="6">
        <HomeStatisticsCard title="Number of Hospitals" :number="noHospital" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import HomeStatisticsCard from "./HomeStatisticsCard.vue";
import Loader from "@/components/Loader.vue";
import axiosProvider from "@/data/providers/axiosProvider";
export default {
  components: {
    HomeStatisticsCard,
    Loader,
  },
  data() {
    return {
      isLoading: true,
      noHospital: 0,
      noUser: 0,
      noDoctor: 0,
      noHcp: 0,
    };
  },
  async mounted() {
    const token = this.$store.state.token;
    this.isLoading = true;
    const response = await axiosProvider.getRequest("home", token);
    this.noHospital = response["hospital_number"];
    this.noUser = response["user_number"];
    this.noDoctor = response["doctor_number"];
    this.noHcp = response["hcp_number"];
    this.isLoading = false;
  },
};
</script>

<style>
</style>