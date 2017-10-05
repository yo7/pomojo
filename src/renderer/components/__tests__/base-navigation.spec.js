import {shallow} from 'vue-test-utils'
import app from '../../helpers/app'
import BaseNavigation from '../base-navigation.vue'

describe('BaseNavigation', () => {
  it('close app on close icon clicked', () => {
    const wrapper = shallow(BaseNavigation)
    const icon = wrapper.find('.nav-item')
    jest.spyOn(app, 'close')
    icon.trigger('click')
    expect(app.close).toHaveBeenCalled()
  })
})

