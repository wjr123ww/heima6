import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import './styles/common.less'
import './styles/iconfont.less'
import HmHeader from './components/HmHeader.vue'
import Hmlogo from './components/HmLogo.vue'
import { Button, Field, Form } from 'vant'

Vue.use(Button)
Vue.use(Field)
Vue.use(Form)
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', Hmlogo)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
