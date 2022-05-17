import notificationsServices from "../services/notificationsServices";

export default {
  data() {
    return {
      isSending: false,
      target: "",
      type: "general",
      title: "",
      context: "",
    };
  },
  methods: {
    toggleIsSending() {
      this.isSending = !this.isSending;
    },
    handleSubmitNotification() {
      switch (this.type) {
        case "general":
          this.sendNotificationToAll;
          break;
        case "users":
          this.sendNotificationToUsers;
          break;
        case "drs":
          this.sendNotificationToDoctors;
          break;
        case "hcps":
          this.sendNotificationToHcps;
          break;
      }
    },
    setType(e) {
      this.type = e.target.value;
      console.log(this.type);
    },
    async sendNotificationToAll() {
      const response = notificationsServices.sendNotificationToAll(
        this.title,
        this.context
      );
    },
    async sendNotificationToUsers() {
      const response = notificationsServices.sendNotificationToUsers(
        this.title,
        this.context
      );
    },
    async sendNotificationToDoctors() {
      const response = notificationsServices.sendNotificationToDoctors(
        this.title,
        this.context
      );
    },
    async sendNotificationToHcps() {
      const response = notificationsServices.sendNotificationToHcps(
        this.title,
        this.context
      );
    },
  },
};
