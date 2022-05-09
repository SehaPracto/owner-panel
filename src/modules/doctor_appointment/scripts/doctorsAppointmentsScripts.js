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
    toggleApprovedTab() {
      this.tab = "approved";
    },
    togglePendingTab() {
      this.tab = "pending";
    },
  },

  async mounted() {},
};
