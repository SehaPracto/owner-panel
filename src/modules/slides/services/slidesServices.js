import axiosProvider from "@/data/providers/axiosProvider";

class SlidesServices {
  async getAllSlides() {
    const response = await axiosProvider.getRequest("all-slides", {});
    return response;
  }
}

const slidesServices = new SlidesServices();

export default slidesServices;
