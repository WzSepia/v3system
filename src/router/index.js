import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "Home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/Login",
    name: "登陆",
    component: () => import("../views/login/Login.vue"),
  },
  {
    path: "/loginout",
    name: "退出",
    component: () => import("@/views/login/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/**
 * 路由守卫
 * to: Route: 即将要进入的目标 路由对象
 * from: Route: 当前导航正要离开的路由
 * next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 * */
router.beforeEach((to, from, next) => {
  const isLogin = !!sessionStorage.eleToken;
  if (to.path === "/login") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
});

export default router;
