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
}

const hcpsServices = new HcpsServices();

export default hcpsServices;
