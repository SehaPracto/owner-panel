<template>
  <div class="col-md-12 slide-row">
    <div class="row">
      <div class="col-md-2">
        <img class="slide-row-img" :src="imgSrc" alt="slide" />
      </div>
      <div class="col-md-4 slide-row-con">
        <p class="slide-row-con-title">{{ title }}</p>
        <p class="slide-row-con-title">
          {{ isActive ? "Active" : "Not Active" }}
        </p>
        <div class="row">
          <div class="col-md-12 slide-row-con-title text-center">
            views: {{ views }}
          </div>
          <div class="col-md-12 slide-row-con-title text-center">
            Clicks: {{ clicks }}
          </div>
        </div>
      </div>
      <div class="col-md-6 slide-row-con text-center">
        <button class="custom-btn edit-btn" @click="goToSlide(id)">Edit</button>
        <button class="custom-btn delete-btn" @click="deleteSlide(id)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/slideRowScript.js">
</script>

<style>
@import "../styles/slides.css";
</style>