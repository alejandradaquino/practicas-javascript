<template>
  <div>
    <TaskEditor :task="task" @onSave="onSave" @onCancel="$router.push({path:'/'})"></TaskEditor>
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex';
import TaskEditor from '../components/TaskEditor'

export default {
  name: 'AddTask',
  components: { TaskEditor },
  data(){
    return {
      task: {nombre:''}
    }
  },
    methods:{
        ...mapActions(['addTask']),
        onSave(task){
            this.addTask(task);
            this.$router.push({path:'/'})
        }
    }
}
</script>
