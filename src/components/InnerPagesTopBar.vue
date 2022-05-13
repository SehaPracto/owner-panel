<template>
  <div class="inner-pages-top-bar">
    <button class="back-btn" @click="$router.back()">
      <i class="fas fa-arrow-left"></i>
    </button>
    <h1 class="top-bar-title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
.inner-pages-top-bar {
  margin: 25px auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.top-bar-title {
  margin: auto 25px;
  font-size: 25px;
  font-weight: bold;
}
.back-btn {
  font-size: 30px;
}
</style>