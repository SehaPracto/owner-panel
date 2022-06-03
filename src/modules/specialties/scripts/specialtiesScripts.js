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
    handleSpecialtyChange() {
      this.currentView = this.$refs.specialty.value;
      console.log(this.currentView);
      if (this.currentView == "hcp") {
        this.toggleHcpView();
      } else {
        this.toggleDoctorView();
      }
    },
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },
    async toggleDoctorView() {
      this.currentView = "doctor";
      await this.getAllDoctorSpecialties();
    },
    async toggleHcpView() {
      this.currentView = "hcp";
      await this.getAllHcpSpecialties();
    },
    async getAllDoctorSpecialties() {
      this.toggleIsLoading();
      const response = await specialtiesServices.getDoctorSpecialties();
      this.specialties = response["specialties"];
      console.log(response["specialties"]);
      this.toggleIsLoading();
    },
    async getAllHcpSpecialties() {
      this.toggleIsLoading();
      const response = await specialtiesServices.getHcpSpecialties();
      this.specialties = response["specialties"];
      this.toggleIsLoading();
    },
  },
  async mounted() {
    await this.toggleDoctorView();
  },
};
