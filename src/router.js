import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '../src/views/home.vue'
const routes=[
  {
    path:'/',
    component:Home
  }
]
const router = new VueRouter({
  mode: 'hash',
  routes: routes
})
export default router