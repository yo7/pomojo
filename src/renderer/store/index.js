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
    TOGGLE_TIMER(state) {
      state.running = !state.running
    },
    TOGGLE_WORKING(state) {
      state.onBreak = !state.onBreak
    },
    UPDATE_COUNT(state, payload) {
      state.seconds = payload
    }
  },
  actions: {
    toggleTimer: ({commit}) => {
      return new Promise(resolve => {
        commit('TOGGLE_TIMER')
        resolve()
      })
    },
    updateCount: ({commit}, payload) => commit('UPDATE_COUNT', payload),
    initializeCount: ({commit}, onBreak) => {
      if (onBreak) {
        commit('UPDATE_COUNT', breakMinutes)
      } else {
        commit('UPDATE_COUNT', workMinutes)
      }
    }
  }
})

export default store
