import hcpsServices from "../services/hcpsServices";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Loader,
  },
  data() {
    return {
      tab: "active",
      isLoading: false,
      hcps: [],
    };
  },
  methods: {
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },

    async toggleActiveTab() {
      this.toggleIsLoading();
      this.tab = "active";
      const response = await hcpsServices.getActiveHcps();
      this.hcps = response["hcps"];
      this.toggleIsLoading();
    },

    async togglePendingTab() {
      this.toggleIsLoading();
      this.tab = "pending";
      const response = await hcpsServices.getPendingApplications();
      this.hcps = response["hcps"];
      this.toggleIsLoading();
    },

    async onPageOpen() {
      await this.toggleActiveTab();
    },
  },
  mounted() {
    this.onPageOpen();
  },
};
