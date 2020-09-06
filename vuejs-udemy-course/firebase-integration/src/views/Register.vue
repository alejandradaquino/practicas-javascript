<template>
    <div>
        <h1>Registration</h1>
          <b-card
            title="Edit Task"
            class="mb-2"
        >
            <b-card-text>
        
                <form class="form">
                    <div class="form-group">
                        <label for="username">User</label>
                        <input type="email" name="username" id="" class="form-control" v-model="user.name">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="" class="form-control" v-model="user.password">
                    </div>
                    <div class="form-group">
                        <label for="repeated">Repeat passwor</label>
                        <input type="password" name="repeated" id="" class="form-control" v-model="repeated">
                    </div>
                
                     <b-button variant="outline-primary" @click="register">Register</b-button>
                </form>
            </b-card-text>
         </b-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                user: {},
                repeated: ''
            }
        },
        methods:{
            register(){
                console.log("registration", this.user);
            }
        },
        computed:{

        }
    }
</script>

<style lang="scss" scoped>

</style>