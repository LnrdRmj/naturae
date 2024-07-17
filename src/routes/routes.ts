import { RouteRecordRaw } from "vue-router";
import LandingPage from "../components/landingPage/LandingPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: LandingPage,
  },
];

import { createWebHistory, createRouter } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
