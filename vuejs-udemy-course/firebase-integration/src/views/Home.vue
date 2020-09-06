<template>
  <div class="home">
    <button type="button" class="btn btn-primary">Get tareas</button>
  </div>
</template>

<script>

import {mapActions} from 'vuex';
console.log()
export default {
  name: 'Home',
  created(){
    this.getTareas();
  },
  methods:{
      ...mapActions(['getTareas'])
  },
}
</script>
