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
  async toggleHcpActiveState(id) {
    const formData = new FormData();
    formData.append("hcp_id", id);
    const response = await axiosProvider.postRequest(
      "toggle-hcp-active-state",
      formData,
      store.state.token
    );
    return response;
  }
  async updateHcpProfile(hcp) {
    const formData = new FormData();
    formData.append("doctor_id", hcp.id);
    formData.append("first_name", hcp.first_name);
    formData.append("last_name", hcp.last_name);
    formData.append("email", hcp.email);
    formData.append("phone", hcp.phone);
    formData.append("city_id", hcp.city_id);
    formData.append("adress", hcp.adress);
    formData.append("gender", hcp.gender);
    formData.append("waiting_time", hcp.waiting_time);
    formData.append("examination_fee", hcp.examination_fee);
    const response = await axiosProvider.postRequest(
      "update-hcp-profile",
      formData,
      store.state.token
    );
    return response;
  }
  async createHcpScheduleService(id) {
    const formData = new FormData();
    formData.append("hcp_id", id);
    const response = await axiosProvider.postRequest(
      "create-hcp-schedule",
      formData,
      store.state.token
    );
    return response;
  }
}

const hcpsServices = new HcpsServices();

export default hcpsServices;
