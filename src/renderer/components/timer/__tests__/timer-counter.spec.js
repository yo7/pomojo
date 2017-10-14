import Vue from 'vue'
import Vuex from 'vuex'
import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerCounter from '../timer-counter.vue'
import * as tray from '../../../helpers/tray'

Vue.use(Vuex)

describe('TimerCounter', () => {
  let store
  let state
  let mutations
  const propsData = {seconds: 1500}

  beforeEach(() => {
    state = {
      timer: {
        seconds: 1500
      }
    }
    mutations = {
      'timer/UPDATE_COUNT': (state, value) => {
        state.timer.seconds = value
      }
    }
    store = new Vuex.Store({state, mutations})
  })

  it('renders counter', () => {
    const wrapper = shallow(TimerCounter, {store, propsData})
    expect(wrapper.text()).toContain('25:00')
  })

  it('initalize tray on mounted', () => {
    jest.spyOn(tray, 'initialize')
    shallow(TimerCounter, {store, propsData})
    expect(tray.initialize).toHaveBeenCalled()
  })

  it('does not update tray on mounted', () => {
    jest.spyOn(tray, 'update')
    shallow(TimerCounter, {store, propsData})
    expect(tray.update).not.toHaveBeenCalled()
  })

  it('does not initialize tray on updated', () => {
    jest.spyOn(tray, 'initialize')
    const wrapper = shallow(TimerCounter, {store, propsData})
    store.commit('timer/UPDATE_COUNT', 1499)
    wrapper.vm.$nextTick(() => {
      expect(tray.initialize).toHaveBeenCalled()
    })
  })

  it('renders correctly', () => {
    const renderer = createRenderer()
    const wrapper = shallow(TimerCounter, {store, propsData})
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw new Error()
      }
      expect(str).toMatchSnapshot()
    })
  })
})
