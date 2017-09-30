import Vue from 'vue'
import Vuex from 'vuex'
import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerReset from '../timer-reset.vue'

Vue.use(Vuex)

describe('TimerReset', () => {
  let store

  it('shows reset text if resettable', () => {
    const getters = {'timer/resettable': () => true}
    store = new Vuex.Store({getters})

    const wrapper = shallow(TimerReset, {store})
    const text = wrapper.find('.timer-reset > span')
    expect(text.hasStyle('display', 'none')).toBeFalsy()
  })

  it('does not show reset text unless resettable', () => {
    const getters = {'timer/resettable': () => false}
    store = new Vuex.Store({getters})

    const wrapper = shallow(TimerReset, {store})
    const text = wrapper.find('.timer-reset > span')
    expect(text.hasStyle('display', 'none')).toBeTruthy()
  })

  it('reset timer on click', () => {
    const getters = {'timer/resettable': () => true}
    const actions = {
      'timer/reset': jest.fn()
    }
    store = new Vuex.Store({getters, actions})
    const wrapper = shallow(TimerReset, {store})
    const text = wrapper.find('.timer-reset > span')
    text.trigger('click')
    expect(actions['timer/reset']).toHaveBeenCalled()
  })

  it('renders correctly', () => {
    const renderer = createRenderer()
    const getters = {'timer/resettable': () => true}
    store = new Vuex.Store({getters})

    const wrapper = shallow(TimerReset, {store})
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw new Error()
      }
      expect(str).toMatchSnapshot()
    })
  })
})
