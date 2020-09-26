<template>
  <div id="app" class="container">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <router-link v-if="isLoggedUser" to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link v-if="!isLoggedUser" to="/register">Registration</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link v-if="!isLoggedUser" to="/login">Login</router-link>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav style="color:white;margin-top:5px;margin-left:20px;" v-if="user">
        User: {{user.email}}
        <div style="margin:3px;margin-left:10px;cursor:pointer" @click="logout">
          <b-icon scale="1.75" icon="box-arrow-in-right" aria-hidden="true"></b-icon>
        </div>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["logout"]),
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["isLoggedUser"]),
  },
};
</script>∏

<style lang="css"  scoped>
h1 {
  margin-bottom: 30px;
}
</style>