import hcpsServices from "../services/hcpsServices";
import Loader from "@/components/Loader.vue";

export default {
  components: { Loader },
  data() {
    return {
      isLoading: false,
      activeTab: 0,
      hcp: [],
      medicalSpecialty: [],
      medicalDegree: [],
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
    getHcpIdFromUrlParam() {
      return this.$route.params.id;
    },
    async getDoctorProfile() {
      this.setActiveTab(0);
      this.toggleIsLoading();
      const id = this.getHcpIdFromUrlParam();
      const response = await hcpsServices.getHcpProfile(id);
      console.log(response);
      this.hcp = response["hcp"];
      this.medicalSpecialty = response["hcp"]["specialty"];
      this.medicalDegree = response["hcp"]["degree"];
      this.appointment = response["hcp"]["hcp_appointment"];
      this.workingHour = response["hcp"]["hcp_working_hour"];
      this.toggleIsLoading();
    },
  },
  async mounted() {
    await this.getDoctorProfile();
  },
};
