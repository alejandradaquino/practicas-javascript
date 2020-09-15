import Vue from "vue";
import Vuex from "vuex";
import taskService from "../services/taskService";
import userService from "../services/userService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tarea: {},
    tareas: [],
    user: null,
    error: null,
  },
  mutations: {
    setTasks(state, payload) {
      state.tareas = payload;
    },
    setTask(state, payload) {
      state.tarea = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    getTasks({ commit }) {
      taskService.getTasks().subscribe((tareas) => commit("setTasks", tareas));
    },
    getTask({ commit }, id) {
      taskService.getTask(id).subscribe((tarea) => commit("setTask", tarea));
    },
    editTask(_, tarea) {
      taskService.editTask(tarea).subscribe();
    },
    addTask(_, tarea) {
      taskService.addTask(tarea);
    },
    deleteTask({ dispatch }, id) {
      taskService.deleteTask(id).subscribe((_) => dispatch("getTasks"));
    },
    createUser({ commit }, user) {
      userService.createUser(user).subscribe(
        (user) => commit("setUser", user),
        (error) => commit("setError", error)
      );
    },
    login({ commit }, user) {
      userService.login(user).subscribe(
        (user) => commit("setUser", user),
        (error) => commit("setError", error)
      );
    },
    logout({ commit }) {
      userService.logout().subscribe((_) => commit("setUser", null));
    },
    updateUser({ commit }, user) {
      commit("setUser", user)
    },
  },
  modules: {},
});
