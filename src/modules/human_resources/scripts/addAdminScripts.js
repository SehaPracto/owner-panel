import humanResourcesServices from "../services/humanResourcesServices";
import Loader from "@/components/Loader.vue";
import InnerPagesTopBar from "@/components/InnerPagesTopBar.vue";
import countryServices from "@/modules/countries/services/countryServices";

export default {
  components: { Loader, InnerPagesTopBar },
  data() {
    return {
      isCreating: false,
      name: "",
      email: "",
      phone: "",
      password: "",
      errorMsg: "",
      departments: [],
      countries: [],
      departmentId: 0,
      countryId: 0,
    };
  },
  methods: {
    handleDepartmentChange() {
      this.departmentId = this.$refs.department.value;
    },
    handleCountryChange() {
      this.countryId = this.$refs.country.value;
    },
    async getAllDepartments() {
      const response = await humanResourcesServices.getAllDepartments();
      this.departments = response["departments"];
    },

    async getAllCountries() {
      const response = await countryServices.getAllCountries();
      this.countries = response["countries"];
    },

    async addAdmin() {
      const response = await humanResourcesServices.addAdmin(
        this.name,
        this.email,
        this.phone,
        this.password,
        this.departmentId,
        this.countryId
      );
      console.log(response);
    },
  },
  async mounted() {
    this.getAllDepartments();
    this.getAllCountries();
  },
};
