import Vue from 'vue'
import Vuex from 'vuex'
import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerCounter from '../timer-counter.vue'
import * as tray from '../../../helpers/tray'

Vue.use(Vuex)

describe('TimerCounter', () => {
  const propsData = {seconds: 1500}

  it('renders counter', () => {
    const wrapper = shallow(TimerCounter, {propsData})
    expect(wrapper.text()).toContain('25:00')
  })

  it('initalize tray on mounted', () => {
    jest.spyOn(tray, 'initialize')
    shallow(TimerCounter, {propsData})
    expect(tray.initialize).toHaveBeenCalled()
  })

  it('does not update tray on mounted', () => {
    jest.spyOn(tray, 'update')
    shallow(TimerCounter, {propsData})
    expect(tray.update).not.toHaveBeenCalled()
  })

  it('does not initialize tray on updated', () => {
    jest.spyOn(tray, 'initialize')
    const wrapper = shallow(TimerCounter, {propsData})
    wrapper.vm.$nextTick(() => {
      expect(tray.initialize).toHaveBeenCalled()
    })
  })

  it('updates tray on updated', () => {
    jest.spyOn(tray, 'update')
    const wrapper = shallow(TimerCounter, {propsData})
    wrapper.setProps({seconds: 1499})
    wrapper.vm.$nextTick(() => {
      expect(tray.update).toHaveBeenCalled()
    })
  })

  it('updates tray with formattedTime', () => {
    jest.spyOn(tray, 'update')
    const wrapper = shallow(TimerCounter, {propsData})
    wrapper.setProps({seconds: 1499})
    wrapper.vm.$nextTick(() => {
      expect(tray.update).toHaveBeenCalledWith('24:59')
    })
  })

  it('renders correctly', () => {
    const renderer = createRenderer()
    const wrapper = shallow(TimerCounter, {propsData})
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw new Error()
      }
      expect(str).toMatchSnapshot()
    })
  })
})
