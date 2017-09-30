import Vue from 'vue'
import Vuex from 'vuex'
import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerCounter from '../timer-counter.vue'
import * as tray from '../../../helpers/tray'
import formatTime from '../../../helpers/format-time'

Vue.use(Vuex)

describe('TimerCounter', () => {
  let store
  let getters
  let state
  let mutations

  beforeEach(() => {
    state = {seconds: 1500}
    mutations = {
      UPDATE_COUNT: (state, value) => {
        state.seconds = value
      }
    }
    getters = {formattedTime: state => formatTime(state.seconds)}
    store = new Vuex.Store({state, getters, mutations})
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

  it('updates tray on updated', () => {
    jest.spyOn(tray, 'update')
    const wrapper = shallow(TimerCounter, {store})
    store.commit('UPDATE_COUNT', 1499)
    wrapper.vm.$nextTick(() => {
      expect(tray.update).toHaveBeenCalled()
    })
  })

  it('does not initialize tray on updated', () => {
    jest.spyOn(tray, 'initialize')
    const wrapper = shallow(TimerCounter, {store})
    store.commit('UPDATE_COUNT', 1499)
    wrapper.vm.$nextTick(() => {
      expect(tray.initialize).toHaveBeenCalled()
    })
  })

  it('updates tray with formatted time', () => {
    const seconds = 1499
    jest.spyOn(tray, 'update')
    const wrapper = shallow(TimerCounter, {store})
    store.commit('UPDATE_COUNT', seconds)
    wrapper.vm.$nextTick(() => {
      expect(tray.update).toHaveBeenCalledWith(formatTime(1499))
    })
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
