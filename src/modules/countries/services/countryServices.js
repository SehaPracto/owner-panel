import axiosProvider from "@/data/providers/axiosProvider";
import store from "@/store/index";
class CountryServices {
  async getAllCountries() {
    const response = await axiosProvider.getRequest(
      "get-all-countries",
      store.state.token
    );
    return response;
  }

  async addCountry(name, nameAr, file) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("name_ar", nameAr);
    formData.append("flag_icon", file);
    const response = await axiosProvider.postRequest(
      "add-country",
      formData,
      store.state.token
    );
    return response;
  }

  async getCountryCities(id) {
    const response = await axiosProvider.getRequest(
      `get-country-cities/${id}`,
      store.state.token
    );
    return response;
  }

  async getCityProvinces(id) {
    const response = await axiosProvider.getRequest(
      `get-city-provinces/${id}`,
      store.state.token
    );
    return response;
  }

  async addCity(name, nameAr, countryID) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("name_ar", nameAr);
    formData.append("country_id", countryID);
    const response = await axiosProvider.postRequest(
      "add-city",
      formData,
      store.state.token
    );
    return response;
  }

  async addProvince(name, nameAr, cityID) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("name_ar", nameAr);
    formData.append("city_id", cityID);
    const response = await axiosProvider.postRequest(
      "add-province",
      formData,
      store.state.token
    );
    return response;
  }
}

const countryServices = new CountryServices();
export default countryServices;
