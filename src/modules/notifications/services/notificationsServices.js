import axiosProvider from "@/data/providers/axiosProvider";
import store from "@/store/index";
class NotificationsServices {
  async sendNotification(title, context) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("context", context);
    const response = await axiosProvider.postRequest(
      "send-notification",
      formData,
      store.state.token
    );
    return response;
  }
}

const notificationsServices = new NotificationsServices();

export default notificationsServices;
