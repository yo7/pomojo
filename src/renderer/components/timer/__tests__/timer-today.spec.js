import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerToday from '../timer-today.vue'

describe('TimerToday', () => {
  let wrapper

  it('contains text when it has today count and goal count', () => {
    wrapper = shallow(TimerToday, {propsData: {
      resting: false,
      today: 4,
      goal: 8
    }})
    expect(wrapper.contains('.text')).toBe(true)
  })

  it('does not contain text when the goal count is 0', () => {
    wrapper = shallow(TimerToday, {propsData: {
      resting: false,
      today: 4,
      goal: 0
    }})
    expect(wrapper.contains('.text')).toBe(false)
  })

  it('contains today and goal text', () => {
    wrapper = shallow(TimerToday, {propsData: {
      resting: false,
      today: 2,
      goal: 8
    }})
    expect(wrapper.find('.text').text().trim()).toBe('2/8')
  })

  it('renders correctly', () => {
    const renderer = createRenderer()
    wrapper = shallow(TimerToday, {propsData: {
      resting: false,
      toay: 4,
      goal: 8
    }})
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw new Error()
      }
      expect(str).toMatchSnapshot()
    })
  })
})
