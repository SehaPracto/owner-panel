<template>
  <div class="home">
    <div class="left-con">
      <SideBar @changeDisplayComponent="routeClick" />
    </div>
    <div class="right-con">
      <div class="navbar">
        <button class="profile-btn" @click="$router.push('/profile')">
          <i class="fas fa-user-alt"></i>
        </button>
      </div>
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
import HcpAppointments from "@/modules/hcp_appointment/views/HcpAppointments.vue";
import DoctorAppointments from "@/modules/doctor_appointment/views/DoctorAppointments.vue";
import NotificationCenter from "@/modules/notifications/views/NotificationCenter.vue";
import Specialties from "@/modules/specialties/views/Specialties.vue";
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
    HcpAppointments,
    DoctorAppointments,
    NotificationCenter,
    Specialties,
  },
  data() {
    return {
      component: localStorage.getItem("lastTab") ?? "HomeCharts",
    };
  },
  methods: {
    routeClick(componentName) {
      this.component = componentName;
    },
  },
  async mounted() {
    console.log("home mounted");
    const response = await axiosProvider.getRequest(
      "get-admin",
      this.$store.getters.getToken
    );
    this.$store.commit("setAdmin", response["admin"]);
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
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.profile-btn {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background: #d3d3d3;
}
.profile-btn:hover {
  background: #3f4394;
}

@media screen and (min-width: 300px) and (max-width: 700px) {
  .right-con {
    margin-left: 80px;
  }
  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}

@media screen and (min-width: 701px) and (max-width: 1250px) {
  .right-con {
    margin-left: 150px;
  }
}
</style>
