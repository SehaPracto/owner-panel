<template>
  <div class="modal">
    <div>
      <h2>Add Country</h2>
    </div>
    <div class="add-country-modal">
      <input name="name" class="input-text" type="text" placeholder="Name" />
      <input
        name="name_ar"
        class="input-text"
        type="text"
        placeholder="Name Arabic"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "@/assets/styles/global.css";
.add-country-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.modal {
  height: 400px;
  width: 400px;
  border: 1px solid #d3d3d3;
  border-radius: 15px;
  margin: auto auto;
  padding: 0px 25px;
  box-shadow: 1px 1px#d3d3d3;
}
.modal h2 {
  text-align: center;
  margin: 10px auto;
  font-size: 22px;
}
.input-text {
  margin-top: 20px;
}
</style>
