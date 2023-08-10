import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "@/views/Home.vue";

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }), // 路由跳转后滚动到顶部
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      name: "login",
      path: "/login",
      component: Login,
    },
    {
      name: "index",
      path: "/index",
      component: Home,
    },
  ],
});

export default router;
