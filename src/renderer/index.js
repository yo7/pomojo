import 'babel-polyfill'
import Vue from 'vue'
import App from './app.vue'
import store from './store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
