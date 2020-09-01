import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fruits: [
      {id:1, name: "manzana", quantity: 0 },
      {id:2, name: "naranja", quantity: 20 },
      {id:3, name: "banana", quantity: 3 },
    ]
  },
  mutations: {
    addQuantityToFruit(state, id){
      console.log(id);
      state.fruits.filter(f => f.id == id).forEach( f => f.quantity ++);
    },
    resetAllQuantities(state){
      state.fruits.forEach(f=> f.quantity = 0)
    }
  },
  actions: {},
  modules: {},
});
