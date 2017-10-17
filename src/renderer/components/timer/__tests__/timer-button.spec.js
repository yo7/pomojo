import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerButton from '../timer-button.vue'

describe('TimerButton', () => {
  describe('if pausable', () => {
    let propsData
    let wrapper

    beforeEach(() => {
      propsData = {
        status: true,
        onClicked: jest.fn()
      }
      wrapper = shallow(TimerButton, {propsData})
    })

    it('has pause icon', () => {
      const icon = wrapper.find('.icon')
      expect(icon.hasClass('fa-pause')).toBe(true)
    })

    it('toggle timer on click icon', () => {
      const icon = wrapper.find('.icon')
      icon.trigger('click')
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

  describe('unless pausable', () => {
    let propsData
    let wrapper

    beforeEach(() => {
      propsData = {
        status: false,
        onClicked: jest.fn()
      }
      wrapper = shallow(TimerButton, {propsData})
    })

    it('has play icon', () => {
      const icon = wrapper.find('.icon')
      expect(icon.hasClass('fa-play')).toBe(true)
    })

    it('toggle timer on click icon', () => {
      const icon = wrapper.find('.icon')
      icon.trigger('click')
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
})
