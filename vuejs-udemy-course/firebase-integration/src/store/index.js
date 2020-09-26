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
    getTasks({ commit, state }) {
      taskService
        .getTasks(state.user.email)
        .subscribe((tareas) => commit("setTasks", tareas));
    },
    getTask({ commit, state }, { id }) {
      taskService
        .getTask(id, state.user.email)
        .subscribe((tarea) => commit("setTask", tarea));
    },
    editTask({ state }, { tarea }) {
      taskService.editTask(tarea, state.user.email).subscribe();
    },
    addTask({ state }, { tarea }) {
      taskService.addTask(tarea, state.user.email);
    },
    deleteTask({ dispatch }, { id, user }) {
      taskService
        .deleteTask(id, user.email)
        .subscribe((_) => dispatch("getTasks", user));
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
      commit("setUser", user);
    },
  },
  getters: {
    isLoggedUser(state) {
      return state.user !== null;
    },
  },
  modules: {},
});
