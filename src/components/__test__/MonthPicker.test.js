import React from 'react'
import { mount } from 'enzyme'
import MonthPicker from '../MonthPicker'
let props = {
  year: 2019,
  month: 9,
  onChange: jest.fn()
}
let wrapper
describe('test MonthPicker component', () => {
  beforeEach(() => {
    wrapper = mount(<MonthPicker {...props} />)
  })
  it('should render the component to match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('render the correct year and month,show correct dropdown', () => {
    const text = wrapper
      .find('.dropdown-toggle')
      .first()
      .text()
    expect(text).toEqual('2019年 09月')
    expect(wrapper.find('.dropdown-menu').length).toEqual(0)
    expect(wrapper.state('isOpen')).toEqual(false)
    expect(wrapper.state('selectedYear')).toEqual(props.year)
  })
  it('after click the button,dropdown the show,year & month change', () => {
    wrapper.find('.dropdown-toggle').simulate('click')
    expect(wrapper.state('isOpen')).toEqual(true)
    expect(wrapper.find('.dropdown-menu').length).toEqual(1)
    expect(wrapper.find('.years-range .dropdown-item').length).toEqual(9)
    expect(wrapper.find('.months-range .dropdown-item').length).toEqual(12)
    expect(wrapper.find('.years-range .dropdown-item.active').text()).toEqual(
      '2019 年'
    )
    expect(wrapper.find('.months-range .dropdown-item.active').text()).toEqual(
      '09月'
    )
    expect(
      wrapper
        .find('.years-range .dropdown-item')
        .first()
        .text()
    ).toEqual(`${props.year - 4} 年`)
  })
})
