const preferences = {
  namespaced: true,
  state: {
    running: false,
    resting: false,
    pausing: true,
    seconds: workMinutes * 60,
    timerId: 0,
    today: 0,
    goal: 8
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
    toggle: ({commit, state, dispatch}) => {
      commit('UPDATE_PAUSING', !state.pausing)
      commit('UPDATE_RUNNING', !state.running)
      return state.running ? dispatch('run') : dispatch('pause')
    },
    run: ({commit, state, getters, dispatch}) => {
      const expired = state.seconds === 0
      state.timerId = setInterval(() => {
        return expired ? dispatch('onExpired') : commit('UPDATE_COUNT', state.seconds - 1)
      }, 1000)
    },
    onExpired: ({commit, state, dispatch}) => {
      if (state.resting) {
        dispatch('reset')
        return notify({title: 'Break has finished!', body: 'Move on to next pomodoro!'})
      }
      dispatch('updateToday')
      commit('UPDATE_RESTING', true)
      commit('UPDATE_COUNT', restMinutes * 60)
      return notify({title: 'Pomodoro has finished!', body: 'Well done! Let\'s take a break!'})
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
    },
    initializeToday: async ({commit}) => {
      try {
        const count = await pomodoro.today()
        commit('UPDATE_TODAY', count)
      } catch (err) {
        console.error(err)
      }
    },
    updateToday: async ({commit}) => {
      try {
        const count = await pomodoro.update()
        commit('UPDATE_TODAY', count)
      } catch (err) {
        console.error(err)
      }
    }
  },
}

export default preferences
