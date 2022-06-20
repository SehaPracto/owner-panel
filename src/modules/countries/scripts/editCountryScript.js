import countryServices from "../services/countryServices";
import Loader from "@/components/Loader.vue";
import InnerPagesTopBar from "@/components/InnerPagesTopBar.vue";

export default {
  components: { Loader, InnerPagesTopBar },
  data() {
    return {
      isLoading: false,
      isAddCity: false,
      isAddProvince: false,
      cities: [],
      cityId: 0,
      countryId: 0,
      currentTab: "add-city",
      cityName: "",
      cityNameAr: "",
      provinceName: "",
      provinceNameAr: "",
    };
  },
  methods: {
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },
    toggleIsAddCity() {
      this.isAddCity = !this.isAddCity;
    },
    toggleIsAddProvince() {
      this.isAddProvince = !this.isAddProvince;
    },
    getIdFromParam() {
      this.countryId = this.$route.params.id;
      console.log(this.countryId);
    },
    switchTabs(tabName) {
      this.currentTab = tabName;
    },
    setCity(event) {
      this.cityId = event.target.value;
      console.log(this.cityId);
    },
    async addCityToCountry() {
      this.toggleIsAddCity();
      const response = await countryServices.addCity(
        this.cityName,
        this.cityNameAr,
        this.countryId
      );
      this.toggleIsAddCity();
    },
    async addProvinceToCity() {
      this.isAddProvince();
      const response = await countryServices.addProvince(
        this.provinceName,
        this.provinceNameAr,
        this.cityId
      );
      this.isAddProvince();
    },
    async getCountryCities() {
      const response = await countryServices.getCountryCities(this.countryId);
      this.cities = response["cities"];
    },
  },
  async mounted() {
    this.toggleIsLoading();
    this.getIdFromParam();
    await this.getCountryCities();
    this.toggleIsLoading();
  },
};
