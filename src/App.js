import React from 'react'
import './App.less'
import 'bootstrap/dist/css/bootstrap.min.css'
import PriceList from './components/PriceList'
const items = [
  {
    id: 1,
    title: '去旅游',
    price: 2000,
    date: '2019-09-01',
    category: {
      id: 1,
      name: '旅行',
      type: 'outcome'
    }
  },
  {
    id: 2,
    title: '基金',
    price: 1000,
    date: '2019-09-11',
    category: {
      id: 2,
      name: '理财',
      type: 'income'
    }
  }
]
function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <PriceList
        items={items}
        onModifyItem={item => {
          alert(item.id)
        }}
        onDeleteItem={item => {
          alert(item.id)
        }}
      />
    </div>
  )
}

export default App
