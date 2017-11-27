import React, { Component } from 'react'
import ActionCaller from '../components/ActionCaller'

export default class App extends Component {
    render() {
        return (
          <div className="app-container">
            <ActionCaller name="José" />
          </div>
        )
    }
}