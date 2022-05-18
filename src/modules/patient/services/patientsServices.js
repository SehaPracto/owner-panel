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
}

const patientsServices = new PatientsServices();

export default patientsServices;
