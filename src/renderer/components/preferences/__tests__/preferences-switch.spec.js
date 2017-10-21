import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import PreferencesSwitch from '../preferences-switch.vue'

describe('PreferencesSwitch', () => {
  const onChanged = jest.fn()
  const wrapper = shallow(PreferencesSwitch, {propsData: {
    checked: true,
    onChanged
  }})

  it('switch on clicked', () => {
    const check = wrapper.find('.switch')
    check.trigger('click')
    expect(onChanged).toHaveBeenCalled()
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
