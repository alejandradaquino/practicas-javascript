<template>
  <div class="container">
    <TaskEditor :task="tarea" @onSave="onSave" @onCancel="$router.push({path:'/'})"></TaskEditor>
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex';
import TaskEditor from '../components/TaskEditor'

export default {
  name: 'Home',
  components: { TaskEditor },
  created(){
      this.getTarea(this.$route.params.id);
  },
  data(){
    return {
      task: {nombre:''}
    }
  },
    methods:{
        ...mapActions(['getTarea', 'editTarea']),
        onSave(tarea){
            console.log(tarea)
            this.editTarea(tarea);
            this.$router.push({path:'/'})
        }
    },
  computed:{
      ...mapState(['tarea'])
  }
}
</script>
