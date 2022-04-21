<template>
  <div style="padding: 30px">
    <a-card class="card" :title="title" :bordered="true">
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>


<style scoped>
.card {
  width: 300px;
  margin: 0 auto;
  text-align: center;
  height: 150px;
  border: 1px solid black;
}
</style>

