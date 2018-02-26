import React, { Component } from 'react'
import RecipeList from './RecipeList'

export default class Main extends Component {
    render() {
        return (
          <div className="app-container">
            <RecipeList />
          </div>
        )
    }
}