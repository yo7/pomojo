import Vue from 'vue'
import Vuex from 'vuex'
import formatTime from '../helpers/format-time'

Vue.use(Vuex)

const workMinutes = 25

const store = new Vuex.Store({
  state: {
    running: false,
    resting: false,
    pausing: true,
    seconds: workMinutes * 60
  },
  mutations: {
    UPDATE_RUNNING(state, value) {
      state.running = value
    },
    UPDATE_PAUSING(state, value) {
      state.pausing = value
    },
    UPDATE_RESTING(state, value) {
      state.resting = value
    },
    UPDATE_COUNT(state, value) {
      state.seconds = value
    }
  },
  actions: {
    updateRunning: ({commit}, value) => commit('UPDATE_RUNNING', value),
    updateResting: ({commit}, value) => commit('UPDDATE_RESTING', value),
    updatePausing: ({commit}, value) => commit('UPDATE_PAUSING', value),
    updateCount: ({commit}, value) => commit('UPDATE_COUNT', value),
    reset: ({commit}) => {
      commit('UPDATE_COUNT', workMinutes * 60)
      commit('UPDATE_RUNNING', false)
      commit('UPDATE_RESTING', false)
    }
  },
  getters: {
    formattedTime: state => formatTime(state.seconds),
    resettable: state => state.pausing === true &&
      state.seconds !== workMinutes * 60
  }
})

export default store
