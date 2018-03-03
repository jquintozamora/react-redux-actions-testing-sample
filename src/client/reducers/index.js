import { combineReducers } from 'redux'
import { default as spinner } from './spinnerReducer'

const rootReducer = combineReducers({
    spinner
})

export default rootReducer