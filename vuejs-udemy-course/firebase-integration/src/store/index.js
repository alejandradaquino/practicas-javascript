import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: []
  },
  mutations: {
      setTareas(state, payload){
          state.tareas = payload
      }
  },
  actions: {
    getTareas({commit}){
      console.log('getting tasks')
        const tareas = []
        db.collection('tareas').get()
        .then(res => {
            res.forEach(doc => {
                console.log(doc.id)
                console.log(doc.data())
                let tarea = doc.data()
                tarea.id = doc.id
                tareas.push(tarea)
            })
            commit('setTareas', tareas)
        })
    }
  },
  modules: {
  }
})
