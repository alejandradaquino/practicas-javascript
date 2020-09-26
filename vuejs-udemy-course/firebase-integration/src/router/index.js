import Vue from "vue";
import VueRouter from "vue-router";
import userService from "../services/userService";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/edit/:id",
    name: "EditTask",
    component: () =>
      import(/* webpackChunkName: "EditTask" */ "../views/EditTask.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/add",
    name: "AddTask",
    component: () =>
      import(/* webpackChunkName: "AddTask" */ "../views/AddTask.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !userService.isLoggedIn()
  ) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});
setTimeout(() => {
  if (
    router.currentRoute.meta.requiresAuth &&
    !userService.isLoggedIn()
  ) {
    router.push({ 
      path: "/login",
      query: { redirect: router.currentRoute.fullPath },
    });
  }
}, 1000);

export default router;
