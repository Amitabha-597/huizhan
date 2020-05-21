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
