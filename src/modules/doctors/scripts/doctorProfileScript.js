import doctorServices from "../services/doctorServices";
import Loader from "@/components/Loader.vue";
import countryServices from "@/modules/countries/services/countryServices";

export default {
  components: { Loader },
  data() {
    return {
      isLoading: false,
      isShowNotifModal: false,
      isShowEditModal: false,
      activeTab: 0,
      doctor: [],
      medicalSpecialty: [],
      medicalDegree: [],
      doctorWorkLocation: [],
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
    getDoctorIdFromUrlParam() {
      return this.$route.params.id;
    },
    handleCityChange(event) {
      this.doctor.city_id = event.target.value;
    },
    async getDoctorProfile() {
      this.setActiveTab(0);
      const id = this.getDoctorIdFromUrlParam();
      const response = await doctorServices.getDoctorProfile(id);
      this.doctor = response["doctor"];
      this.medicalSpecialty = response["doctor"]["medical_specialty"];
      this.medicalDegree = response["doctor"]["medical_degree"];
      this.doctorWorkLocation = response["doctor"]["doctor_work_location"];
      this.appointment = response["doctor"]["appointment"];
      this.workingHour = response["doctor"]["working_hour"];
    },
    async sendNotificationToDoctor() {
      const response = doctorServices.sendNotificationToDoctor(
        this.doctor.id,
        this.notifTitle,
        this.notifContext
      );
      if (this.isShowNotifModal) {
        this.toggleIsShowNotifModal();
      }
    },
    async toggleDoctorActiveState() {
      const response = await doctorServices.toggleDoctorActiveState(
        this.doctor.id
      );
      if (response["status"] == 1) {
        this.doctor.is_active = !this.doctor.is_active;
      }
    },
    async getCities() {
      const response = await countryServices.getCountryCities(
        this.doctor.country_id
      );
      this.cities = response["cities"];
    },
    async updateDoctor() {
      const response = await doctorServices.updateDoctorProfile(this.doctor);
      console.log(response);
    },
    async createDoctorSchedule() {
      const response = await doctorServices.createDoctorScheduleService(
        this.doctor.id
      );
      this.getDoctorProfile();
      console.log(response);
    },
  },
  async mounted() {
    this.toggleIsLoading();
    await this.getDoctorProfile();
    await this.getCities();
    this.toggleIsLoading();
  },
};
