<template>
  <div>
    <TaskEditor :task="tarea" @onSave="onSave" @onCancel="$router.push({path:'/'})"></TaskEditor>
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex';
import TaskEditor from '../components/TaskEditor'

export default {
  name: 'EditTask',
  components: { TaskEditor },
  created(){
      this.getTask(this.$route.params.id);
  },
  data(){
    return {
      task: {nombre:''}
    }
  },
    methods:{
        ...mapActions(['getTask', 'editTask']),
        onSave(tarea){
            console.log(tarea)
            this.editTask(tarea);
            this.$router.push({path:'/'})
        }
    },
  computed:{
      ...mapState(['tarea'])
  }
}
</script>
