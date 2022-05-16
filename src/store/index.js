import { createStore } from "vuex";

export default createStore({
  state: {
    isLogin: localStorage.getItem("isLogin") ?? false,
    token: localStorage.getItem("token") ?? "",
    admin: localStorage.getItem("admin"),
  },
  getters: {
    getIsLogin: (state) => state.isLogin,
    getToken: (state) => state.token,
  },
  mutations: {
    login(state, token) {
      localStorage.setItem("isLogin", true);
      localStorage.setItem("token", token);
      state.isLogin = localStorage.getItem("isLogin") ?? false;
      state.token = localStorage.getItem("token") ?? "";
    },
    logout(state) {
      state.token = "";
      state.isLogin = false;
      state.admin = {};
      localStorage.setItem("isLogin", false);
      localStorage.setItem("token", "");
      localStorage.setItem("admin", "");
    },
  },
  actions: {},
  modules: {},
});
