import Vue from 'vue'
import App from './app.vue'
import store from './store'
import 'font-awesome-webpack'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
