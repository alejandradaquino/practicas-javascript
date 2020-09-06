<template>
  <div >
    <b-table striped hover :items="tareas" :fields="fields">
      <template v-slot:cell(actions)="row">
        <router-link :to="{name: 'EditTask', params: {id: row.item.id}}">
          <b-button size="sm" variant="outline-primary">
            Edit
          </b-button>
        </router-link>
          <b-button size="sm" variant="danger" @click="deleteTask(row.item)">
            Delete
          </b-button>
      </template>
   </b-table>
    <router-link :to="{name: 'AddTask'}">
      <b-button variant="outline-primary" size="sm">
        Add
      </b-button>
    </router-link>
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex';
import TaskEditor from '../components/TaskEditor'

export default {
  name: 'Home',
  components: {TaskEditor},
  data(){
    return {

        fields: [
          { key: 'nombre', label: 'Name', sortable: true, sortDirection: 'desc' },
          { key: 'actions', label: 'Actions' }
        ],
    }
  },
  created(){
    this.getTareas();
  },
  methods:{
      ...mapActions(['getTareas', 'deleteTarea']),
      editTask(task){
        this.task = task;
      },
      deleteTask(task){
        if(confirm(`Are you shure you want to delete ${task.nombre}?`)){
          this.deleteTarea(task.id);
        }
      }
  },
  computed:{
      ...mapState(['tareas'])
  }
}
</script>
