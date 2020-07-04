import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import './styles/common.less'
import './styles/iconfont.less'
import HmHeader from './components/HmHeader.vue'
import Hmlogo from './components/HmLogo.vue'
import {
  Button,
  Field,
  Form,
  Toast,
  Dialog,
  RadioGroup,
  Radio,
  Uploader
} from 'vant'
import HmNavBar from './components/HmNavBar.vue'
import axios from 'axios'
import moment from 'moment'

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'
axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
})

axios.interceptors.response.use(function(res) {
  const { statusCode, message } = res.data
  if (statusCode === 401 && message === '用户信息验证失败') {
    Toast.fail(message)

    router.push('/login')

    localStorage.removeItem('token')
    localStorage.removeItem('userId')
  }
  return res
})
Vue.use(Button)
Vue.use(Field)
Vue.use(Form)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Uploader)
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', Hmlogo)
Vue.component('hm-navbar', HmNavBar)
Vue.config.productionTip = false
Vue.filter('time', function(input) {
  return moment(input).format('YYYY-MM-DD')
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
