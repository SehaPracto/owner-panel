import { createRouter, createWebHistory } from "vue-router";
import createStore from "../store/index";

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../modules/auth/views/Login.vue"),
    beforeEnter: (to, from, next) => {
      if (to.name == "login" && createStore.state.token) {
        next("/home");
      } else {
        next();
      }
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../modules/home/views/Home.vue"),
    beforeEnter: (to, from, next) => {
      if (to.name == "home" && !createStore.state.token) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/doctor/:id",
    name: "doctor-profile",
    component: () => import("../modules/doctors/views/DoctorProfile.vue"),
    beforeEnter: (to, from, next) => {
      if (to.name == "doctor-profile" && !createStore.state.token) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/hcp/:id",
    name: "hcp-profile",
    component: () => import("../modules/hcps/views/HcpProfile.vue"),
    beforeEnter: (to, from, next) => {
      if (to.name == "hcp-profile" && !createStore.state.token) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/patient/:id",
    name: "patient-profile",
    component: () => import("../modules/patient/views/PatientProfile.vue"),
    beforeEnter: (to, from, next) => {
      if (to.name == "patient-profile" && !createStore.state.token) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/slide/:id",
    name: "slide",
    component: () => import("@/modules/slides/components/EditSlide.vue"),
    beforeEnter: (to, from, next) => {
      if (to.name == "slide" && !createStore.state.token) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/slide/create",
    name: "createSlide",
    component: () => import("@/modules/slides/views/CreateSlide.vue"),
    beforeEnter: (to, from, next) => {
      const admin = JSON.parse(createStore.getters.getAdmin);
      console.log(admin.can_add_slide);
      if (
        to.name == "createSlide" &&
        (!createStore.state.token || !admin.can_add_slide)
      ) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/profile",
    name: "admin-profile",
    component: () => import("@/modules/admin_profile/views/MyProfile.vue"),
    beforeEnter: (to, from, next) => {
      if (to.name == "admin-profile" && !createStore.state.token) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/doctor-department-services/:id",
    name: "doctor-department-services",
    component: () =>
      import("@/modules/specialties/views/DoctorDepartmentServices.vue"),
    beforeEnter: (to, from, next) => {
      if (to.name == "doctor-department-services" && !createStore.state.token) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/add-admin",
    name: "add-admin",
    component: () => import("@/modules/human_resources/views/AddAdmin.vue"),
    beforeEnter: (to, from, next) => {
      if (to.name == "add-admin" && !createStore.state.token) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/edit-country/:id",
    name: "edit-country",
    component: () => import("@/modules/countries/views/EditCountry.vue"),
    beforeEnter: (to, from, next) => {
      if (to.name == "edit-country" && !createStore.state.token) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/components/PageNotFound.vue"),
    meta: {
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
