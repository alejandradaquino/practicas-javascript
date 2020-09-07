import Vue from "vue";
import Vuex from "vuex";
import { db } from "../firebase";
import taskService from "../services/taskService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tarea: {},
    tareas: [],
  },
  mutations: {
    setTareas(state, payload) {
      state.tareas = payload;
    },
    setTarea(state, payload) {
      state.tarea = payload;
    },
  },
  actions: {
    getTareas({ commit }) {
      taskService
        .getTareas()
        .subscribe((tareas) => commit("setTareas", tareas));
    },
    getTarea({ commit }, id) {
      taskService.getTarea(id).subscribe((tarea) => commit("setTarea", tarea));
    },
    editTarea(_, tarea) {
      taskService.editTarea(tarea).subscribe();
    },
    addTarea(_, tarea) {
      taskService.addTarea(tarea).subscribe();
    },
    deleteTarea({ dispatch }, id) {
      taskService.deleteTarea(id).subscribe((_) => dispatch("getTareas"));
    },
  },
  modules: {},
});
