import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'
import UserEdit from '../views/UserEdit.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/login', component: Login, name: 'login' },
    { path: '/register', component: Register, name: 'register' },
    { path: '/user', component: User, name: 'user' },
    { path: '/user-edit', component: UserEdit, name: 'user-edit' }
  ]
})
const pages = ['/user', '/user-edit']
router.beforeEach(function(to, from, next) {
  const token = localStorage.getItem('token')
  if (pages.includes(to.path)) {
    // 判断是否有token,如果没有token，去登录，如果有token，放走
    if (token) {
      next()
    } else {
      router.push('/login')
    }
  } else {
    next()
  }
})
export default router
