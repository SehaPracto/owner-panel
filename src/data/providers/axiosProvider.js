import axios from "axios";

class AxiosProvider {
  baseUrl = "http://192.168.9.130:3000/adminapi";
  // baseUrl = "https://app.sehapracto.com/adminapi";
  // baseUrl = "http://10.106.13.212:3000/adminapi";

  async getRequest(path, token = "") {
    try {
      const response = await axios({
        url: `${this.baseUrl}/${path}`,
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response["data"];
    } catch (error) {
      return error;
    }
  }

  async postRequest(path, data, token = "") {
    try {
      const response = await axios({
        url: `${this.baseUrl}/${path}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        data: data,
      });
      return response["data"];
    } catch (error) {
      return error;
    }
  }
}

const axiosProvider = new AxiosProvider();

export default axiosProvider;
