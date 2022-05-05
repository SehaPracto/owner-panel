<template>
  <div class="slide-edit-modal">
    <Loader v-if="isLoading" />
    <div class="row" v-else>
      <h1>Slide</h1>
    </div>
  </div>
</template>

<script src="../scripts/editSlideScript">
</script>

<style>
@import "../styles/slides.css";
</style>