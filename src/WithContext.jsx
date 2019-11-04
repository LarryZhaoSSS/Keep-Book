import React from 'react'
import { AppContext } from './App'

export const withContext = Component => {
  return props => (
    <AppContext.Consumer>
      {({ state, actions }) => {
        return <Component {...props} data={state} actions={actions} />
      }}
    </AppContext.Consumer>
  )
}
