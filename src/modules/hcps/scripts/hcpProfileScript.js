import hcpsServices from "../services/hcpsServices";
import Loader from "@/components/Loader.vue";
import countryServices from "@/modules/countries/services/countryServices";

export default {
  components: { Loader },
  data() {
    return {
      isShowEditModal: false,
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
      cities: [],
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
    toggleIsShowEditModal() {
      this.isShowEditModal = !this.isShowEditModal;
    },
    getHcpIdFromUrlParam() {
      return this.$route.params.id;
    },
    handleCityChange(event) {
      this.hcp.city_id = event.target.value;
    },
    async getHcpProfile() {
      this.setActiveTab(0);
      const id = this.getHcpIdFromUrlParam();
      const response = await hcpsServices.getHcpProfile(id);
      console.log(response);
      this.hcp = response["hcp"];
      this.medicalSpecialty = response["hcp"]["specialty"];
      this.medicalDegree = response["hcp"]["degree"];
      this.appointment = response["hcp"]["hcp_appointment"];
      this.workingHour = response["hcp"]["hcp_working_hour"];
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
    async getCities() {
      const response = await countryServices.getCountryCities(
        this.hcp.country_id
      );
      this.cities = response["cities"];
    },
    async updateHcp() {
      const response = await hcpsServices.updateHcpProfile(this.hcp);
      console.log(response);
    },
    async createHcpSchedule() {
      const response = await hcpsServices.createHcpScheduleService(this.hcp.id);
      this.getHcpProfile();
      console.log(response);
    },
  },
  async mounted() {
    this.toggleIsLoading();
    await this.getHcpProfile();
    await this.getCities();
    this.toggleIsLoading();
  },
};
