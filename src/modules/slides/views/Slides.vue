<template>
  <div class="container">
    <button class="create-slide-btn" @click="goToCreateSlide">
      <i class="fas fa-plus"></i> Create
    </button>
    <Loader v-if="isLoading" />
    <div class="row" v-else>
      <SlideRow
        v-for="slide in slides"
        :key="slide.id"
        :id="slide.id"
        :imgSrc="slide.img"
        :title="slide.name"
        :isActive="slide.is_active"
        :views="slide.views"
        :clicks="slide.clicks"
      />
    </div>
  </div>
</template>

<script src="../scripts/slidesScript">
</script>

<style>
@import "../styles/slides.css";
</style>