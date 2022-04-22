<template>
  <div class="modal">
    <div class="title-bar">
      <h2>Add Country</h2>
    </div>
    <div class="add-country-modal">
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
        <input
          name="name_ar"
          class="input-text"
          type="text"
          placeholder="Name Arabic"
          required
          v-model="nameAr"
        />
        <!-- <input class="file-upload" type="file" @change="handleFile" /> -->
        <input class="file-upload" type="file" @change="handleFile" required />
        <input class="add-country-btn" type="submit" value="Add Country" />
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
    };
  },
  methods: {
    handleFile(event) {
      console.log(event.target.files[0]);
      this.file = event.target.files[0];
    },
    async addCountry() {
      const response = await countryServices.addCountry(
        this.name,
        this.nameAr,
        this.file
      );
      await countryServices.getAllCountries();
    },
  },
};
</script>

<style>
@import "@/assets/styles/global.css";
@import "../styles/add-country-modal.css";
</style>
