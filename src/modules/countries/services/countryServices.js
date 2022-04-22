import axiosProvider from "@/data/providers/axiosProvider";

class CountryServices {
  async getAllCountries() {
    const response = await axiosProvider.getRequest("get-all-countries");
    console.log(response);
    return response;
  }

  async addCountry(name, nameAr, file) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("name_ar", nameAr);
    formData.append("flag_icon", file);
    const response = await axiosProvider.postRequest("add-country", formData);
    return response;
  }
}

const countryServices = new CountryServices();
export default countryServices;
