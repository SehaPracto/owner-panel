import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../modules/auth/views/Login.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../modules/home/views/Home.vue"),
  },
  {
    path: "/slide/:id",
    name: "slide",
    component: () => import("@/modules/slides/components/EditSlide.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
