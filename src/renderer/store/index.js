import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const workMinutes = 25
const breakMinutes = 5

const store = new Vuex.Store({
  state: {
    running: false,
    onBreak: false,
    seconds: workMinutes * 60
  },
  mutations: {
    RUN(state) {
      state.runnning = true
    },
    STOP(state) {
      state.running = false
    },
    BREAK(state) {
      state.onBreak = true
    },
    WORK(state) {
      state.onBreak = false
    },
    COUNT(state) {
      this.state.seconds--
    },
    INITIALIZE_WORK(state) {
      this.state.seconds = workMinutes * 60
    },
    INITIALIZE_BREAK(state) {
      this.state.seconds = breakMinutes * 60
    }
  },
  actions: {
    count: ({commit}) => commit('COUNT')
  }
})

export default store