<template>
  <div class="container">
    <TaskEditor :task="task"></TaskEditor>
    <b-table striped hover :items="tareas"
      :fields="fields">
<!-- A virtual composite column -->
      <template v-slot:cell(actions)="row">
       <b-button size="sm" @click="editTask(row.item)">
          Edit
        </b-button>
      </template>
   </b-table>
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
      task: {name:'lalalla'},

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
      ...mapActions(['getTareas']),
      editTask(task){
        this.task = task;
      }
  },
  computed:{
      ...mapState(['tareas'])
  }
}
</script>
