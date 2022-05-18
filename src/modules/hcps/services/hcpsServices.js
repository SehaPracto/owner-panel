import axiosProvider from "@/data/providers/axiosProvider";
import store from "@/store/index";

class HcpsServices {
  async getActiveHcps() {
    const response = await axiosProvider.getRequest(
      "active-hcps",
      store.state.token
    );
    return response;
  }
  async getPendingApplications() {
    const response = await axiosProvider.getRequest(
      "pending-hcps",
      store.state.token
    );
    return response;
  }
  async getHcpProfile(id) {
    const response = await axiosProvider.getRequest(
      `hcp/${id}`,
      store.state.token
    );
    return response;
  }
  async sendNotificationToHcp(id, title, context) {
    const formData = new FormData();
    formData.append("hcp_id", id);
    formData.append("title", title);
    formData.append("context", context);
    const response = await axiosProvider.postRequest(
      "send-notification-to-hcp",
      formData,
      store.state.token
    );
    return response;
  }
}

const hcpsServices = new HcpsServices();

export default hcpsServices;
