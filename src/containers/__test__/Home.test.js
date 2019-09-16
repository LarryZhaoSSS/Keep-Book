import React from 'react'
import { mount } from 'enzyme'
import Home from '../Home'
import PriceList from '../../components/PriceList'
import ViewTab from '../../components/ViewTab'
import MonthPicker from '../../components/MonthPicker'
import CreateBtn from '../../components/CreateBtn'
import {
  LIST_VIEW,
  CHART_VIEW,
  TYPE_INCOME,
  TYPE_OUTCOME,
  parseToYearAndMonth,
  padLeft
} from '../../utility'

let wrapper
const newItem = {
  id: 4,
  title: '买零食',
  price: 100,
  date: '2019-10-11',
  cid: 1
}
describe('test Home container component', () => {
  beforeEach(() => {
    wrapper = mount(<Home />)
  })
  it('should render the default layout', () => {
    const currentDate = parseToYearAndMonth('2019/10/01')
    expect(wrapper.find(PriceList).length).toEqual(1)
    expect(wrapper.find(ViewTab).props().activeTab).toEqual(LIST_VIEW)
    expect(wrapper.find(MonthPicker).props().year).toEqual(currentDate.year)
    expect(wrapper.find(MonthPicker).props().month).toEqual(currentDate.month)
    expect(wrapper.find(PriceList).props().items.length).toEqual(1)
  })
  it('click the antother view tab, should change the tab', () => {
    wrapper
      .find('.nav-item span')
      .last()
      .simulate('click')
    expect(wrapper.find(PriceList).length).toEqual(0)
    expect(wrapper.find('.chart-title').length).toEqual(1)
    expect(wrapper.find(ViewTab).props().activeTab).toEqual(CHART_VIEW)
  })
  it('click the new month item , should switch to correct time', () => {
    wrapper.find('.dropdown-toggle').simulate('click')
    wrapper
      .find('.months-range .dropdown-item')
      .at(8)
      .simulate('click')
    expect(wrapper.find(MonthPicker).props().month).toEqual(9)
    expect(wrapper.find(PriceList).length).toEqual(1)
  })
  it('click the create button, should create the new item', () => {
    wrapper.find(CreateBtn).simulate('click')
    expect(wrapper.find(PriceList).props().items.length).toEqual(2)
  })
})
