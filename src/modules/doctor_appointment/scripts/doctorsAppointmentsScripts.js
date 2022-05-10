import doctorsAppointmentsServices from "../services/doctorsAppointmentsServices";
import Loader from "@/components/Loader.vue";

export default {
  components: { Loader },
  data() {
    return {
      isLoading: false,
      tab: "pending",
      appointments: [],
    };
  },
  methods: {
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },
    async toggleApprovedTab() {
      this.toggleIsLoading();
      this.tab = "approved";
      const response =
        await doctorsAppointmentsServices.getApprovedAppointments();
      console.log(response);
      this.appointments = response["appointments"];
      this.toggleIsLoading();
    },
    async togglePendingTab() {
      this.toggleIsLoading();
      this.tab = "pending";
      const response =
        await doctorsAppointmentsServices.getPendingAppointments();
      console.log(response);
      this.appointments = response["appointments"];
      this.toggleIsLoading();
    },
  },

  async mounted() {
    await this.togglePendingTab();
  },
};
