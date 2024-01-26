import { createRouter, createWebHistory } from "vue-router";
import HomeViews from "../views/HomeView.vue";
import PeopleView from "../views/PeopleView.vue";
import PersonView from "../views/PersonView.vue"

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
    {
      path: "/person/:id",
      name: "person",
      component: PersonView,
    }
  ],
});

export default router
