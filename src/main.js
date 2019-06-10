import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import { sync } from "vuex-router-sync";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// eslint-disable-next-line no-unused-vars
const unsync = sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// unsync() /***Used to unsync the store from the router after tearind down the Vue instance in order to release Vue resources*/
