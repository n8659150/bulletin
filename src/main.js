// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
const APP_ID = 'Ehf9GzQfKQ0iCs1QAnvLPHdC-gzGzoHsz'
const APP_KEY = '1Ytly1IgCHU5CNcCms2mzMpn'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
