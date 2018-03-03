import createReducer from './lib/createReducer'

const initialState = {
    visible: false,
    counter: 0
}

export default createReducer(initialState, {
    TOGGLE_SPINNER: (state) => ({ ...state, visible: !state.visible }),
    COUNTER_INCREMENT: (state) => ({ visible: true, counter: state.counter + 1 }),
    COUNTER_DECREMENT: (state) => {
        const currentCounter = state.counter - 1
        return (currentCounter < 1)
            ? { visible: false, counter: 0 }
            : { visible: true, counter: currentCounter }
    },
    RESET_COUNTER: () => ({ visible: false, counter: 0 })
})