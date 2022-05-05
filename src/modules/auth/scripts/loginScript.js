import authServices from "../services/authServices";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorText: "",
    };
  },
  methods: {
    async login() {
      const response = await authServices.login(this.email, this.password);
      if (response["message"] == "success") {
        await this.$store.commit("login", response["token"]);
        console.log(localStorage.getItem("token"));
        this.$router.push({ path: "/home" });
        console.log("here");
      } else {
        if (response["error"] == "invalid password") {
          this.errorText = "Invalid password";
        } else {
          this.errorText = "User not found";
        }
      }
    },
  },
};
