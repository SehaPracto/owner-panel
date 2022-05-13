import axiosProvider from "@/data/providers/axiosProvider";
import store from "@/store";
class AdminProfileServices {
  async getAdminProfile() {
    const response = await axiosProvider.getRequest(
      "get-admin",
      store.state.token
    );
    return response;
  }
  async updateAdminProfile(name, img) {
    const formData = new FormData();
    formData.append("name", name);
    if (img) {
      formData.append("profile_img", img);
    }
    const response = await axiosProvider.postRequest(
      "update-admin-profile",
      formData,
      store.state.token
    );
    return response;
  }
}

const adminProfileServices = new AdminProfileServices();

export default adminProfileServices;
