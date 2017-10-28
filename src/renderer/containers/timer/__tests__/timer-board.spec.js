import Vue from 'vue'
import Vuex from 'vuex'
import {shallow} from 'vue-test-utils'
import TimerBoard from '../timer-board.vue'

Vue.use(Vuex)

describe('TimerBoard', () => {
  const state = {
    timer: {
      seconds: 1500,
      running: false,
      resting: false,
      pausing: true,
      today: 0
    },
    preferences: {
      goal: 8
    }
  }
  const getters = {
    'timer/formattedSeconds': jest.fn(),
    'timer/pausable': jest.fn()
  }
  const actions = {
    'timer/loadSeconds': jest.fn()
  }
  const store = new Vuex.Store({state, getters, actions})

  it('load seconds on mounted unless timer is running', () => {
    shallow(TimerBoard, {store})
    expect(actions['timer/loadSeconds']).toHaveBeenCalled()
  })
})
