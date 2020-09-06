import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarea: {},
    tareas: []
  },
  mutations: {
      setTareas(state, payload){
          state.tareas = payload
      },
      setTarea(state, payload){
        state.tarea = payload;
      }
  },
  actions: {
    getTareas({commit}){
        const tareas = []
        db.collection('tareas').get()
        .then(res => {
            res.forEach(doc => {
                let tarea = doc.data()
                tarea.id = doc.id
                tareas.push(tarea)
            })
            commit('setTareas', tareas)
        })

    },
    getTarea({commit}, id){
      db.collection('tareas').doc(id).get()
      .then(doc => {
        let tarea = doc.data()
        tarea.id = doc.id
        console.log(tarea);
        commit('setTarea', tarea)
      })
    },
    editTarea({commit}, tarea){
        db.collection('tareas').doc(tarea.id).update({
            nombre: tarea.nombre
        })
    },
    addTarea({commit}, tarea){
      db.collection('tareas').add({
          nombre: tarea.nombre
      })
    },
    deleteTarea({commit, dispatch}, id){
      
        db.collection('tareas').doc(id).delete()
        .then(() => {
            dispatch('getTareas')
            //commit('setEliminarTarea', id)
        })
    }
  },
  modules: {
  }
})
