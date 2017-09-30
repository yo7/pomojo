import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerCounter from '../timer-counter.vue'
import * as tray from '../tray'

describe('TimerCounter', () => {
  it('displays counter', () => {
    const wrapper = shallow(TimerCounter, {
      propsData: {seconds: 1499}
    })
    expect(wrapper.text()).toContain('24:59')
  })

  it('initalize tray on mounted', () => {
    jest.spyOn(tray, 'initialize')
    shallow(TimerCounter, {
      propsData: {seconds: 1500}
    })
    expect(tray.initialize).toHaveBeenCalled()
  })

  it('renders correctly', () => {
    const renderer = createRenderer()
    const wrapper = shallow(TimerCounter, {
      propsData: {seconds: 1500}
    })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw new Error()
      }
      expect(str).toMatchSnapshot()
    })
  })
})
