import axios from "axios";

class AxiosProvider {
  constructor(baseUrl) {
    baseUrl = "https://app.sehapracto.com/api";
  }

  async getRequest(path, token = "") {
    try {
      const response = await axios({
        url: `${this.baseUrl}/${path}`,
        method: "GET",
        headers: {
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
