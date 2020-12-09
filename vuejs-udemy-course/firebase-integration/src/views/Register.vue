<template>
  <div>
    <h1>Registration</h1>
    <b-card title="Register" class="mb-2">
      <b-card-text>
        <form class="form">
          <div class="form-group">
            <label for="username">User</label>
            <input type="email" name="username" id class="form-control" v-model="$v.user.email.$model" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id class="form-control" v-model="$v.user.password.$model" />
          </div>
          <div class="form-group"> 
            <label for="repeated">Repeat password</label>
            <input type="password" name="repeated" id class="form-control" v-model="repeated" />
          </div>
          {{user}}<br>
          {{passwordCorrect}}
          <br>
          {{$v}}
          <b-button variant="outline-primary" :disabled="!passwordCorrect" @click="createUser(user)">Register</b-button>
        </form>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import {required, email} from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      user: {},
      repeated: "",
    };
  },
  validations:{
    user: {
      email: {required, email},
      password: { required }
    }
  },
  methods: {
    ...mapActions(["createUser"]),
  },
  computed: {
    ...mapState(["error"]),
    passwordCorrect() {
      return (
        this.user.password !== undefined &&
        this.user.password.trim().length > 0 &&
        this.user.password === this.repeated
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>