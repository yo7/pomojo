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
      'timer/initializeToday': jest.fn(),
      'preferences/initializeGoal': jest.fn()
    }
    store = new Vuex.Store({actions})
  })

  it('initialize today on mounted', () => {
    shallow(BaseBoard, {store})
    expect(actions['timer/initializeToday']).toHaveBeenCalled()
  })

  it('initialize goal on mounted', () => {
    shallow(BaseBoard, {store})
    expect(actions['preferences/initializeGoal']).toHaveBeenCalled()
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
