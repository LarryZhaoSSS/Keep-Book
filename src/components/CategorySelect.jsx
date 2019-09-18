import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'

class CategorySelect extends React.Component {
  render() {
    const { categories, selectedCategory } = this.props
    return (
      <div className='category-select-component'>
        <div className='row'>
          {categories.map((category, index) => {
            const activeClassName =
              selectedCategory && selectedCategory.id === category.id
                ? 'category-item col-3 active'
                : 'category-item col-3'
            return (
              <div className={activeClassName} key={index}>
                <Ionicon
                  className='rounded-circle'
                  font-size='50px'
                  color='#555'
                  icon={category.iconName}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default CategorySelect
