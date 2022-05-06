import doctorServices from "../services/doctorServices";
import Loader from "@/components/Loader.vue";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: false,
      doctors: [],
      tab: "active",
    };
  },
  methods: {
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },

    goToDoctorProfile(id) {
      this.$router.push(`/doctor/${id}`);
    },

    async toggleActiveTab() {
      this.toggleIsLoading();
      this.tab = "active";
      const response = await doctorServices.getActiveDoctors();
      this.doctors = response["doctors"];
      this.toggleIsLoading();
    },

    async togglePendingTab() {
      this.toggleIsLoading();
      this.tab = "pending";
      const response = await doctorServices.getPendingApplications();
      this.doctors = response["doctors"];
      this.toggleIsLoading();
    },

    async onPageOpen() {
      this.toggleActiveTab();
    },
  },
  mounted() {
    this.onPageOpen();
  },
};
