import adminProfileServices from "../services/adminProfileServices";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: false,
      isUpdating: false,
      admin: [],
      newImg: null,
      updateMsg: "",
      file: null,
    };
  },
  methods: {
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },
    toggleIsUpdating() {
      this.isUpdating = !this.isUpdating;
    },
    openFilePicker() {
      this.$refs["img-picker"].click();
    },
    handleImgPick(event) {
      this.$refs["profile-img"].src = URL.createObjectURL(
        event.target.files[0]
      );
      this.file = event.target.files[0];
    },
    async updateProfileInfo() {
      this.updateMsg = "";
      if (this.admin.name.trim()) {
        this.toggleIsUpdating();
        const response = await adminProfileServices.updateAdminProfile(
          this.admin.name,
          this.file
        );
        this.toggleIsUpdating();
        if (response["status"] == 1) {
          this.updateMsg = "Update successful";
        } else {
          this.updateMsg = "Update Failed.";
        }
      } else {
        this.updateMsg = "Please fill all fields";
      }
    },
    async getAdminProfile() {
      this.toggleIsLoading();
      const response = await adminProfileServices.getAdminProfile();
      this.admin = response["admin"];
      this.toggleIsLoading();
    },
  },
  async mounted() {
    await this.getAdminProfile();
  },
};
