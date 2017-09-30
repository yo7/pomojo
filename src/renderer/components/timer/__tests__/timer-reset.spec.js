import Vue from 'vue'
import Vuex from 'vuex'
import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerReset from '../timer-reset.vue'

Vue.use(Vuex)

describe('TimerReset', () => {
  let store

  it('shows reset text unless resettable', () => {
    const getters = {resettable: () => false}
    store = new Vuex.Store({getters})

    const wrapper = shallow(TimerReset, {store})
    const text = wrapper.find('.timer-reset > span')
    expect(text.hasStyle('display', 'none')).toBeTruthy()
  })

  it('shows reset text unless resettable', () => {
    const getters = {resettable: () => true}
    store = new Vuex.Store({getters})

    const wrapper = shallow(TimerReset, {store})
    const text = wrapper.find('.timer-reset > span')
    expect(text.hasStyle('display', 'none')).toBeFalsy()
  })

  it('reset timer on click', () => {
    const getters = {resettable: () => false}
    const actions = {
      reset: jest.fn()
    }
    store = new Vuex.Store({getters, actions})
    const wrapper = shallow(TimerReset, {store})
    const text = wrapper.find('.timer-reset > span')
    text.trigger('click')
    expect(actions.reset).toHaveBeenCalled()
  })

  it('renders correctly', () => {
    const renderer = createRenderer()
    const getters = {resettable: () => true}
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
