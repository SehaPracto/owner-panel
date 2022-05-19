import patientsServices from "../services/patientsServices";
import Loader from "@/components/Loader.vue";

export default {
  components: { Loader },
  data() {
    return {
      isLoading: false,
      isShowNotifModal: false,
      activeTab: 0,
      patient: [],
      doctorAppointments: [],
      hcpAppointments: [],
      patientId: 0,
      notifTitle: "",
      notifContext: "",
    };
  },
  methods: {
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },
    toggleIsShowNotifModal() {
      this.isShowNotifModal = !this.isShowNotifModal;
    },
    getPatientIdFromUrlParam() {
      return this.$route.params.id;
    },
    setPatientId() {
      this.patientId = this.getPatientIdFromUrlParam();
    },
    setActiveTab(id) {
      this.activeTab = id;
    },
    async sendNotificationToPatient() {
      const response = await patientsServices.sendNotificationToPatient(
        this.patient.id,
        this.notifTitle,
        this.notifContext
      );
      if (this.isShowNotifModal) {
        this.toggleIsShowNotifModal();
      }
    },
    async getPatientProfile() {
      this.toggleIsLoading();
      this.setPatientId();
      const response = await patientsServices.getPatientProfile(this.patientId);
      this.patient = response["patient"];
      this.doctorAppointments = response["patient"]["appointment"];
      this.hcpAppointments = response["patient"]["hcp_appointment"];
      console.log(response);
      this.toggleIsLoading();
    },
  },
  async mounted() {
    await this.getPatientProfile();
  },
};
