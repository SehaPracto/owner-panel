import adminProfileServices from "../services/adminProfileServices";

export default {
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      errorMsg: "",
    };
  },
  methods: {
    async changePassword() {
      if (
        this.oldPassword == "" ||
        this.newPassword == "" ||
        this.confirmNewPassword == ""
      ) {
        this.errorMsg = "Please fill all fields";
      } else {
      }
    },
  },
};
