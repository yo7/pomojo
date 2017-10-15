import preferencesData from '../../datastore/preferences-data'
import minutes from './state/minutes'

const preferences = {
  namespaced: true,
  state: {
    workMinutes: minutes.work,
    restMinutes: minutes.rest,
    goal: 8
  },
  mutations: {
    UPDATE_WORK_MINUTES(state, value) {
      state.workMinutes = value
    },
    UPDATE_REST_MINUTES(state, value) {
      state.restMinutes = value
    },
    UPDATE_GOAL(state, value) {
      state.goal = value
    }
  },
  actions: {
    updateWorkMinutes: async ({commit}, value) => {
      try {
        const count = await preferencesData.updateWorkMinutes(value)
        commit('UPDATE_WORK_MINUTES', count)
      } catch (err) {
        console.error(err)
      }
    },
    updateRestMinutes: async ({commit}, value) => {
      try {
        const count = await preferencesData.updateRestMinutes(value)
        commit('UPDATE_REST_MINUTES', count)
      } catch (err) {
        console.error(err)
      }
    },
    updateGoal: async ({commit}, value) => {
      try {
        const count = await preferencesData.updateGoal(value)
        commit('UPDATE_GOAL', count)
      } catch (err) {
        console.error(err)
      }
    },
    initializeWorkMinutes: async ({commit, state}) => {
      try {
        const minutes = await preferencesData.findWorkMinutes() || state.workMinutes
        commit('UPDATE_WORK_MINUTES', minutes)
      } catch (err) {
        console.error(err)
      }
    },
    initializeRestMinutes: async ({commit, state}) => {
      try {
        const minutes = await preferencesData.findRestMinutes() || state.workMinutes
        commit('UPDATE_REST_MINUTES', minutes)
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
