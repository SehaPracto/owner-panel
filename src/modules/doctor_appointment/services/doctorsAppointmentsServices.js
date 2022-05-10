import axiosProvider from "@/data/providers/axiosProvider";
import store from "@/store/index";
class DoctorsAppointmentsServices {
  async getPendingAppointments() {
    const response = await axiosProvider.getRequest(
      "doctors/pending-appointments",
      store.state.token
    );
    return response;
  }

  async getApprovedAppointments() {
    const response = await axiosProvider.getRequest(
      "doctors/approved-appointments",
      store.state.token
    );
    return response;
  }
}

const doctorsAppointmentsServices = new DoctorsAppointmentsServices();

export default doctorsAppointmentsServices;
