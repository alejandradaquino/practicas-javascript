<template>
  <div id="app" class="container">
    <h1>Task Administration</h1>
    <div id="nav" style="display:none">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="css"  scoped>
h1{
  margin-bottom: 30px;
}
</style>