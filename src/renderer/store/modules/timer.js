import formatTime from '../../helpers/format-time'

const workMinutes = 25
const restMinutes = 5

const timer = {
  namespaced: true,
  state: {
    running: false,
    resting: true,
    pausing: true,
    seconds: workMinutes * 60,
    timerId: 0
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
    toggle: ({commit, state, dispatch}) => {
      commit('UPDATE_PAUSING', !state.pausing)
      commit('UPDATE_RUNNING', !state.running)
      return state.running ? dispatch('run') : dispatch('pause')
    },
    run: ({commit, state, getters, dispatch}) => {
      state.timerId = setInterval(() => {
        return getters.expired ? dispatch('onExpired') : commit('UPDATE_COUNT', state.seconds - 1)
      }, 1000)
    },
    onExpired: ({commit, state, dispatch}) => {
      if (state.resting) {
        return dispatch('reset')
      }
      commit('UPDATE_RESTING', true)
      commit('UPDATE_COUNT', restMinutes * 60)
    },
    reset: ({commit, dispatch}) => {
      commit('UPDATE_COUNT', workMinutes * 60)
      commit('UPDATE_RUNNING', false)
      commit('UPDATE_RESTING', false)
      dispatch('pause')
    },
    pause: ({commit, state}) => {
      clearInterval(state.timerId)
      commit('UPDATE_PAUSING', true)
    }
  },
  getters: {
    formattedTime: state => formatTime(state.seconds),
    resettable: state => state.pausing === true && state.seconds !== workMinutes * 60,
    expired: state => state.seconds === 0
  }
}

export default timer
