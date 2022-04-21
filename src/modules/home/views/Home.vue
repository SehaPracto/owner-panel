<template>
  <div class="home">
    <div class="left-con">
      <SideBar @changeDisplayComponent="routeClick" />
    </div>
    <div class="right-con">
      <h1><component v-bind:is="component"></component></h1>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import HomeCharts from "../components/HomeCharts.vue";
import Patients from "@/modules/patient/views/Patients.vue";
import axiosProvider from "@/data/providers/axiosProvider";
export default {
  components: {
    HomeCharts,
    SideBar,
    Patients,
  },
  data() {
    return {
      component: "HomeCharts",
    };
  },
  methods: {
    routeClick(componentName) {
      this.component = componentName;
    },
  },
  async mounted() {
    console.log("home mounted");
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}
.right-con {
  width: 80%;
  float: right;
  padding: 20px;

  position: relative;
}
.left-con {
  width: 20%;
  float: left;
  padding: 20px;
}
</style>
