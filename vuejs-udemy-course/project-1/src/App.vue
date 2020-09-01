<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header/>
    <FruitList/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FruitList from './components/FruitList'
export default {
  name: 'App',
  components: {
    Header,
    FruitList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
