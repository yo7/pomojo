import Vue from 'vue'
import Vuex from 'vuex'
import timer from './modules/timer'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    timer
  }
})

export default store
