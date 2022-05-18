import hcpsServices from "../services/hcpsServices";
import Loader from "@/components/Loader.vue";

export default {
  components: { Loader },
  data() {
    return {
      isLoading: false,
      isShowNotifModal: false,
      activeTab: 0,
      hcp: [],
      medicalSpecialty: [],
      medicalDegree: [],
      appointment: [],
      workingHour: [],
      notifTitle: "",
      notifContext: "",
    };
  },
  methods: {
    setActiveTab(tabNumber) {
      this.activeTab = tabNumber;
    },
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },
    toggleIsShowNotifModal() {
      this.isShowNotifModal = !this.isShowNotifModal;
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
    async sendNotificationToHcp() {
      const response = hcpsServices.sendNotificationToHcp(
        this.hcp.id,
        this.notifTitle,
        this.notifContext
      );
      if (this.isShowNotifModal) {
        this.toggleIsShowNotifModal();
      }
    },
    async toggleHcpActiveState() {
      const response = await hcpsServices.toggleHcpActiveState(this.hcp.id);
      if (response["status"] == 1) {
        this.hcp.is_active = !this.hcp.is_active;
      }
    },
  },
  async mounted() {
    await this.getDoctorProfile();
  },
};
