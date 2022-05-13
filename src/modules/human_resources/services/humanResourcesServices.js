import axiosProvider from "@/data/providers/axiosProvider";
import store from "@/store";

class HumanResourcesService {
  async getAllDepartments() {
    const response = await axiosProvider.getRequest(
      "get-all-departments",
      store.state.token
    );
    return response;
  }

  async getDepartmentAdmins(id) {
    const response = await axiosProvider.getRequest(
      `get-department-admins/${id}`,
      store.state.token
    );
    return response;
  }

  async createDepartment(name) {
    const formData = new FormData();
    formData.append("name", name);
    const response = await axiosProvider.postRequest(
      "create-department",
      formData,
      store.state.token
    );
    return response;
  }
}

const humanResourcesServices = new HumanResourcesService();
export default humanResourcesServices;
