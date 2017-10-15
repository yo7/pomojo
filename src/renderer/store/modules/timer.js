import notify from '../../helpers/notify'
import pomodoroData from '../../datastore/pomodoro-data'
import preferencesData from '../../datastore/preferences-data'
import minutes from './state/minutes'

const timer = {
  namespaced: true,
  state: {
    running: false,
    resting: false,
    pausing: false,
    seconds: minutes.work * 60,
    timerId: 0,
    today: 0
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
    },
    UPDATE_TODAY(state, value) {
      state.today = value
    }
  },
  actions: {
    toggle: ({dispatch, getters}) => {
      return getters.pausable ? dispatch('pause') : dispatch('run')
    },
    run: ({commit, state, dispatch}) => {
      commit('UPDATE_RUNNING', true)
      commit('UPDATE_PAUSING', false)
      state.timerId = setInterval(() => {
        return (state.seconds === 0) ? dispatch('onExpired') : commit('UPDATE_COUNT', state.seconds - 1)
      }, 1000)
    },
    onExpired: ({commit, state, dispatch}) => {
      if (state.resting) {
        dispatch('reset')
        return notify({title: 'Break has finished!', body: 'Move on to next pomodoro!'})
      }
      dispatch('updateToday')
      commit('UPDATE_RESTING', true)
      commit('UPDATE_COUNT', minutes.rest * 60)
      return notify({title: 'Pomodoro has finished!', body: 'Well done! Let\'s take a break!'})
    },
    reset: async ({commit, state}) => {
      try {
        const seconds = await preferencesData.findWorkMinutes() * 60
        commit('UPDATE_COUNT', seconds)
        commit('UPDATE_RUNNING', false)
        commit('UPDATE_RESTING', false)
        commit('UPDATE_PAUSING', false)
        clearInterval(state.timerId)
      } catch (err) {
        console.error(err)
      }
    },
    pause: ({commit, state}) => {
      clearInterval(state.timerId)
      commit('UPDATE_PAUSING', true)
    },
    initializeToday: async ({commit}) => {
      try {
        const count = await pomodoroData.today()
        commit('UPDATE_TODAY', count)
      } catch (err) {
        console.error(err)
      }
    },
    updateToday: async ({commit}) => {
      try {
        const count = await pomodoroData.update()
        commit('UPDATE_TODAY', count)
      } catch (err) {
        console.error(err)
      }
    },
    initializeSeconds: async ({commit, state}) => {
      const seconds = await preferencesData.findWorkMinutes() * 60 || state.seconds
      commit('UPDATE_COUNT', seconds)
    }
  },
  getters: {
    pausable: state => state.running && !state.pausing
  }
}

export default timer
