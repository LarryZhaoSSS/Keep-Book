import React from 'react'
import CategorySelect from '../components/CategorySelect'
import { Tabs, Tab } from '../components/Tabs'
import { testCategories } from '../testData'
import { PriceForm } from '../components/PriceForm'
import { TYPE_INCOME, TYPE_OUTCOME } from '../utility'
import { withContext } from '../WithContext'
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
  render() {
    const filterCategories = testCategories.filter(
      category => category.type === TYPE_OUTCOME
    )
    const { selectedTab, selectedCategory, validationPassed } = this.state
    const { data } = this.props
    console.log('---create-context---')
    console.log(data)
    return (
      <div
        className='create-page py-3 px-3 rounded mt-3'
        style={{ background: '#fff' }}
      >
        <Tabs activeIndex={0} onTabChange={() => {}}>
          <Tab>支出</Tab>
          <Tab>收入</Tab>
        </Tabs>
        <CategorySelect
          categories={filterCategories}
          onSelectCategory={this.selectCategory}
          selectedCategory={selectedCategory}
        />
        <PriceForm onFormSubmit={() => {}} onCancelSubmit={() => {}} />
      </div>
    )
  }
}
export default withContext(Create)
