import React, { Component } from 'react'
import PropType from 'prop-types'
import { connect } from 'react-redux'

// actions
import { getRecipes } from '../../actions/recipeListActions'

class RecipeList extends Component {
    static propTypes = {
        recipes: PropType.array
    }
    static defaultProps = {
        recipes: [{ id: 1, name: 'Chicken' }, { id: 2, name: 'Pollo guarro' }]
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.props.getRecipes()
    }

    render() {
        return (
            <div>
                {
                    this.props.recipes.map((r) => {
                        return <div>{r.name}</div>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoaderVisible: state.spinner.visible
})

const mapDispatchToProps = {
    getRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)
