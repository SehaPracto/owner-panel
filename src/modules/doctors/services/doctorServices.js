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

  async toggleDoctorActiveState(id) {
    const formData = new FormData();
    formData.append("doctor_id", id);
    const response = await axiosProvider.postRequest(
      "toggle-doctor-active-state",
      formData,
      store.state.token
    );
    return response;
  }

  async updateDoctorProfile(doctor) {
    const formData = new FormData();
    formData.append("doctor_id", doctor.id);
    formData.append("first_name", doctor.first_name);
    formData.append("last_name", doctor.last_name);
    formData.append("email", doctor.email);
    formData.append("phone", doctor.phone);
    formData.append("city_id", doctor.city_id);
    formData.append("adress", doctor.adress);
    formData.append("gender", doctor.gender);
    formData.append("waiting_time", doctor.waiting_time);
    formData.append("examination_fee", doctor.examination_fee);
    const response = await axiosProvider.postRequest(
      "update-doctor-profile",
      formData,
      store.state.token
    );
    return response;
  }

  async createDoctorScheduleService(id) {
    const formData = new FormData();
    formData.append("doctor_id", id);
    const response = await axiosProvider.postRequest(
      "create-doctor-schedule",
      formData,
      store.state.token
    );
    return response;
  }
}

const doctorServices = new DoctorServices();

export default doctorServices;
