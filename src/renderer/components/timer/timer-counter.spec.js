import {shallow} from 'vue-test-utils'
import TimerCounter from './timer-counter.vue'
import tray from './update-tray'

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
})
