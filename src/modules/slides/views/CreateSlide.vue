<template>
  <div class="slide-edit-modal">
    <div class="row">
      <div class="slide-edit-img-con">
        <img
          ref="display-img"
          class="slide-edit-img"
          src="@/assets/logo.png"
          alt=""
        />
        <i class="fas fa-edit edit-icon" @click="openImagePicker"></i>
        <input
          ref="img-picker-ref"
          type="file"
          style="display: none"
          @change="pickImage"
        />
      </div>
      <input
        class="input-text"
        type="text"
        placeholder="Title"
        v-model="name"
      />
      <input
        class="input-text"
        type="text"
        placeholder="Duration"
        v-model="duration"
      />
      <input
        class="input-text"
        type="text"
        placeholder="Contact"
        v-model="contact"
      />
      <input class="input-text" type="text" placeholder="Link" v-model="link" />

      <textarea
        class="input-text"
        name=""
        id=""
        cols="30"
        rows="10"
        style="resize: none"
        placeholder="Description"
        v-model="description"
      ></textarea>
      <button class="update-btn" @click="createSlide">Create</button>
    </div>
  </div>
</template>

<script src="../scripts/createSlideScript">
</script>

<style>
@import "../styles/slides.css";
@import "@/assets/styles/global.css";
.input-text {
  margin: 10px auto;
}
</style>