import React from 'react'
import CategorySelect from '../components/CategorySelect'
import { withRouter } from 'react-router-dom'
import { Tabs, Tab } from '../components/Tabs'
import { testCategories } from '../testData'
import { PriceForm } from '../components/PriceForm'
import { TYPE_INCOME, TYPE_OUTCOME } from '../utility'
import { withContext } from '../WithContext'
const tabsText = [TYPE_OUTCOME, TYPE_INCOME]

class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: TYPE_OUTCOME,
      selectedCategory: null,
      validationPassed: true
    }
  }
  selectCategory = category => {
    this.setState({
      selectedCategory: category
    })
  }
  tabChange = index => {
    this.setState({
      selectedTab: tabsText[index]
    })
  }
  cancelSubmit = () => {
    this.props.history.push('/')
  }
  submitForm = (data, isEditMode) => {
    if (!isEditMode) {
      // create
      this.props.actions.createItem(data, this.state.selectedCategory.id)
      this.props.history.push('/')
    } else {
      // update
    }
  }
  render() {
    const { selectedTab, selectedCategory, validationPassed } = this.state
    const { data } = this.props
    const { items, categories } = data
    const filterCategories = Object.keys(categories)
      .filter(id => categories[id].type === selectedTab)
      .map(id => categories[id])
    const tabIndex = tabsText.findIndex(text => text === selectedTab)

    console.log('---create-context---')
    console.log(data)
    return (
      <div
        className='create-page py-3 px-3 rounded mt-3'
        style={{ background: '#fff' }}
      >
        <Tabs activeIndex={tabIndex} onTabChange={this.tabChange}>
          <Tab>支出</Tab>
          <Tab>收入</Tab>
        </Tabs>
        <CategorySelect
          categories={filterCategories}
          onSelectCategory={this.selectCategory}
          selectedCategory={selectedCategory}
        />
        <PriceForm
          onFormSubmit={this.submitForm}
          onCancelSubmit={this.cancelSubmit}
        />
      </div>
    )
  }
}
export default withRouter(withContext(Create))
