import specialtiesServices from "../services/specialtiesServices";
import SpecialtyRow from "../components/SpecialtyRow.vue";
import Loader from "@/components/Loader.vue";

export default {
  components: { Loader, SpecialtyRow },
  data() {
    return {
      isLoading: false,
      currentView: "doctor",
      specialties: [],
    };
  },
  methods: {
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },
    async getAllDoctorSpecialties() {
      const response = await specialtiesServices.getDoctorSpecialties();
      this.specialties = response["specialties"];
      console.log(response);
    },
    async getAllHcpSpecialties() {
      const response = await specialtiesServices.getHcpSpecialties();
      this.specialties = response["specialties"];
    },
  },
  async mounted() {
    await this.getAllDoctorSpecialties();
  },
};
