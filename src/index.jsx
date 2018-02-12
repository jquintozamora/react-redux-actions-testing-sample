import React from 'react'
import { render } from 'react-dom'

import { AppContainer } from 'react-hot-loader' // required HMR
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()

/*
  Main App Container
 */
import App from "./containers/App"

const reactContainer = document.getElementById('starter')

render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  reactContainer
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(() => {
    const NextApp = require('./containers/App').default
    render(
      <Provider store={store}>
        <AppContainer>
          <NextApp />
        </AppContainer>
      </Provider>,
      reactContainer
    )
  })
}
