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
  async changePassword(oldPassword, newPassword) {
    const formData = new FormData();
    formData.append("password", newPassword);
    formData.append("old_password", oldPassword);
    const response = await axiosProvider.postRequest(
      "admin-change-password",
      formData,
      store.state.token
    );
    return response;
  }
}

const adminProfileServices = new AdminProfileServices();

export default adminProfileServices;
