import 'babel-polyfill'
import Vue from 'vue'
import AsyncComputed from 'vue-async-computed'
import App from './app.vue'
import store from './store'
import db from './datastore/db'

Vue.use(AsyncComputed)
Vue.prototype.$db = db

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
