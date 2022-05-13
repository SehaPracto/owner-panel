<template>
  <div class="col-md-6 slide-row">
    <div class="row">
      <div class="col-md-2">
        <img class="slide-row-img" :src="img" alt="slide" />
      </div>
      <div class="col-md-4 slide-row-con">
        <p class="slide-row-con-title">{{ name }}</p>
      </div>
      <div class="col-md-6 slide-row-con text-center">
        <button class="custom-btn edit-btn">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "img"],
};
</script>

<style>
</style>