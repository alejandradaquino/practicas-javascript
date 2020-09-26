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
    getTasks({ commit }, user) {
      taskService
        .getTasks(user.email)
        .subscribe((tareas) => commit("setTasks", tareas));
    },
    getTask({ commit }, { id, user }) {
      taskService
        .getTask(id, user.email)
        .subscribe((tarea) => commit("setTask", tarea));
    },
    editTask(_, { tarea, user }) {
      taskService.editTask(tarea, user.email).subscribe();
    },
    addTask(_, { tarea, user }) {
      taskService.addTask(tarea, user.email);
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
