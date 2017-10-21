import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import app from '../../../helpers/app'
import PreferencesQuit from '../preferences-quit.vue'

describe('Preferences Quit', () => {
  const wrapper = shallow(PreferencesQuit)

  it('close app on clicked', () => {
    jest.spyOn(app, 'close')
    wrapper.trigger('click')
    expect(app.close).toHaveBeenCalled()
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
