<template>
  <div class="side-bar">
    <ul class="side-bar-list">
      <li class="side-bar-item" @click="changeDisplayComponent('HomeCharts')">
        <i class="fas fa-home"></i> Home
      </li>
      <li
        class="side-bar-item"
        @click="changeDisplayComponent('HumanResources')"
      >
        <i class="fas fa-briefcase"></i> Human Resources
      </li>
      <li class="side-bar-item" @click="changeDisplayComponent('Slides')">
        <i class="fas fa-ad"></i> Slides
      </li>
      <li
        class="side-bar-item"
        @click="changeDisplayComponent('NotificationCenter')"
      >
        <i class="fas fa-bell"></i> Notifications Center
      </li>
      <li class="side-bar-item" @click="changeDisplayComponent('Countries')">
        <i class="fas fa-globe"></i> Countries
      </li>
      <li class="side-bar-item" @click="changeDisplayComponent('Patients')">
        <i class="fas fa-user"></i> Patients
      </li>
      <li class="side-bar-item" @click="changeDisplayComponent('Specialties')">
        <i class="fas fa-user-tag"></i> Specialties
      </li>
      <li class="side-bar-item" @click="changeDisplayComponent('Doctors')">
        <i class="fas fa-stethoscope"></i> Doctors
      </li>
      <li class="side-bar-item" @click="changeDisplayComponent('Hcps')">
        <i class="fas fa-syringe"></i> HCPs
      </li>
      <li
        class="side-bar-item"
        @click="changeDisplayComponent('DoctorAppointments')"
      >
        <i class="fas fa-calendar"></i> Doctors' Appointments
      </li>
      <li
        class="side-bar-item"
        @click="changeDisplayComponent('HcpAppointments')"
      >
        <i class="fas fa-calendar"></i> HCPs' Appointments
      </li>
      <li class="side-bar-item logout-btn" @click="logout">
        <i class="fas fa-sign-out-alt"></i> Logout
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    changeDisplayComponent(componentName) {
      this.$emit("changeDisplayComponent", componentName);
      this.setLastOpenTab(componentName);
    },
    setLastOpenTab(tab) {
      localStorage.setItem("lastTab", tab);
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
  },
  mounted() {
    const currentTab = localStorage.getItem("lastTab") ?? "HomeCharts";
    this.changeDisplayComponent(currentTab);
  },
};
</script>

<style scoped>
.side-bar {
  position: fixed;
  top: 0;
  left: 0;
  background: #3f4394;
  height: 100%;
  width: 250px;
  padding: 40px 15px;
}
.side-bar-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 0;
}
.side-bar-item {
  color: white;
  font-size: 16px;
  padding: 10px 0;
  display: flex;
  align-items: center;
}
.side-bar-item:hover {
  color: #4ab9b1;
  cursor: pointer;
}
.side-bar-item i {
  margin-right: 5px;
}
.logout-btn {
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
}
.logout-btn:hover {
  color: red;
}

@media screen and (max-width: 700px) {
  .side-bar {
    width: 120px;
    padding: 100px 15px;
  }
  .side-bar-item {
    color: white;
    font-size: 12px;
  }
}
</style>