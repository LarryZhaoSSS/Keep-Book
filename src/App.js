import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home'
import Create from './containers/Create'
function App() {
  return (
    <Router>
      <div className='App'>
        <div className='container pb-5'>
          <Route path='/' exact component={Home} />
          <Route path='/create' exact component={Create} />
          <Route path='/edit/:id' exact component={Create} />
        </div>
      </div>
    </Router>
  )
}

export default App
