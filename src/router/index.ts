import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import SettingsView from "@/views/SettingsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/settings",
      component: SettingsView,
    },
    {
      path: "/about",
      component: AboutView,
    },
  ],
});

export default router;
