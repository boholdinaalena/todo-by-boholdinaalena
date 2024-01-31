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
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        leaveClass: "animate__animated animate__fadeOutRight"
      }
    },
    {
      path: "/people",
      name: "people",
      component: PeopleView,
      meta: {
        enterClass: "animate__animated animate__fadeInRight",
        leaveClass: "animate__animated animate__fadeOutLeft"
      }
    },
  ],
});

export default router
