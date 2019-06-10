import Vue from "vue";
import Router from "vue-router";
import User from "./views/User.vue";
import Users from "./views/Users.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/users"
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/users",
      name: "users",
      component: Users
    },
    {
      path: "/users/:userId",
      name: "user",
      component: User
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});

export default router;
