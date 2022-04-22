<template>
  <loader v-if="isLoading" />
  <div class="countries" v-else>
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
  async mounted() {
    this.isLoading = true;
    const countries = await countryServices.getAllCountries();
    this.countries = countries;
    this.isLoading = false;
  },
};
</script>

<style>
.countries {
  min-height: 100vh;
}
</style>