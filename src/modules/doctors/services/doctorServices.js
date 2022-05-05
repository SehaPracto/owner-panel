import axiosProvider from "@/data/providers/axiosProvider";
import store from "@/store/index";
class DoctorServices {
  async getActiveDoctors() {
    const response = await axiosProvider.getRequest(
      "active-doctors",
      store.state.token
    );
    return response;
  }

  async getPendingApplications() {
    const response = await axiosProvider.getRequest(
      "pending-doctors",
      store.state.token
    );
    return response;
  }
}

const doctorServices = new DoctorServices();

export default doctorServices;
