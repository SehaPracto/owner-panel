<template>
  <div class="modal">
    <div class="title-bar">
      <h2>Add Country</h2>
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

<script>
import countryServices from "../services/countryServices";
export default {
  components: {},
  data() {
    return {
      name: "",
      nameAr: "",
      fileList: [],
      file: null,
      status: "",
      nameError: "",
      nameArError: "",
      flagIconError: "",
    };
  },
  methods: {
    handleFile(event) {
      console.log(event.target.files[0]);
      this.file = event.target.files[0];
    },

    async addCountry() {
      this.nameError = "";
      this.nameArError = "";
      this.flagIconError = "";
      const response = await countryServices.addCountry(
        this.name,
        this.nameAr,
        this.file
      );
      if (response["message"] == "success") {
        this.status = "Country Added Successfuly";
      } else {
        this.nameError = response["error"]["name"][0] ?? "";
        this.nameArError = response["error"]["name_ar"][0] ?? "";
        this.flagIconError = response["error"]["flag_icon"][0] ?? "";
      }
      await countryServices.getAllCountries();
    },
  },
};
</script>

<style>
@import "@/assets/styles/global.css";
@import "../styles/add-country-modal.css";
</style>
