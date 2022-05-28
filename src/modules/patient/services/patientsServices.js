import axiosProvider from "@/data/providers/axiosProvider";
import store from "@/store";

class PatientsServices {
  async getAllPatientsService() {
    const response = await axiosProvider.getRequest(
      "get-all-patients",
      store.state.token
    );
    return response;
  }
  async getPatientProfile(id) {
    const response = await axiosProvider.getRequest(
      `get-patient/${id}`,
      store.state.token
    );
    return response;
  }
  async sendNotificationToPatient(id, title, context) {
    const formData = new FormData();
    formData.append("user_id", id);
    formData.append("title", title);
    formData.append("context", context);
    const response = await axiosProvider.postRequest(
      "send-notification-to-patient",
      formData,
      store.state.token
    );
    return response;
  }
}

const patientsServices = new PatientsServices();

export default patientsServices;
