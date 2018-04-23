import actionTypes from './actionTypes'

export function storeStateInFile() {
    return { 
        type: actionTypes.STORE_STATE_IN_FILE
    }
}

export function loadStateFromFile() {
    return {
        type: actionTypes.LOAD_STATE_FROM_FILE
    }
}