import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home'
import Create from './containers/Create'
import { flatternArr, ID, parseToYearAndMonth } from './utility'
export const testCategories = [
  {
    name: '旅行',
    iconName: 'ios-plane',
    id: '1',
    type: 'outcome'
  },
  {
    name: '餐饮',
    iconName: 'ios-restaurant',
    id: '2',
    type: 'outcome'
  },
  {
    name: '购物',
    iconName: 'ios-basket',
    id: '3',
    type: 'outcome'
  },
  {
    name: '数码',
    iconName: 'ios-phone-portrait',
    id: '4',
    type: 'outcome'
  },
  {
    name: '工资',
    iconName: 'ios-card',
    id: '10',
    type: 'income'
  },
  {
    name: '兼职',
    iconName: 'ios-cash',
    id: '11',
    type: 'income'
  },
  {
    name: '理财',
    iconName: 'logo-yen',
    id: '12',
    type: 'income'
  }
]

export const testItems = [
  {
    title: 'buy stuff for kitten',
    price: 100,
    date: '2018-08-15',
    monthCategory: '2018-8',
    id: '_kly1klf4g',
    cid: '1',
    timestamp: 1534291200000
  },
  {
    title: '这是我的工资',
    price: 20000,
    date: '2018-08-18',
    monthCategory: '2018-8',
    id: '_bd16bjeen',
    cid: '2',
    timestamp: 1534550400000
  },
  {
    title: '和哥们一起喝酒',
    price: 300,
    date: '2018-08-20',
    monthCategory: '2018-8',
    id: '_jjfice21k',
    cid: '3',
    timestamp: 1534723200000
  },
  {
    title: '理财收入',
    price: 1000,
    date: '2018-08-11',
    monthCategory: '2018-8',
    id: '_1fg1wme63',
    cid: '11',
    timestamp: 1533945600000
  },
  {
    title: '理财收入',
    price: 300,
    date: '2018-11-15',
    monthCategory: '2018-11',
    id: '_qryggm5y8',
    cid: '12',
    timestamp: 1534291200000
  },
  {
    title: '请别人吃饭',
    price: 300,
    date: '2018-11-15',
    monthCategory: '2018-11',
    id: '_qryggm511',
    cid: '3',
    timestamp: 1534291200000
  }
]
export const AppContext = React.createContext()
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: flatternArr(testItems),
      categories: flatternArr(testCategories)
    }
    this.actions = {
      deleteItem: item => {
        delete this.state.items[item.id]
        this.setState({
          items: this.state.items
        })
      },
      createItem: (data, categoryId) => {
        console.log('createItem')
        console.log(categoryId)
        const newId = ID()
        const parsedDate = parseToYearAndMonth(data.date)
        data.monthCategory = `${parsedDate.year}-${parsedDate.month}}`
        data.timestamp = new Date(data.date).getTime()
        const newItem = { ...data, id: newId, cid: categoryId }
        this.setState({
          items: { ...this.state.items, [newId]: newItem }
        })
      }
    }
  }
  render() {
    return (
      <AppContext.Provider value={{ state: this.state, actions: this.actions }}>
        <Router>
          <div className='App'>
            <div className='container pb-5'>
              <Route path='/' exact component={Home} />
              <Route path='/create' exact component={Create} />
              <Route path='/edit/:id' exact component={Create} />
            </div>
          </div>
        </Router>
      </AppContext.Provider>
    )
  }
}

export default App
