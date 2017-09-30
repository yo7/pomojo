import Vue from 'vue'
import Vuex from 'vuex'
import formatTime from '../helpers/format-time'

Vue.use(Vuex)

const workMinutes = 25

const store = new Vuex.Store({
  state: {
    running: false,
    pausing: true,
    onBreak: false,
    seconds: workMinutes * 60
  },
  mutations: {
    UPDATE_RUNNING(state, value) {
      state.running = value
    },
    UPDATE_PAUSING(state, value) {
      state.pausing = value
    },
    UPDATE_ONBREAK(state, value) {
      state.onBreak = value
    },
    UPDATE_COUNT(state, value) {
      state.seconds = value
    }
  },
  actions: {
    updateRunning: ({commit}, value) => {
      return new Promise(resolve => {
        commit('UPDATE_RUNNING', value)
        resolve()
      })
    },
    updatePausing: ({commit}, value) => commit('UPDATE_PAUSING', value),
    updateOnBreak: ({commit}, value) => {
      return new Promise(resolve => {
        commit('UPDDATE_ONBREAK', value)
        resolve()
      })
    },
    updateCount: ({commit}, value) => {
      return new Promise(resolve => {
        commit('UPDATE_COUNT', value)
        resolve()
      })
    },
    reset: async ({commit}) => {
      await commit('UPDATE_COUNT', workMinutes * 60)
      await commit('UPDATE_RUNNING', false)
      commit('UPDATE_ONBREAK', false)
    }
  },
  getters: {
    formattedTime: state => formatTime(state.seconds),
    resettable: state => state.pausing === true &&
      state.seconds !== workMinutes * 60
  }
})

export default store
