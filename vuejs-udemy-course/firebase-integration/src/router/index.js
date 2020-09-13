import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
      path: '/edit/:id',
      name: 'EditTask',
      component: () => import(/* webpackChunkName: "EditTask" */ '../views/EditTask.vue')
    },
    {
      path: '/add',
      name: 'AddTask',
      component: () => import(/* webpackChunkName: "AddTask" */ '../views/AddTask.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
    }
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
