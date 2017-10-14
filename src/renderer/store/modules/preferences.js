import preferencesData from '../../datastore/preferences-data'

const preferences = {
  namespaced: true,
  state: {
    goal: 8
  },
  mutations: {
    UPDATE_GOAL(state, value) {
      state.goal = value
    }
  },
  actions: {
    updateGoal: async ({commit}, value) => {
      try {
        const count = await preferencesData.updateGoal(value)
        commit('UPDATE_GOAL', count)
      } catch (err) {
        console.error(err)
      }
    },
    initializeGoal: async ({commit, state}) => {
      try {
        const count = await preferencesData.findGoal() || state.goal
        commit('UPDATE_GOAL', count)
      } catch (err) {
        console.error(err)
      }
    }
  }
}

export default preferences
