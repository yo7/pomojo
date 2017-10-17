import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerReset from '../timer-reset.vue'

describe('TimerReset', () => {
  let propsData
  let wrapper
  let text

  describe('if resettable', () => {
    beforeEach(() => {
      propsData = {
        running: true,
        pausing: true,
        onClicked: jest.fn()
      }
      wrapper = shallow(TimerReset, {propsData})
      text = wrapper.find('.timer-reset > span')
    })

    it('shows reset text', () => {
      expect(text.hasStyle('display', 'none')).toBeFalsy()
    })

    it('reset timer on click', () => {
      text.trigger('click')
      expect(propsData.onClicked).toHaveBeenCalled()
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
    let propsData
    let wrapper
    let text

    beforeEach(() => {
      propsData = {
        running: false,
        pausing: false
      }
      wrapper = shallow(TimerReset, {propsData})
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
