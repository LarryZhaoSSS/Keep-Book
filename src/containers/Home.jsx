import React from 'react'
import logo from '../logo.svg'
import Ionicon from 'react-ionicons'
import PriceList from '../components/PriceList'
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'
import {
  LIST_VIEW,
  CHART_VIEW,
  TYPE_INCOME,
  TYPE_OUTCOME,
  parseToYearAndMonth,
  padLeft
} from '../utility'
import TotalPrice from '../components/TotalPrice'
import { Tabs, Tab } from '../components/Tabs'
import { withContext } from '../WithContext'
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
const tabsText = [LIST_VIEW, CHART_VIEW]
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items,
      currentDate: parseToYearAndMonth('2019/10/01'),
      tabView: tabsText[0]
    }
  }
  changeView = index => {
    this.setState({
      tabView: tabsText[index]
    })
  }
  changeDate = (year, month) => {
    this.setState({
      currentDate: { year, month }
    })
  }
  modifyItem = modifiedItem => {
    const modifiedItems = this.state.items.map(item => {
      if (item.id === modifiedItem.id) {
        return { ...item, title: '新标题' }
      } else {
        return item
      }
    })
    this.setState({
      items: modifiedItems
    })
  }
  createItem = () => {
    this.setState({
      items: [newItem, ...this.state.items]
    })
  }
  deleteItem = deletedItem => {
    const filteredItems = this.state.items.filter(
      item => item.id !== deletedItem.id
    )
    this.setState({
      items: filteredItems
    })
  }
  render() {
    const { items, currentDate, tabView } = this.state
    const itemsWithCatgory = items
      .map(item => {
        item.category = categories[item.cid]
        return item
      })
      .filter(item => {
        return item.date.includes(
          `${currentDate.year}-${padLeft(currentDate.month)}`
        )
      })
    let totalIncome = 0
    let totalOutcome = 0
    itemsWithCatgory.forEach(item => {
      if (item.category.type === TYPE_OUTCOME) {
        totalOutcome += item.price
      } else {
        totalIncome += item.price
      }
    })
    console.log('---home-width-context---')
    const { data } = this.props
    console.log(data)
    return (
      <>
        <header className='App-header'>
          <div className='row mb-5'>
            <img src={logo} className='App-logo' alt='' />
          </div>
          <div className='row'>
            <div className='col'>
              <MonthPicker
                year={currentDate.year}
                month={currentDate.month}
                onChange={this.changeDate}
              />
            </div>
            <div className='col'>
              <TotalPrice income={totalIncome} outcome={totalOutcome} />
            </div>
          </div>
        </header>
        <div className='content-area py-3 px-3'>
          <Tabs activeIndex={0} onTabChange={this.changeView}>
            <Tab>
              <Ionicon
                className='rounded-circle mr-2'
                fontSize='25px'
                color={'#007bff'}
                icon='ios-paper'
              />
              列表模式
            </Tab>
            <Tab>
              <Ionicon
                className='rounded-circle mr-2'
                fontSize='25px'
                color={'#007bff'}
                icon='ios-pie'
              />
              图表模式
            </Tab>
          </Tabs>
          <CreateBtn onClick={this.createItem} />
          {tabView === LIST_VIEW && (
            <PriceList
              items={itemsWithCatgory}
              onModifyItem={this.modifyItem}
              onDeleteItem={this.deleteItem}
            />
          )}
          {tabView === CHART_VIEW && (
            <h1 className='chart-title'>这里是图表区域</h1>
          )}
        </div>
      </>
    )
  }
}

export default withContext(Home)
