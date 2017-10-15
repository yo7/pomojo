import Vue from 'vue'
import Vuex from 'vuex'
import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import PreferencesGoal from '../preferences-goal.vue'

Vue.use(Vuex)

describe('PreferencesGoal', () => {
  const actions = {
    'preferences/updateGoal': jest.fn()
  }
  const store = new Vuex.Store({actions})
  const propsData = {goal: 8}

  it('renders correctly', () => {
    const wrapper = shallow(PreferencesGoal, {store, propsData})
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw new Error()
      }
      expect(str).toMatchSnapshot()
    })
  })
})
