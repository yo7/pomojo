import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import PreferencesSelect from '../preferences-select.vue'

describe('PreferencesSelect', () => {
  let wrapper
  const onChanged = jest.fn()
  beforeEach(() => {
    wrapper = shallow(PreferencesSelect, {propsData: {
      options: [1, 2, 3],
      current: 2,
      onChanged
    }})
  })

  it('has as many options as its props', () => {
    expect(wrapper.findAll('option').length).toBe(3)
  })

  it('call onChanged on select clicked', () => {
    const select = wrapper.find('.select')
    select.trigger('change')
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
