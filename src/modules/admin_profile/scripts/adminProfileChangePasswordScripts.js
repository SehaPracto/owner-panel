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
      this.errorMsg = "";
      if (
        this.oldPassword == "" ||
        this.newPassword == "" ||
        this.confirmNewPassword == ""
      ) {
        this.errorMsg = "Please fill all fields";
      } else if (this.newPassword !== this.confirmNewPassword) {
        this.errorMsg = "New password and confirm password do no match";
      } else {
        const response = await adminProfileServices.changePassword(
          this.oldPassword,
          this.newPassword
        );
        if (response["error"]) {
          this.errorMsg = response["error"];
        } else {
          this.errorMsg = "Password changed succefully";
        }
      }
    },
  },
};
