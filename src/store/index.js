import { createStore } from "vuex";

export default createStore({
  state: {
    isLogin: localStorage.getItem("isLogin") ?? false,
    token: localStorage.getItem("token") ?? "",
    admin: localStorage.getItem("admin") ?? {},
  },
  getters: {
    getIsLogin: (state) => state.isLogin,
    getToken: (state) => state.token,
    getAdmin: (state) => state.admin,
  },
  mutations: {
    login(state, token) {
      localStorage.setItem("isLogin", true);
      localStorage.setItem("token", token);
      state.isLogin = localStorage.getItem("isLogin") ?? false;
      state.token = localStorage.getItem("token") ?? "";
    },
    setAdmin(state, admin) {
      localStorage.setItem("admin", JSON.stringify(admin));
      state.admin = localStorage.getItem("admin");
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
