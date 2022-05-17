import axiosProvider from "@/data/providers/axiosProvider";
import store from "@/store/index";
class NotificationsServices {
  async sendNotificationToAll(title, context) {
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
  async sendNotificationToUsers(title, context) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("context", context);
    const response = await axiosProvider.postRequest(
      "send-notification-all-user",
      formData,
      store.state.token
    );
    return response;
  }
  async sendNotificationToDoctors(title, context) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("context", context);
    const response = await axiosProvider.postRequest(
      "send-notification-all-doctor",
      formData,
      store.state.token
    );
    return response;
  }
  async sendNotificationToHcps(title, context) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("context", context);
    const response = await axiosProvider.postRequest(
      "send-notification-all-hcp",
      formData,
      store.state.token
    );
    return response;
  }
}

const notificationsServices = new NotificationsServices();

export default notificationsServices;
