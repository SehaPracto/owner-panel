import axiosProvider from "@/data/providers/axiosProvider";

class DoctorServices {
  async getActiveDoctors() {
    const response = await axiosProvider.getRequest("active-doctors");
    return response;
  }

  async getPendingApplications() {
    const response = await axiosProvider.getRequest("pending-doctors");
    return response;
  }
}

const doctorServices = new DoctorServices();

export default doctorServices;
