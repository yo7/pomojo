import Vue from 'vue'
import Vuex from 'vuex'
import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerReset from '../timer-reset.vue'

Vue.use(Vuex)

describe('TimerReset', () => {
  describe('if resettable', () => {
    let text
    let actions
    let wrapper

    beforeEach(() => {
      const getters = {'timer/resettable': () => true}
      actions = {
        'timer/reset': jest.fn()
      }
      const store = new Vuex.Store({getters, actions})
      wrapper = shallow(TimerReset, {store})
      text = wrapper.find('.timer-reset > span')
    })

    it('shows reset text', () => {
      expect(text.hasStyle('display', 'none')).toBeFalsy()
    })

    it('reset timer on click', () => {
      text.trigger('click')
      expect(actions['timer/reset']).toHaveBeenCalled()
    })

    it('renders correctly', () => {
      const renderer = createRenderer()
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) {
          throw new Error()
        }
        expect(str).toMatchSnapshot()
      })
    })
  })

  describe('unless resettable', () => {
    let text
    let wrapper

    beforeEach(() => {
      const getters = {'timer/resettable': () => false}
      const store = new Vuex.Store({getters})
      wrapper = shallow(TimerReset, {store})
      text = wrapper.find('.timer-reset > span')
    })

    it('does not show reset text', () => {
      expect(text.hasStyle('display', 'none')).toBeTruthy()
    })

    it('renders correctly', () => {
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
