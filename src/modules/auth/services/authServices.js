import axiosProvider from "@/data/providers/axiosProvider";

class AuthServices {
  async login(email, password) {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const response = await axiosProvider.postRequest("login", formData, {});
    return response;
  }
}

const authServices = new AuthServices();

export default authServices;
