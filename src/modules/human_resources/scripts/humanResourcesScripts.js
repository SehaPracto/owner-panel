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
      department: "",
      admin: [],
    };
  },
  methods: {
    toggleIsShowCreateDepartmentModal(isShow) {
      this.isShowCreateDepartmentModal = isShow;
    },
  },
  mounted() {},
};
