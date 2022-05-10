import axiosProvider from "@/data/providers/axiosProvider";
import store from "@/store/index";
class HcpAppointmentsServices {
  async getPendingAppointments() {
    const response = await axiosProvider.getRequest(
      "hcps/pending-appointments",
      store.state.token
    );
    return response;
  }

  async getApprovedAppointments() {
    const response = await axiosProvider.getRequest(
      "hcps/approved-appointments",
      store.state.token
    );
    return response;
  }
}

const hcpAppointmentsServices = new HcpAppointmentsServices();

export default hcpAppointmentsServices;
