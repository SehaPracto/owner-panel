import axiosProvider from "@/data/providers/axiosProvider";
import store from "@/store";

class SpecialtiesServices {
  async getDoctorSpecialties() {
    const response = await axiosProvider.getRequest(
      "get-doctors-specialties",
      store.state.token
    );
    return response;
  }
  async getHcpSpecialties() {
    const response = await axiosProvider.getRequest(
      "get-hcps-specialties",
      store.state.token
    );
    return response;
  }
  async getDoctorDepartmentServices(id) {
    const response = await axiosProvider.getRequest(
      `get-doctor-department-services/${id}`,
      store.state.token
    );
    return response;
  }
  async addDoctorDepartmentService(id, name, nameAr) {
    const formData = new FormData();
    formData.append("medical_specialty_id", id);
    formData.append("name", name);
    formData.append("name_ar", nameAr);

    const response = await axiosProvider.postRequest(
      "add-doctor-department-service",
      formData,
      store.state.token
    );
    return response;
  }
}

const specialtiesServices = new SpecialtiesServices();
export default specialtiesServices;
