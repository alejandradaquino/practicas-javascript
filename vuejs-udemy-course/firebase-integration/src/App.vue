<template>
  <div id="app" class="container">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/register">Registration</router-link></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
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