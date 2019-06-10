import Vue from "vue";
import Router from "vue-router";
import User from "./views/User.vue";
import Users from "./views/Users.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/users"
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
    }
  ]
});
