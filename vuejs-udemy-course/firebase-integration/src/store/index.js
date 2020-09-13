import Vue from "vue";
import Vuex from "vuex";
import { auth } from "../firebase";
import taskService from "../services/taskService";

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
      console.log("about to send");
      try {
        auth
          .createUserWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            console.log(res);
            const user = {
              email: res.user.email,
              uid: res.user.uid,
            };
            commit("setUser", user);
          });
      } catch (error) {
        console.log("errir catch", error);
        commit("setError", error);
      }
    },
  },
  modules: {},
});
