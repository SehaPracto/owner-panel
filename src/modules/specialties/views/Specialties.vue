<template>
  <div class="container">
    <select
      ref="specialty"
      class="form-select"
      aria-label="Default select example"
      @change="handleSpecialtyChange"
    >
      <option value="doctor">Doctors</option>
      <option value="hcp">HCPs</option>
    </select>
    <Loader v-if="isLoading" />
    <div class="row" v-else>
      <SpecialtyRow
        v-for="specialty in specialties"
        :key="specialty.id"
        :name="specialty.name"
        :img="specialty.img"
      />
    </div>
  </div>
</template>

<script src="../scripts/specialtiesScripts.js">
</script>

<style>
@import "@/assets/styles/global.css";
@import "../styles/specialties.css";
</style>