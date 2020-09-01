import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fruits: [
      { name: "manzana", quantity: 0 },
      { name: "naranja", quantity: 20 },
      { name: "banana", quantity: 3 },
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
