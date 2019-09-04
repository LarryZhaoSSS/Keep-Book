import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
import { LIST_VIEW, CHART_VIEW} from '../utility'
const generateLinkClass = (current, view) => {
  return current === view ? 'nav-link active' : 'nav-link'
}
function ViewTab({ activeTab, onTabChange }) {
  return (
    <ul className='nav nav-tabs nav-fill my-4'>
      <li className='nav-item'>
        <span className={generateLinkClass(activeTab, LIST_VIEW)}>
          <Ionicon
            className='rounded-circle mr-2'
            fontSize='25px'
            color={'#007bff'}
            icon='ios-paper'
          />
          列表模式
        </span>
      </li>
      <li className='nav-item'>
        <span className={generateLinkClass(activeTab, CHART_VIEW)}>
          <Ionicon
            className='rounded-circle mr-2'
            fontSize='25px'
            color={'#007bff'}
            icon='ios-pie'
          />
          图表模式
        </span>
      </li>
    </ul>
  )
}

export default ViewTab
