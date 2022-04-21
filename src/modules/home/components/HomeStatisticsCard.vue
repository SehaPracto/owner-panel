<template>
  <div style="padding: 30px">
    <a-card class="card" :title="title" :bordered="true">
      <p class="card-number">{{ number }}</p>
    </a-card>
  </div>
</template>

<script>
export default {
  props: ["title", "number"],
};
</script>


<style scoped>
.card {
  width: 200px;
  margin: 0 auto;
  text-align: center;
  height: 150px;
  border: 1px solid #d3d3d3;
  border-radius: 15px;
}
.card-number {
  color: #3f4394;
  font-size: 22px;
  font-weight: bold;
}
</style>

