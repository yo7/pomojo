import notify from '../../helpers/notify'
import pomodoroData from '../../datastore/pomodoro-data'
import preferencesData from '../../datastore/preferences-data'
import formatSeconds from '../../helpers/format-seconds'
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
    UPDATE_SECONDS(state, value) {
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
        if (state.seconds === 0) {
          return dispatch('onExpired')
        }
        commit('UPDATE_SECONDS', state.seconds - 1)
      }, 1000)
    },
    onExpired: async ({commit, state, dispatch, rootState}) => {
      if (state.resting) {
        await dispatch('reset')
        return notify({title: 'Break has finished!', body: 'Move on to next pomodoro!'})
      }

      try {
        const seconds = await preferencesData.findRestMinutes() * 60 || minutes.rest * 60
        await dispatch('updateToday')
        commit('UPDATE_SECONDS', seconds)
        commit('UPDATE_RESTING', true)
        if (rootState.preferences.notification) {
          return notify({title: 'Pomodoro has finished!', body: 'Well done! Let\'s take a break!'})
        }
      } catch (err) {
        console.error(err)
      }
    },
    reset: async ({commit, state}) => {
      try {
        const seconds = await preferencesData.findWorkMinutes() * 60
        commit('UPDATE_SECONDS', seconds)
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
    updateToday: async ({commit}) => {
      try {
        const count = await pomodoroData.update()
        commit('UPDATE_TODAY', count)
      } catch (err) {
        console.error(err)
      }
    },
    loadSeconds: async ({commit, state}) => {
      const seconds = await preferencesData.findWorkMinutes() * 60 || state.seconds
      commit('UPDATE_SECONDS', seconds)
    },
    loadToday: async ({commit}) => {
      try {
        const count = await pomodoroData.today()
        commit('UPDATE_TODAY', count)
      } catch (err) {
        console.error(err)
      }
    }
  },
  getters: {
    pausable: state => state.running && !state.pausing,
    formattedSeconds: state => formatSeconds(state.seconds)
  }
}

export default timer
