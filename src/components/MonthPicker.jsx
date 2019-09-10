import React from 'react'
import PropTypes from 'prop-types'
import { padLeft, range } from '../utility'
class MonthPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      selectedYear: this.props.year,
      selectedMonth: this.props.month
    }
  }
  toggleDropDown = event => {
    event.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  selectYear = (event, yearNumber) => {
    event.preventDefault()
    this.setState({
      selectedYear: yearNumber
    })
  }
  selectMonth = (event, monthNumber) => {
    event.preventDefault()
    console.log(monthNumber)
    this.setState({
      selectedMonth: monthNumber,
      isOpen: false
    })
    this.props.onChange(this.state.selectedYear, monthNumber)
  }
  render() {
    const { year, month } = this.props
    const { isOpen, selectedYear, selectedMonth } = this.state
    const monthRange = range(12, 1)
    const yearRange = range(9, -4).map(number => number + year)
    return (
      <div className='dropdown month-picker-component'>
        <h4>选择月份</h4>
        <button
          className='btn btn-lg btn-secondary dropdown-toggle'
          onClick={this.toggleDropDown}
        >
          {`${year}年 ${padLeft(month)}月`}
        </button>
        {isOpen && (
          <div className='dropdown-menu' style={{ display: 'block' }}>
            <div className='row'>
              <div className='col border-right years-range'>
                {yearRange.map((yearNumber, index) => {
                  return (
                    <span
                      className={
                        yearNumber === selectedYear
                          ? 'dropdown-item active'
                          : 'dropdown-item'
                      }
                      onClick={event => {
                        this.selectYear(event, yearNumber)
                      }}
                      key={index}
                    >
                      {yearNumber} 年
                    </span>
                  )
                })}
              </div>
              <div className='col months-range'>
                {monthRange.map((monthNumber, index) => {
                  return (
                    <span
                      className={
                        monthNumber === selectedMonth
                          ? 'dropdown-item active'
                          : 'dropdown-item'
                      }
                      onClick={event => {
                        this.selectMonth(event, monthNumber)
                      }}
                      key={index}
                    >
                      {padLeft(monthNumber)}月
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

MonthPicker.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}
export default MonthPicker
