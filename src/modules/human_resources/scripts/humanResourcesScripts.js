import humanResourcesServices from "../services/humanResourcesServices";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: false,
      isShowCreateDepartmentModal: false,
      isCreatingDepartmant: false,
      departments: [],
      departmentId: "",
      admins: [],
      departmentName: "",
    };
  },
  methods: {
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },
    async handleChange() {
      this.toggleIsLoading();
      this.departmentId = this.$refs.department.value;
      await this.getDepartmentAdmins(this.departmentId);
      this.toggleIsLoading();
    },
    toggleIsShowCreateDepartmentModal(isShow) {
      this.isShowCreateDepartmentModal = isShow;
    },
    async getAllDepartments() {
      const response = await humanResourcesServices.getAllDepartments();
      this.departments = response["departments"];
    },
    async getDepartmentAdmins(id) {
      if (id == 0) {
        return;
      }
      const response = await humanResourcesServices.getDepartmentAdmins(id);
      this.admins = response["admins"];
    },
    async createDepartment() {
      const response = await humanResourcesServices.createDepartment(
        this.departmentName
      );
      this.toggleIsShowCreateDepartmentModal(false);
      this.departments.push(response["department"]);
    },
  },
  async mounted() {
    await this.getAllDepartments();
  },
};
