// actions
import { counterIncrement, counterDecrement } from './spinnerActions'
import { get } from 'axios'
import map from 'lodash.map'

// action types
export const GET_RECIPES = 'GET_RECIPES'
export const ADD_RECIPES = 'ADD_RECIPES'

const apiConfig = {
    app_id: 'da2b8b5c',
    app_key: 'a087ee17036dca15a18166ae836f3db0'
}
const query = {
    q: 'chicken'
}

function joinQuery(query, isStart) {
    return `${isStart ? '?' : ''}${Object.keys(query).map((value) => {
        return `${encodeURIComponent(value)}=${encodeURIComponent(query[value])}`
    }).join('&')}`
}

// Action Creators
export function addRecipes(recipes) {
    return {
        type: ADD_RECIPES,
        recipes
    }
}

export function getRecipes(searchText) {
    return (dispatch) => {
        dispatch(counterIncrement())
        const finalQuery = `https://api.edamam.com/search?${joinQuery(apiConfig)}&${joinQuery(query)}`
        return get(finalQuery)
            .then((res) => {
                const recipes = map(res.data.hits, 'recipe')
                console.log(res.data.hits)
                console.log(recipes)
                return dispatch(addRecipes(recipes))
            })
            .catch((err) => {
                //dispatch(setGenericError(err))
                console.log('err', err)
                dispatch(counterDecrement())
                return err
            })
    }
}
