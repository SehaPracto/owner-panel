import specialtiesServices from "../services/specialtiesServices";
import Loader from "@/components/Loader.vue";
import InnerPagesTopBar from "@/components/InnerPagesTopBar.vue";

export default {
  components: { Loader, InnerPagesTopBar },
  data() {
    return {
      isLoading: false,
      services: [],
      name: "",
      nameAr: "",
    };
  },
  methods: {
    getDepartmentIdFromParams() {
      return this.$route.params.id;
    },
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },
    async getDoctorDepartmentServices() {
      this.toggleIsLoading();
      const id = this.getDepartmentIdFromParams();
      const response = await specialtiesServices.getDoctorDepartmentServices(
        id
      );
      this.services = response["doctor_department_services"];
      this.toggleIsLoading();
      console.log(response);
    },
    async addDoctorDepartmentService() {
      const id = this.getDepartmentIdFromParams();
      const response = await specialtiesServices.addDoctorDepartmentService(
        id,
        this.name,
        this.nameAr
      );
      if (response["status"] == 1) {
        this.services.push(response["doctor_department_service"]);
      }
    },
  },

  async mounted() {
    await this.getDoctorDepartmentServices();
  },
};
