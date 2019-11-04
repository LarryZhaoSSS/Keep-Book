import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
  return (
    <ul className='list-group list-group-flush'>
      {items.map(item => (
        <li
          className='list-group-item d-flex justify-content-between align-items-center'
          key={item.id}
        >
          <span className='col-1 badge badge-primary'>
            <Ionicon
              className='rounded-circle'
              fontSize='30px'
              style={{ backgroundColor: '#007bff', padding: '5px' }}
              color={'#fff'}
              icon={item.category && item.category.iconName}
            />
          </span>
          <span className='col-5'> {item.title} </span>
          <span className='col-2 font-weight-bold'>
            {item.category && item.category.type === 'income' ? '+' : '-'}
            {item.price}元
          </span>
          <span className='col-2'>{item.date}</span>
          <span
            className='col-1 icon-click'
            onClick={() => {
              onModifyItem(item)
            }}
          >
            <Ionicon
              className='rounded-circle'
              fontSize='30px'
              style={{ backgroundColor: '#28a745', padding: '5px' }}
              color={'#fff'}
              icon='ios-create-outline'
            />
          </span>
          <span
            onClick={() => {
              onDeleteItem(item)
            }}
            className='col-1 icon-click'
          >
            <Ionicon
              className='rounded-circle'
              fontSize='30px'
              style={{ backgroundColor: '#dc3545', padding: '5px' }}
              color={'#fff'}
              icon='ios-close'
            />
          </span>
        </li>
      ))}
    </ul>
  )
}
PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
}
PriceList.defaultProps = {
  onModifyItem: () => {
    alert('3')
  }
}
export default PriceList
