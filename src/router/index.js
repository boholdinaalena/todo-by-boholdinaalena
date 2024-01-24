import { createRouter, createWebHistory } from "vue-router";
import HomeViews from "../views/HomeView.vue";
import SecondView from "../views/SecondView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViews,
    },
    {
      path: "/second",
      name: "second",
      component: SecondView,
    },
  ],
});

export default router
