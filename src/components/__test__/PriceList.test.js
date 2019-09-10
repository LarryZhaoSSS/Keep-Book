import React from 'react'
import { shallow } from 'enzyme'
import Ionicon from 'react-ionicons'
import PriceList from '../PriceList'
const items = [
  {
    id: 1,
    title: '去旅游',
    price: 2000,
    date: '2019-09-01',
    cid: 1
  },
  {
    id: 2,
    title: '基金',
    price: 1000,
    date: '2019-10-11',
    cid: 2
  }
]
const categories = {
  '1': {
    id: 1,
    name: '旅行',
    type: 'outcome',
    iconName: 'ios-plane'
  },
  '2': {
    id: 2,
    name: '基金',
    type: 'income',
    iconName: 'ios-plane'
  }
}
const newItem = {
  id: 4,
  title: '买零食',
  price: 100,
  date: '2019-10-11',
  cid: 1
}
const itemsWithCatgory = items.map(item => {
  item.category = categories[item.cid]
  return item
})

const props = {
  items: itemsWithCatgory,
  onModifyItem: jest.fn(),
  onDeleteItem: jest.fn()
}
let wrapper
describe('test PriceList component', () => {
  beforeEach(() => {
    wrapper = shallow(<PriceList {...props} />)
  })
  it('should rener the component to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should render correct price items length', () => {
    expect(wrapper.find('.list-group-item').length).toEqual(
      itemsWithCatgory.length
    )
  })
  it('should render correct icon and price for each item', () => {
    const iconList = wrapper
      .find('.list-group-item')
      .first()
      .find(Ionicon)
    expect(iconList.length).toEqual(3)
    expect(iconList.first().props().icon).toEqual(
      itemsWithCatgory[0].category.iconName
    )
  })
  it('should trigger the correct function callbacks', () => {
    const firstItem = wrapper.find('.list-group-item').first()
    console.log(firstItem)
    firstItem
      .find('.icon-click')
      .first()
      .simulate('click', { preventDefault: () => {} })
    expect(props.onModifyItem).toHaveBeenCalledWith(itemsWithCatgory[0])
    firstItem
      .find('.icon-click')
      .last()
      .simulate('click', { preventDefault: () => {} })
    expect(props.onDeleteItem).toHaveBeenCalledWith(itemsWithCatgory[0])
  })
})
