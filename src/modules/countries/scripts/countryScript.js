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
      countryId: 0,
      selectedCountry: null,
      countryCities: [],
      cityId: 0,
      cityProvinces: [],
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
    setCountry(id) {
      this.countryId = id;
      this.cityProvinces = [];
    },
    async getCountryCities(event) {
      const id = event.target.value;
      this.setCountry(id);
      const response = await countryServices.getCountryCities(id);
      console.log(response);
      this.countryCities = response["cities"];
    },
    setCityId(id) {
      this.cityId = id;
    },
    async getCityProvinces(event) {
      const id = event.target.value;
      this.setCityId(id);
      const response = await countryServices.getCityProvinces(id);
      this.cityProvinces = response["provinces"];
    },
    goToEditCountry() {
      if (this.countryId == 0) {
        console.log("0");
        return;
      }
      this.$router.push(`/edit-country/${this.countryId}`);
    },
  },
  async mounted() {
    this.isLoading = true;
    await this.getCountries();
    this.isLoading = false;
  },
};
