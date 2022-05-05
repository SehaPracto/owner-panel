import axiosProvider from "@/data/providers/axiosProvider";

class SlidesServices {
  async getAllSlides() {
    const response = await axiosProvider.getRequest("all-slides", {});
    return response;
  }

  async getSlide(id) {
    const response = await axiosProvider.getRequest(`slide/${id}`, {});
    return response;
  }
}

const slidesServices = new SlidesServices();

export default slidesServices;
