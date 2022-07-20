import axiosProvider from "@/data/providers/axiosProvider";
import store from "@/store/index";

class SlidesServices {
  async getAllSlides() {
    const response = await axiosProvider.getRequest(
      "all-slides",
      store.state.token
    );
    return response;
  }

  async getSlide(id) {
    const response = await axiosProvider.getRequest(
      `slide/${id}`,
      store.state.token
    );
    return response;
  }

  async createSlide(name, duration, description, contact, link, img) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("duration", duration);
    formData.append("description", description);
    formData.append("contact", contact);
    formData.append("link", link);
    if (img != null) {
      formData.append("img", img);
    }
    const response = await axiosProvider.postRequest(
      "create-slide",
      formData,
      store.state.token
    );
    return response;
  }

  async updateSlide(slide) {
    const formData = new FormData();
    formData.append("name", slide.name);
    formData.append("duration", slide.duration);
    formData.append("description", slide.description);
    formData.append("contact", slide.contact);
    formData.append("link", slide.link);
    formData.append("img", slide.img);
    formData.append("client_name", slide.client_name);
    formData.append("client_adress", slide.client_adress);
    formData.append("fb_link", slide.fb_link);
    formData.append("ig_link", slide.ig_link);
    formData.append("twitter_link", slide.twitter_link);
    formData.append("whatsapp_link", slide.whatsapp_link);
    formData.append("video_link", slide.video_link);
    const response = await axiosProvider.postRequest(
      `update-slide/${slide.id}`,
      formData,
      store.state.token
    );
    return response;
  }

  async uploadSlideImageService(id, file) {
    const formData = new FormData();
    formData.append("slide_id", id);
    formData.append("img", file);
    const response = await axiosProvider.postRequest(
      "add-image-to-slide",
      formData,
      store.state.token
    );
    return response;
  }

  async uploadSlideOfferService(id, name, file, price) {
    const formData = new FormData();
    formData.append("slide_id", id);
    formData.append("name", name);
    formData.append("img", file);
    formData.append("price", price);
    const response = await axiosProvider.postRequest(
      "add-service-to-slide",
      formData,
      store.state.token
    );
    return response;
  }
}

const slidesServices = new SlidesServices();

export default slidesServices;
