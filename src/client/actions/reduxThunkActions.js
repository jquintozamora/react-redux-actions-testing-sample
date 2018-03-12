// What is a thunk?
//  A thunk is a function that wraps an expression to delay its evaluation.

// 1. Asynchronous dispatch
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
function increment() {
    return {
        type: INCREMENT_COUNTER
    }
}
function incrementAsync() {
    return dispatch => {
        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(increment())
        }, 1000)
    }
}


// 2. Conditional dispatch
function incrementIfOdd() {
    return (dispatch, getState) => {
        const { counter } = getState();
        if (counter % 2 === 0) {
            return;
        }
        dispatch(increment())
    }
}


// 3. Calling API Asynchronously
function makeASandwichWithSecretSauce(forPerson) {
    // Invert control!
    // Return a function that accepts `dispatch` so we can dispatch later.
    // Thunk middleware knows how to turn thunk async actions into actions.
    return function (dispatch) {
        return fetchSecretSauce().then(
            sauce => dispatch(makeASandwich(forPerson, sauce)),
            error => dispatch(apologize('The Sandwich Shop', forPerson, error))
        )
    }
}


// 4. Using Promises
// In fact I can write action creators that dispatch
// actions and async actions from other action creators,
// and I can build my control flow with Promises.
function makeSandwichesForEverybody() {
    return function (dispatch, getState) {
        if (!getState().sandwiches.isShopOpen) {
            // You don’t have to return Promises, but it’s a handy convention
            // so the caller can always call .then() on async dispatch result.
            return Promise.resolve()
        }

        // We can dispatch both plain object actions and other thunks,
        // which lets us compose the asynchronous actions in a single flow.
        return dispatch(
            makeASandwichWithSecretSauce('My Grandma')
        ).then(() =>
            Promise.all([
                dispatch(makeASandwichWithSecretSauce('Me')),
                dispatch(makeASandwichWithSecretSauce('My wife'))
            ])
            ).then(() =>
                dispatch(makeASandwichWithSecretSauce('Our kids'))
            ).then(() =>
                dispatch(getState().myMoney > 42 ?
                    withdrawMoney(42) :
                    apologize('Me', 'The Sandwich Shop')
                )
            )
    }
}

// MORE ...
// The classic AJAX call - dispatch before the request, and after it comes back
function myThunkActionCreator(someValue) {
    return (dispatch, getState) => {
        dispatch({ type: "REQUEST_STARTED" });

        myAjaxLib.post("/someEndpoint", { data: someValue })
            .then(
            response => dispatch({ type: "REQUEST_SUCCEEDED", payload: response }),
            error => dispatch({ type: "REQUEST_FAILED", error: error })
            );
    };
}

// An example of conditional dispatching based on state
const MAX_TODOS = 5;

function addTodosIfAllowed(todoText) {
    return (dispatch, getState) => {
        const state = getState();

        if (state.todos.length < MAX_TODOS) {
            dispatch({ type: "ADD_TODO", text: todoText });
        }
    }
}


// An example of checking state after a dispatch
function checkStateAfterDispatch() {
    return (dispatch, getState) => {
        const firstState = getState();
        dispatch({ type: "FIRST_ACTION" });

        const secondState = getState();

        if (secondState.someField != firstState.someField) {
            dispatch({ type: "SECOND_ACTION" });
        }
    }
}

// An example of a thunk dispatching other action creators, 
// which may or may not be thunks themselves. No async code, just
// orchestration of higher-level synchronous logic.
function complexSynchronousThunk(someValue) {
    return (dispatch, getState) => {
        dispatch(someBasicActionCreator(someValue));
        dispatch(someThunkActionCreator());
    }
}

// One solution to the "cross-slice state in reducers" problem: 
// read the current state in a thunk, and include all the necessary
// data in the action

function crossSliceActionThunk() {
    return (dispatch, getState) => {
        const state = getState();
        // Read both slices out of state
        const { a, b } = state;

        // Include data from both slices in the action
        dispatch(type : "ACTION_FOR_A_AND_B", payload : { a, b });
    }
}