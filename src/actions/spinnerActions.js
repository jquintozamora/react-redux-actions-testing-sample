
// action types
export const TOGGLE_SPINNER = 'TOGGLE_SPINNER'
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT'
export const RESET_COUNTER = 'RESET_COUNTER'


// action creators
export function toggleSpinner() {
    return {
        type: TOGGLE_SPINNER
    }
}

export function resetCounter() {
    return {
        type: RESET_COUNTER
    }
}

export function counterIncrement() {
    return {
        type: COUNTER_INCREMENT
    }
}

export function counterDecrement() {
    return {
        type: COUNTER_DECREMENT
    }
}
