import axiosProvider from "@/data/providers/axiosProvider";

class HcpsServices {
  async getActiveHcps() {
    const response = await axiosProvider.getRequest("active-hcps");
    return response;
  }
  async getPendingApplications() {
    const response = await axiosProvider.getRequest("pending-hcps");
    return response;
  }
}

const hcpsServices = new HcpsServices();

export default hcpsServices;
