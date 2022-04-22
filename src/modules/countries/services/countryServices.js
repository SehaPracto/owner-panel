import axiosProvider from "@/data/providers/axiosProvider";

class CountryServices {
  async getAllCountries() {
    const response = await axiosProvider.getRequest("get-all-countries");
    console.log(response);
    return response;
  }
}

const countryServices = new CountryServices();
export default countryServices;
