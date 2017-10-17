import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerCounter from '../timer-counter.vue'

describe('TimerCounter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(TimerCounter, {propsData: {
      text: '25:00'
    }})
  })

  it('renders counter', () => {
    expect(wrapper.text()).toContain('25:00')
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
