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

  async getDoctorProfile(id) {
    const response = await axiosProvider.getRequest(
      `doctor/${id}`,
      store.state.token
    );
    return response;
  }

  async sendNotificationToDoctor(id, title, context) {
    const formData = new FormData();
    formData.append("doctor_id", id);
    formData.append("title", title);
    formData.append("context", context);
    const response = await axiosProvider.postRequest(
      "send-notification-to-doctor",
      formData,
      store.state.token
    );
    return response;
  }
}

const doctorServices = new DoctorServices();

export default doctorServices;
