import Vue from 'vue'
import Vuex from 'vuex'
import timer from './modules/timer'
import preferences from './modules/preferences'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    timer,
    preferences
  }
})

export default store
