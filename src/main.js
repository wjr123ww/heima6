import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import './styles/common.less'
import './styles/iconfont.less'
import HmHeader from './components/HmHeader.vue'
import Hmlogo from './components/HmLogo.vue'
import { Button, Field, Form, Toast } from 'vant'
import HmNavBar from './components/HmNavBar.vue'
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'
Vue.use(Button)
Vue.use(Field)
Vue.use(Form)
Vue.use(Toast)
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', Hmlogo)
Vue.component('hm-navbar', HmNavBar)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
