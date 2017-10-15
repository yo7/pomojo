import Vue from 'vue'
import Vuex from 'vuex'
import {createRenderer} from 'vue-server-renderer'
import {shallow} from 'vue-test-utils'
import PreferencesBoard from '../preferences-board.vue'

Vue.use(Vuex)

describe('PreferencesBoard', () => {
  const state = {
    preferences: {
      goal: 8
    }
  }
  const store = new Vuex.Store({state})
  const wrapper = shallow(PreferencesBoard, {store})

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
