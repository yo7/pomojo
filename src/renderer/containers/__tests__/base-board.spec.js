import Vue from 'vue'
import Vuex from 'vuex'
import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import BaseBoard from '../base-board.vue'

Vue.use(Vuex)

describe('BaseBoard', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    actions = {
      'preferences/loadWorkMinutes': jest.fn(),
      'preferences/loadRestMinutes': jest.fn(),
      'preferences/loadGoal': jest.fn(),
      'preferences/loadNotification': jest.fn(),
      'timer/loadToday': jest.fn()
    }
    store = new Vuex.Store({actions})
  })

  it('load work minutes preference on created', () => {
    shallow(BaseBoard, {store})
    expect(actions['preferences/loadWorkMinutes']).toHaveBeenCalled()
  })

  it('load rest minutes preference on created', () => {
    shallow(BaseBoard, {store})
    expect(actions['preferences/loadRestMinutes']).toHaveBeenCalled()
  })

  it('load goal preference on created', () => {
    shallow(BaseBoard, {store})
    expect(actions['preferences/loadGoal']).toHaveBeenCalled()
  })

  it('load noticication preference on created', () => {
    shallow(BaseBoard, {store})
    expect(actions['preferences/loadNotification']).toHaveBeenCalled()
  })

  it('load pomodoro count of today preference on created', () => {
    shallow(BaseBoard, {store})
    expect(actions['timer/loadToday']).toHaveBeenCalled()
  })

  it('renders correctly', () => {
    wrapper = shallow(BaseBoard, {store})
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw new Error()
      }
      expect(str).toMatchSnapshot()
    })
  })
})
