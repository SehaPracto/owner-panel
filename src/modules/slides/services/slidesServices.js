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

  async createSlide(name, duration, description, contact, link, img) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("duration", duration);
    formData.append("description", description);
    formData.append("contact", contact);
    formData.append("link", link);
    formData.append("img", img);
    const response = await axiosProvider.postRequest("create-slide/", formData);
    return response;
  }

  async updateSlide(id, name, duration, description, contact, link, img) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("duration", duration);
    formData.append("description", description);
    formData.append("contact", contact);
    formData.append("link", link);
    formData.append("img", img);
    const response = await axiosProvider.postRequest(
      `update-slide/${id}`,
      formData
    );
    return response;
  }
}

const slidesServices = new SlidesServices();

export default slidesServices;