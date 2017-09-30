import Vue from 'vue'
import Vuex from 'vuex'
import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerCounter from '../timer-counter.vue'
import * as tray from '../tray'

Vue.use(Vuex)

describe('TimerCounter', () => {
  let store

  beforeEach(() => {
    const getters = {formattedTime: () => '25:00'}
    store = new Vuex.Store({getters})
  })

  it('renders counter', () => {
    const wrapper = shallow(TimerCounter, {store})
    expect(wrapper.text()).toContain('25:00')
  })

  it('initalize tray on mounted', () => {
    jest.spyOn(tray, 'initialize')
    shallow(TimerCounter, {store})
    expect(tray.initialize).toHaveBeenCalled()
  })

  it('does not update tray on mounted', () => {
    jest.spyOn(tray, 'update')
    shallow(TimerCounter, {store})
    expect(tray.update).not.toHaveBeenCalled()
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
