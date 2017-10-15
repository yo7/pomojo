import Vue from 'vue'
import Vuex from 'vuex'
import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerButton from '../timer-button.vue'

Vue.use(Vuex)

describe('TimerButton', () => {
  describe('if running', () => {
    const propsData = {running: true}
    const actions = {'timer/toggle': jest.fn()}
    const store = new Vuex.Store({actions})
    let wrapper

    it('has pause icon', () => {
      wrapper = shallow(TimerButton, {store, propsData})
      const icon = wrapper.find('.icon')
      expect(icon.hasClass('fa-pause')).toBe(true)
    })

    it('toggle timer on click icon', () => {
      wrapper = shallow(TimerButton, {store, propsData})
      const icon = wrapper.find('.icon')
      icon.trigger('click')
      expect(actions['timer/toggle']).toHaveBeenCalled()
    })

    it('renders correctly', () => {
      wrapper = shallow(TimerButton, {store, propsData})
      const renderer = createRenderer()
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) {
          throw new Error()
        }
        expect(str).toMatchSnapshot()
      })
    })
  })

  describe('unless running', () => {
    const propsData = {running: false}
    const actions = {'timer/toggle': jest.fn()}
    const store = new Vuex.Store({actions})
    let wrapper

    it('has play icon', () => {
      wrapper = shallow(TimerButton, {store, propsData})
      const icon = wrapper.find('.icon')
      expect(icon.hasClass('fa-play')).toBe(true)
    })

    it('toggle timer on click icon', () => {
      wrapper = shallow(TimerButton, {store, propsData})
      const icon = wrapper.find('.icon')
      icon.trigger('click')
      expect(actions['timer/toggle']).toHaveBeenCalled()
    })

    it('renders correctly', () => {
      const store = new Vuex.Store({actions})
      wrapper = shallow(TimerButton, {store, propsData})
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
