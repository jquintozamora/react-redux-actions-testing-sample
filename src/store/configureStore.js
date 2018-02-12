import { applyMiddleware, compose, createStore } from 'redux'

// Redux Thunk middleware allows us to create thunks instead of action creators 
//      A thunk can be used to delay the dispatch of an action, 
//      or to dispatch only if a certain condition is met.
import thunk from 'redux-thunk'

// Redux middleware that spits an error on you when you try to mutate 
// your state either inside a dispatch or between dispatches. For development use only!
//import * as invariant from "redux-immutable-state-invariant"
// Redux-Logger: http://evgenyrodionov.github.io/redux-logger/
// import createLogger from 'redux-logger'

import rootReducer from "../reducers/index"

export default function configureStore(initialState) {
    const middleware = [thunk]
 
    // middleware.push(invariant());
    // middleware.push(createLogger());
    // Configure Redux DevTools Extension only on DEV
    const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify here name, actionsBlacklist, actionsCreators and other options
        })
        : compose

    const enhancer = composeEnhancers(
        applyMiddleware(...middleware)
    )

    console.log('here')
    console.log(rootReducer)
    console.log(enhancer)
    return createStore(rootReducer, enhancer);
}
