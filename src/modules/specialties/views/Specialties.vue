<template>
  <div class="container">
    <div class="row">
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