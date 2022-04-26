<template>
  <div class="modal-custom">
    <div class="title-bar">
      <h2>Add Country</h2>
      <i class="close-btn fas fa-times" @click="closeModal"></i>
    </div>
    <div class="add-country-modal">
      <p class="success-text">{{ status }}</p>
      <form
        action=""
        @submit.prevent="addCountry"
        enctype="multipart/form-data"
      >
        <input
          name="name"
          class="input-text"
          type="text"
          placeholder="Name"
          required
          v-model="name"
        />
        <p class="text-error">{{ nameError }}</p>
        <input
          name="name_ar"
          class="input-text"
          type="text"
          placeholder="Name Arabic"
          required
          v-model="nameAr"
        />
        <p class="text-error">{{ nameArError }}</p>
        <!-- <input class="file-upload" type="file" @change="handleFile" /> -->
        <input class="file-upload" type="file" @change="handleFile" required />
        <input class="add-country-btn" type="submit" value="Add Country" />
        <p class="text-error">{{ flagIconError }}</p>
      </form>
    </div>
  </div>
</template>

<script src="../scripts/countryModalScript">
</script>

<style scoped>
@import "@/assets/styles/global.css";
@import "../styles/add-country-modal.css";
</style>
