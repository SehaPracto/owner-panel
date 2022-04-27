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
import HumanResources from "@/modules/human_resources/views/HumanResources.vue";
import Slides from "@/modules/slides/views/Slides.vue";
import Countries from "@/modules/countries/views/Countries.vue";
import Doctors from "@/modules/doctors/views/Doctors.vue";
import Hcps from "@/modules/hcps/views/Hcps.vue";
import axiosProvider from "@/data/providers/axiosProvider";
export default {
  components: {
    HomeCharts,
    SideBar,
    Patients,
    HumanResources,
    Slides,
    Countries,
    Doctors,
    Hcps,
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
  position: relative;
}

@media screen and (min-width: 300px) and (max-width: 700px) {
  .right-con {
    margin-left: 80px;
  }
}

@media screen and (min-width: 701px) and (max-width: 1250px) {
  .right-con {
    margin-left: 150px;
  }
}
</style>
