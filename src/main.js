import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios' // 引入axios
import * as dd from 'dingtalk-jsapi' // 引入dd.js
import api from './api/api' // 引入api
import base from '../base.config' // 引入服务器链接

// 将以上挂载到vue的原型上，方便使用
Vue.prototype.$axios = axios
Vue.prototype.$dd = dd
Vue.prototype.$api = api
Vue.prototype.$base = base

Vue.config.productionTip = false // 运行时提示当前是否为生产环境

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
