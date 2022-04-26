<template>
  <loader v-if="isLoading" />
  <div class="countries" v-else>
    <button class="add-btn col-md-12" @click="toggleShowAddCountryModal">
      <i class="fas fa-plus"></i> Add Country
    </button>
    <table class="table">
      <thead>
        <tr>
          <th class="text-center" scope="col">#</th>
          <th class="text-center" scope="col">Name</th>
          <th class="text-center" scope="col">Name Arabic</th>
          <th class="text-center" scope="col">Flag</th>
          <th class="text-center" scope="col">View Cities</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(country, index) in countries" :key="country.id">
          <th class="text-center" scope="row">{{ index + 1 }}</th>
          <td class="text-center">{{ country.name }}</td>
          <td class="text-center">{{ country.name_ar }}</td>
          <td class="text-center">
            <img :src="country.flag_icon" alt="" height="50" width="50" />
          </td>
          <td class="text-center"><button class="btn btn-info">Add</button></td>
        </tr>
      </tbody>
    </table>
    <AddCountryModal
      @closeModal="toggleShowAddCountryModal"
      v-show="isShowModal"
    />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import AddCountryModal from "../components/AddCountryModal.vue";
import countryServices from "../services/countryServices";
export default {
  components: {
    Loader,
    AddCountryModal,
  },
  data() {
    return {
      isLoading: true,
      isShowModal: false,
      countries: [],
    };
  },
  methods: {
    async getCountries() {
      const response = await countryServices.getAllCountries();
      this.countries = response["countries"];
    },

    async addCountry() {},

    toggleShowAddCountryModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
  async mounted() {
    this.isLoading = true;
    await this.getCountries();
    this.isLoading = false;
  },
};
</script>

<style>
.countries {
  min-height: 100vh;
  position: relative;
}
.add-btn {
  font-size: 18px;
  margin-bottom: 50px;
  background: #3f4394;
  width: 150px;
  height: 50px;
  color: white;
  font-weight: bold;
  border-radius: 15px;
}
</style>