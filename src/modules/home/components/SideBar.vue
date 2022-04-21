<template>
  <div class="side-bar">
    <ul class="side-bar-list">
      <li class="side-bar-item" @click="changeDisplayComponent('HomeCharts')">
        Home
      </li>
      <li
        class="side-bar-item"
        @click="changeDisplayComponent('HumanResources')"
      >
        Human Resources
      </li>
      <li class="side-bar-item" @click="changeDisplayComponent('Slides')">
        Slides
      </li>
      <li class="side-bar-item" @click="changeDisplayComponent('Countries')">
        Countries
      </li>
      <li class="side-bar-item" @click="changeDisplayComponent('Patients')">
        Patients
      </li>
      <li class="side-bar-item" @click="changeDisplayComponent('Doctors')">
        Doctors
      </li>
      <li
        class="side-bar-item"
        @click="changeDisplayComponent('HealthCareProviders')"
      >
        Health Care Providers
      </li>
      <li class="side-bar-item logout-btn">Logout</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    changeDisplayComponent(componentName) {
      this.$emit("changeDisplayComponent", componentName);
    },
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
  padding: 100px 15px;
}
.side-bar-list {
  list-style: none;
}
.side-bar-item {
  color: white;
  font-size: 20px;
  padding: 15px 0px;
  text-align: center;
}
.side-bar-item:hover {
  color: #4ab9b1;
  cursor: pointer;
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
    width: 150px;
    padding: 100px 15px;
  }
  .side-bar-item {
    color: white;
    font-size: 18px;
  }
}
</style>