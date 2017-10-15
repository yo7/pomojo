import Vue from 'vue'
import Vuex from 'vuex'
import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerButton from '../timer-button.vue'

Vue.use(Vuex)

describe('TimerButton', () => {
  describe('if pausable', () => {
    let actions
    let store

    beforeEach(() => {
      actions = {'timer/toggle': jest.fn()}
      const getters = {'timer/pausable': () => true}
      store = new Vuex.Store({actions, getters})
    })

    it('has pause icon', () => {
      const wrapper = shallow(TimerButton, {store})
      const icon = wrapper.find('.icon')
      expect(icon.hasClass('fa-pause')).toBe(true)
    })

    it('toggle timer on click icon', () => {
      const wrapper = shallow(TimerButton, {store})
      const icon = wrapper.find('.icon')
      icon.trigger('click')
      expect(actions['timer/toggle']).toHaveBeenCalled()
    })

    it('renders correctly', () => {
      const wrapper = shallow(TimerButton, {store})
      const renderer = createRenderer()
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) {
          throw new Error()
        }
        expect(str).toMatchSnapshot()
      })
    })
  })

  describe('unless pausable', () => {
    let store
    let actions

    beforeEach(() => {
      actions = {'timer/toggle': jest.fn()}
      const getters = {'timer/pausable': () => false}
      store = new Vuex.Store({actions, getters})
    })

    it('has play icon', () => {
      const wrapper = shallow(TimerButton, {store})
      const icon = wrapper.find('.icon')
      expect(icon.hasClass('fa-play')).toBe(true)
    })

    it('toggle timer on click icon', () => {
      const wrapper = shallow(TimerButton, {store})
      const icon = wrapper.find('.icon')
      icon.trigger('click')
      expect(actions['timer/toggle']).toHaveBeenCalled()
    })

    it('renders correctly', () => {
      const wrapper = shallow(TimerButton, {store})
      const renderer = createRenderer()
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) {
          throw new Error()
        }
        expect(str).toMatchSnapshot()
      })
    })
  })
})
