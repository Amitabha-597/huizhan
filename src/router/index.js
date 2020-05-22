import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Login from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    name: "Index",
    component: Index,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/HomeComponents/Home.vue"),
      },
      {
        path: "/order",
        name: "order",
        component: () => import("@/views/HomeComponents/Order.vue"),
      },
      {
        path: "/model",
        name: "model",
        component: () => import("@/views/HomeComponents/Model.vue"),
      },
      {
        path: "/enterprise",
        name: "enterprise",
        component: () => import("@/views/HomeComponents/Enterprise.vue"),
      },
      {
        path: "/factory",
        name: "Factory",
        component: () => import("@/views/HomeComponents/Factory.vue"),
      },
      {
        path: "/news",
        name: "News",
        component: () => import("@/views/HomeComponents/News.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
