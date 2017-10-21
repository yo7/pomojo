import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import PreferencesRow from '../preferences-row.vue'

describe('PreferencesRow', () => {
  const wrapper = shallow(PreferencesRow, {propsData: {
    title: 'Title'
  }})

  it('renders title', () => {
    expect(wrapper.find('.title').text()).toBe('Title')
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
