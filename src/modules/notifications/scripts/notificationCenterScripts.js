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
    setType() {},
    async sendNotification() {
      const response = notificationsServices.sendNotification(
        this.title,
        this.context
      );
    },
  },
};
