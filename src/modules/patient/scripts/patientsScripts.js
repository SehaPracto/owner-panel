import patientsServices from "../services/patientsServices";
import Loader from "@/components/Loader.vue";

export default {
  components: { Loader },
  data() {
    return {
      isLoading: false,
      patients: [],
    };
  },
  methods: {
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },
    async getAllpatients() {
      this.toggleIsLoading();
      const response = await patientsServices.getAllPatientsService();
      this.patients = response["patients"];
      this.toggleIsLoading();
    },
  },
  async mounted() {
    await this.getAllpatients();
  },
};
