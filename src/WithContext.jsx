import React from 'react'
import { AppContext } from './App'

export const withContext = Component => {
  return props => (
    <AppContext.Consumer>
      {({ state }) => {
        return <Component {...props} data={state} />
      }}
    </AppContext.Consumer>
  )
}
