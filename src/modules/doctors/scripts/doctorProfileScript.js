import doctorServices from "../services/doctorServices";
import Loader from "@/components/Loader.vue";

export default {
  components: { Loader },
  data() {
    return {
      isLoading: false,
      activeTab: 0,
      doctor: [],
      medicalSpecialty: [],
      medicalDegree: [],
      doctorWorkLocation: [],
      appointment: [],
      workingHour: [],
    };
  },
  methods: {
    setActiveTab(tabNumber) {
      this.activeTab = tabNumber;
    },
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },
    getDoctorIdFromUrlParam() {
      return this.$route.params.id;
    },
    async getDoctorProfile() {
      this.toggleIsLoading();
      const id = this.getDoctorIdFromUrlParam();
      const response = await doctorServices.getDoctorProfile(id);
      console.log(response);
      this.doctor = response["doctor"];
      this.medicalSpecialty = response["doctor"]["medical_specialty"];
      this.medicalDegree = response["doctor"]["medical_degree"];
      this.doctorWorkLocation = response["doctor"]["doctor_work_location"];
      this.appointment = response["doctor"]["appointment"];
      this.workingHour = response["doctor"]["working_hour"];
      this.toggleIsLoading();
    },
  },
  async mounted() {
    await this.getDoctorProfile();
  },
};
