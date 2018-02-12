import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader' // required HMR
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()

/*
  Main App Container
 */
import App from "./containers/App"

// Render function containing the HMR AppContainer
const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById("starter")
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./containers/App", () => {
    // If we receive a HMR request for our App container,
    // then reload it using require (we can't do this dynamically with import)
    const NextApp = <Provider store={store}>
      <AppContainer component={require("./containers/App").default} />
    </Provider>
    render(NextApp)
  })
}
