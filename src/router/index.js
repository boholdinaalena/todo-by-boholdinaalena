import { createRouter, createWebHistory } from "vue-router";
import HomeViews from "../views/HomeView.vue";
import PeopleView from "../views/PeopleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViews,
    },
    {
      path: "/people",
      name: "people",
      component: PeopleView,
    },
  ],
});

export default router
