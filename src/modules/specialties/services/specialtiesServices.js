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
}

const specialtiesServices = new SpecialtiesServices();
export default specialtiesServices;
