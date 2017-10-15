import Vue from 'vue'
import Vuex from 'vuex'
import {createRenderer} from 'vue-server-renderer'
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
  const store = new Vuex.Store({state})
  const wrapper = shallow(TimerBoard, {store})

  it('renders correctly', () => {
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw new Error()
      }
      expect(str).toMatchSnapshot()
    })
  })
})
