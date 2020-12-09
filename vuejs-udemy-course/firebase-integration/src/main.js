import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

import userService from "./services/userService";

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.use(Vuelidate);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

userService.getUserSubject().subscribe((user) => {
  store.dispatch("updateUser", user);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
