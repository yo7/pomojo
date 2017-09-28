import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const workMinutes = 25

const store = new Vuex.Store({
  state: {
    running: false,
    onBreak: true,
    seconds: workMinutes * 60
  },
  mutations: {
    UPDATE_RUNNING(state, payload) {
      state.running = payload
    },
    UPDDATE_ON_BREAK(state, payload) {
      state.onBreak = payload
    },
    UPDATE_COUNT(state, payload) {
      state.seconds = payload
    }
  },
  actions: {
    updateRunning: ({commit}, payload) => {
      return new Promise(resolve => {
        commit('UPDATE_RUNNING', payload)
        resolve()
      })
    },
    updateOnBreak: ({commit}, payload) => {
      return new Promise(resolve => {
        commit('UPDDATE_ON_BREAK', payload)
        resolve()
      })
    },
    updateCount: ({commit}, payload) => {
      return new Promise(resolve => {
        commit('UPDATE_COUNT', payload)
        resolve()
      })
    }
  }
})

export default store
