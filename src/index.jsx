import { AppContainer } from 'react-hot-loader' // required
import React from 'react'
import {render} from 'react-dom' 
import App from './containers/App' // App

renderWithHotReload(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const App = require('./containers/App').default
    renderWithHotReload(App);
  })
}

function renderWithHotReload(App) {
  render (
      <App />
    , document.getElementById('starter')
  )
}