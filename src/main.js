import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/index.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).use(store).use(router).use(Antd).mount("#app");
