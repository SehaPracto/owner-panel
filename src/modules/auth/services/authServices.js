import axiosProvider from "@/data/providers/axiosProvider";

class AuthServices {
  async login(email, password) {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const response = await axiosProvider.postRequest("login", formData, {});
    return response;
  }
  logout() {
    this.$store.commit("logout");
    this.$router.push("/home");
  }
}

const authServices = new AuthServices();

export default authServices;
