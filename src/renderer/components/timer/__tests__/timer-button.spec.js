import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import TimerButton from '../timer-button.vue'

describe('TimerButton', () => {
  it('renders correctly', () => {
    const renderer = createRenderer()
    const wrapper = shallow(TimerButton, {
      propsData: {running: false, onBreak: false, seconds: 1500}
    })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw new Error()
      }
      expect(str).toMatchSnapshot()
    })
  })
})
