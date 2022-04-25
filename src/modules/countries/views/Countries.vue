<template>
  <loader v-if="isLoading" />
  <div class="countries" v-else>
    <button @click="showAddCountryModal">Add Country</button>
    <AddCountryModal v-show="isShowModal" />
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
      const countries = await countryServices.getAllCountries();
      this.countries = countries;
    },

    async addCountry() {},

    showAddCountryModal() {
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
}
</style>