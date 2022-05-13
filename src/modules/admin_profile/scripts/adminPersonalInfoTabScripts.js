import adminProfileServices from "../services/adminProfileServices";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: false,
      newImg: null,
    };
  },
  methods: {
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },
    openFilePicker() {
      this.$refs["img-picker"].click();
    },
    handleImgPick(event) {
      this.$refs["profile-img"].src = URL.createObjectURL(
        event.target.files[0]
      );
    },
    async updateProfileInfo() {},
  },
  async mounted() {},
};
