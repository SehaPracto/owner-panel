<template>
  <div class="container">
    <div class="row">
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
</style>