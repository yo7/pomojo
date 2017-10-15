import Vue from 'vue'
import Vuex from 'vuex'
import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerCounter from '../timer-counter.vue'

Vue.use(Vuex)

describe('TimerCounter', () => {
  let store

  beforeEach(() => {
    const actions = {'timer/initializeSeconds': jest.fn()}
    const getters = {'timer/formattedSeconds': () => '25:00'}
    store = new Vuex.Store({actions, getters})
  })

  it('renders counter', () => {
    const wrapper = shallow(TimerCounter, {store})
    expect(wrapper.text()).toContain('25:00')
  })

  it('renders correctly', () => {
    const renderer = createRenderer()
    const wrapper = shallow(TimerCounter, {store})
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw new Error()
      }
      expect(str).toMatchSnapshot()
    })
  })
})
