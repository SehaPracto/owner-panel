<template>
  <div class="slide-edit-modal">
    <Loader v-if="isLoading" />
    <div class="row" v-else>
      <div class="slide-edit-img-con">
        <img
          ref="display-img"
          class="slide-edit-img"
          :src="slide.img"
          :alt="slide.name"
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
        v-model="slide.name"
      />
      <input
        class="input-text"
        type="text"
        placeholder="Duration"
        v-model="slide.duration"
      />
      <input
        class="input-text"
        type="text"
        placeholder="Contact"
        v-model="slide.contact"
      />
      <input
        class="input-text"
        type="text"
        placeholder="Contact"
        v-model="slide.link"
      />

      <!-- <textarea
        class="input-text"
        name=""
        id=""
        cols="30"
        rows="10"
        style="resize: none"
        placeholder="Description"
        v-model="slide.description"
      ></textarea> -->
      <QuillEditor
        style="height: 500px"
        theme="snow"
        v-model:content="slide.description"
        contentType="html"
      />
      <button class="update-btn" @click="updateSlide">Update</button>
    </div>
  </div>
</template>

<script src="../scripts/editSlideScript">
</script>

<style>
@import "../styles/slides.css";
@import "@/assets/styles/global.css";
.input-text {
  margin: 10px auto;
}
</style>